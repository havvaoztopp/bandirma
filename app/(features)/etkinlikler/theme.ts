/**
 * Etkinlikler Modülü Tema Dosyası
 * Tasarımlardan çıkarılan renk paleti ve stil sabitleri
 */

export const colors = {
    // Background Colors
    backgroundLight: '#FFFFFF',      // Light mode arka plan
    backgroundDark: '#0F172A',       // Dark mode arka plan

    // Card Colors
    cardLight: '#F8F7F7',            // Light mode kart arka planı
    cardDark: '#1E293B',             // Dark mode kart arka planı

    // Primary Accent
    accent: '#26ABE2',               // Tarih, saat, konum ikonları, seçili gün

    // Text Colors
    textPrimary: '#0A0A0A',          // Ana metin, gün sayıları
    textSecondary: '#B0B0B0',        // Haftanın günleri, alt metinler
    textWhite: '#FFFFFF',            // Beyaz metin

    // Notification Colors
    notificationBlue: '#26ABE2',     // Saat değişikliği
    notificationOrange: '#F59E0B',   // Tarih güncelleme
    notificationRed: '#EF4444',      // İptal
    notificationGreen: '#22C55E',    // Yeni etkinlik
    notificationPurple: '#8B5CF6',   // Mekan değişikliği

    // Event Dot Colors (Takvim için)
    dotTeal: '#14B8A6',
    dotOrange: '#F97316',
    dotPink: '#EC4899',
    dotPurple: '#8B5CF6',
    dotGreen: '#22C55E',

    // Other
    border: '#E5E7EB',
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    unreadDot: '#26ABE2',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
};

export const borderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
};

export const fontSize = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    title: 18,
};

export const fontWeight = {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
};

export const shadows = {
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    button: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
};

// Bildirim tipleri için renkler
export const notificationTypeColors = {
    timeChange: colors.notificationBlue,
    dateChange: colors.notificationOrange,
    cancelled: colors.notificationRed,
    newEvent: colors.notificationGreen,
    locationChange: colors.notificationPurple,
    reminder: colors.accent,
};

// Etkinlik dot renkleri (takvim için)
export const eventDotColors = [
    colors.dotTeal,
    colors.dotOrange,
    colors.dotPink,
    colors.dotPurple,
    colors.dotGreen,
];
