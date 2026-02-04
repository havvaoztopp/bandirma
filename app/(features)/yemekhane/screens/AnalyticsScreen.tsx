/**
 * AnalyticsScreen
 * Yemek Analizleri ekranı - Tasarım 2
 * Memnuniyet göstergesi ve popüler yemekler
 */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../theme';
import { dailySatisfactionData, popularMealsData } from '../mockData';
import SatisfactionMeter from '../components/SatisfactionMeter';
import PopularMealCard from '../components/PopularMealCard';

interface AnalyticsScreenProps {
    // Props eklenebilir
}

export default function AnalyticsScreen({ }: AnalyticsScreenProps) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Yemek Analizleri</Text>
                <TouchableOpacity style={styles.calendarButton}>
                    <Text style={styles.calendarIcon}>📅</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Memnuniyet göstergesi */}
                <SatisfactionMeter
                    percentage={dailySatisfactionData.percentage}
                    totalVotes={dailySatisfactionData.totalVotes}
                />

                {/* Popüler yemekler başlığı */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Haftanın En Beğenilenleri</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionLink}>Bu Hafta</Text>
                    </TouchableOpacity>
                </View>

                {/* Popüler yemek kartları */}
                {popularMealsData.map((meal) => (
                    <PopularMealCard key={meal.id} meal={meal} />
                ))}

                {/* Alt boşluk */}
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundLight,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
        paddingBottom: spacing.md,
        backgroundColor: colors.cardWhite,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    headerTitle: {
        fontSize: fontSize.xxl,
        fontWeight: fontWeight.bold,
        color: colors.textDark,
    },
    calendarButton: {
        width: 40,
        height: 40,
        borderRadius: borderRadius.md,
        backgroundColor: colors.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarIcon: {
        fontSize: 20,
    },
    content: {
        flex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
        paddingBottom: spacing.md,
    },
    sectionTitle: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.bold,
        color: colors.textDark,
    },
    sectionLink: {
        fontSize: fontSize.md,
        color: colors.primaryAccent,
        fontWeight: fontWeight.medium,
    },
    bottomSpacer: {
        height: spacing.xxxl,
    },
});
