/**
 * StatisticsScreen
 * İstatistikler ekranı - Tasarım 4
 * Memnuniyet haritası (takvim görünümü) ve ayın favorisi
 */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../theme';
import { calendarData, monthlyFavorite, turkishMonths } from '../mockData';
import CalendarView from '../components/CalendarView';

interface StatisticsScreenProps {
    // Props eklenebilir
}

export default function StatisticsScreen({ }: StatisticsScreenProps) {
    const [currentMonth, setCurrentMonth] = useState(4); // Mayıs (0-indexed)
    const [currentYear, setCurrentYear] = useState(2024);

    const handlePreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleDayPress = (day: number) => {
        // TODO: Gün detayını göster
        console.log('Selected day:', day);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>İstatistikler</Text>
                <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreIcon}>⋯</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Başlık */}
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Memnuniyet Haritası</Text>
                    <Text style={styles.subtitle}>Yemekhane menülerinin günlük değerlendirmesi</Text>
                </View>

                {/* Takvim */}
                <CalendarView
                    month={turkishMonths[currentMonth]}
                    year={currentYear}
                    days={calendarData}
                    onPreviousMonth={handlePreviousMonth}
                    onNextMonth={handleNextMonth}
                    onDayPress={handleDayPress}
                />

                {/* Ayın favorisi */}
                <View style={styles.favoriteSection}>
                    <View style={styles.favoriteHeader}>
                        <Text style={styles.favoriteLabel}>⭐ AYIN FAVORİSİ</Text>
                    </View>
                    <View style={styles.favoriteContent}>
                        <View style={styles.favoriteInfo}>
                            <Text style={styles.favoriteDate}>{monthlyFavorite.date} Menüsü</Text>
                            <Text style={styles.favoriteMeals}>{monthlyFavorite.meals}</Text>
                            <View style={styles.favoriteProgress}>
                                <View style={[styles.favoriteProgressBar, { width: `${monthlyFavorite.approvalRate}%` }]} />
                            </View>
                            <Text style={styles.favoriteRate}>%{monthlyFavorite.approvalRate}</Text>
                        </View>
                        <Image
                            source={{ uri: monthlyFavorite.image }}
                            style={styles.favoriteImage}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                {/* Alt boşluk */}
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
        paddingBottom: spacing.md,
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: colors.textLight,
    },
    headerTitle: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.semibold,
        color: colors.textLight,
    },
    moreButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreIcon: {
        fontSize: 24,
        color: colors.textLight,
    },
    content: {
        flex: 1,
    },
    titleSection: {
        paddingHorizontal: spacing.lg,
        marginBottom: spacing.md,
    },
    title: {
        fontSize: fontSize.title,
        fontWeight: fontWeight.bold,
        color: colors.textLight,
        marginBottom: spacing.xs,
    },
    subtitle: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
    },
    favoriteSection: {
        backgroundColor: colors.backgroundDark,
        marginHorizontal: spacing.lg,
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: `${colors.textSecondary}30`,
    },
    favoriteHeader: {
        padding: spacing.md,
    },
    favoriteLabel: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.semibold,
        color: colors.warning,
        letterSpacing: 1,
    },
    favoriteContent: {
        flexDirection: 'row',
        padding: spacing.md,
        paddingTop: 0,
    },
    favoriteInfo: {
        flex: 1,
    },
    favoriteDate: {
        fontSize: fontSize.lg,
        fontWeight: fontWeight.bold,
        color: colors.textLight,
        marginBottom: spacing.xs,
    },
    favoriteMeals: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
        marginBottom: spacing.md,
    },
    favoriteProgress: {
        height: 6,
        backgroundColor: `${colors.textSecondary}30`,
        borderRadius: borderRadius.full,
        marginBottom: spacing.xs,
        width: '80%',
    },
    favoriteProgressBar: {
        height: '100%',
        backgroundColor: colors.success,
        borderRadius: borderRadius.full,
    },
    favoriteRate: {
        fontSize: fontSize.sm,
        color: colors.success,
        fontWeight: fontWeight.semibold,
    },
    favoriteImage: {
        width: 80,
        height: 80,
        borderRadius: borderRadius.md,
    },
    bottomSpacer: {
        height: spacing.xxxl,
    },
});
