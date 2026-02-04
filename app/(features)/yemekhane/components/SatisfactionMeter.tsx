/**
 * SatisfactionMeter Component
 * Yarım daire memnuniyet göstergesi - Yemek Analizleri ekranı için
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../theme';

interface SatisfactionMeterProps {
    percentage: number;
    totalVotes: number;
}

export default function SatisfactionMeter({ percentage, totalVotes }: SatisfactionMeterProps) {
    // Renk hesaplama (yüzdeye göre)
    const getColor = () => {
        if (percentage >= 70) return colors.primaryAccent;
        if (percentage >= 50) return colors.warning;
        return colors.error;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>GÜNLÜK MEMNUNİYET</Text>

            {/* Yarım daire gösterge */}
            <View style={styles.meterContainer}>
                {/* Arka plan yarım daire */}
                <View style={styles.meterBackground}>
                    <View style={[styles.meterFill, { borderColor: getColor() }]} />
                </View>

                {/* Yüzde gösterimi */}
                <View style={styles.percentageContainer}>
                    <Text style={[styles.percentage, { color: getColor() }]}>%{percentage}</Text>
                    <Text style={styles.label}>Beğeni Oranı</Text>
                </View>
            </View>

            <Text style={styles.subtitle}>Gerçek zamanlı verilere göre</Text>

            {/* Toplam oy */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Bugün Toplam </Text>
                <Text style={styles.totalValue}>{totalVotes} Oy</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardWhite,
        borderRadius: borderRadius.xl,
        margin: spacing.lg,
        padding: spacing.xl,
        alignItems: 'center',
        ...shadows.card,
    },
    header: {
        fontSize: fontSize.xs,
        fontWeight: fontWeight.semibold,
        color: colors.textSecondary,
        letterSpacing: 1,
        marginBottom: spacing.lg,
    },
    meterContainer: {
        width: 180,
        height: 100,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: spacing.md,
    },
    meterBackground: {
        position: 'absolute',
        top: 0,
        width: 180,
        height: 90,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        backgroundColor: colors.border,
        overflow: 'hidden',
    },
    meterFill: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        borderWidth: 12,
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
    },
    percentageContainer: {
        alignItems: 'center',
        marginTop: spacing.xl,
    },
    percentage: {
        fontSize: 48,
        fontWeight: fontWeight.bold,
    },
    label: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.semibold,
        color: colors.error,
        marginTop: spacing.xs,
    },
    subtitle: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
        marginBottom: spacing.lg,
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: spacing.lg,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        width: '100%',
        justifyContent: 'center',
    },
    totalLabel: {
        fontSize: fontSize.md,
        color: colors.textSecondary,
    },
    totalValue: {
        fontSize: fontSize.md,
        fontWeight: fontWeight.bold,
        color: colors.textDark,
    },
});
