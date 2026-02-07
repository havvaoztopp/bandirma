/**
 * DaySelector Bileşeni
 * Günlük program ekranının üstündeki yatay gün seçici
 */

import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '../theme';
import { Event } from '../types';

interface DayInfo {
    date: string; // YYYY-MM-DD
    dayOfWeek: string;
    dayNumber: number;
    hasEvents: boolean;
}

interface DaySelectorProps {
    days: DayInfo[];
    selectedDate: string;
    onDateSelect: (date: string) => void;
}

const DAYS_SHORT = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

export default function DaySelector({ days, selectedDate, onDateSelect }: DaySelectorProps) {
    const scrollViewRef = useRef<ScrollView>(null);

    // Seçili güne scroll et
    useEffect(() => {
        const selectedIndex = days.findIndex(d => d.date === selectedDate);
        if (selectedIndex !== -1 && scrollViewRef.current) {
            // Her item genişliği yaklaşık 70px
            const scrollX = Math.max(0, selectedIndex * 70 - 100);
            scrollViewRef.current.scrollTo({ x: scrollX, animated: true });
        }
    }, [selectedDate, days]);

    return (
        <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {days.map((day) => {
                const isSelected = day.date === selectedDate;

                return (
                    <TouchableOpacity
                        key={day.date}
                        style={styles.dayItem}
                        onPress={() => onDateSelect(day.date)}
                        activeOpacity={0.7}
                    >
                        <Text style={[
                            styles.dayOfWeek,
                            isSelected && styles.dayOfWeekSelected,
                        ]}>
                            {day.dayOfWeek}
                        </Text>

                        <View style={[
                            styles.dayCircle,
                            isSelected && styles.dayCircleSelected,
                        ]}>
                            <Text style={[
                                styles.dayNumber,
                                isSelected && styles.dayNumberSelected,
                            ]}>
                                {day.dayNumber}
                            </Text>
                        </View>

                        {/* Etkinlik göstergesi */}
                        {day.hasEvents && (
                            <View style={styles.eventDot} />
                        )}
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 100,
    },
    contentContainer: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.md,
        gap: spacing.md,
    },
    dayItem: {
        alignItems: 'center',
        width: 55,
    },
    dayOfWeek: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
        marginBottom: spacing.xs,
    },
    dayOfWeekSelected: {
        color: colors.accent,
        fontWeight: fontWeight.medium,
    },
    dayCircle: {
        width: 44,
        height: 44,
        borderRadius: borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    dayCircleSelected: {
        backgroundColor: colors.accent,
    },
    dayNumber: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.semibold,
        color: colors.textPrimary,
    },
    dayNumberSelected: {
        color: colors.textWhite,
    },
    eventDot: {
        width: 5,
        height: 5,
        borderRadius: borderRadius.full,
        backgroundColor: colors.accent,
        marginTop: spacing.xs,
    },
});
