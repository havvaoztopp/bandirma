/**
 * Etkinlikler Modülü Type Tanımlamaları
 */

// Topluluk (Community) tipi
export interface Community {
    id: string;
    name: string;
    logo: string; // URL veya local asset
    isVerified: boolean;
}

// Etkinlik tipi
export interface Event {
    id: string;
    communityId: string;
    title: string;
    description: string;
    image: string; // Etkinlik afişi URL'i
    date: string; // YYYY-MM-DD formatı
    time: string; // HH:MM formatı
    endTime?: string; // Bitiş saati (opsiyonel)
    location: string;
    createdAt: Date;
    color: string; // Takvimde gösterilecek dot rengi
}

// Bildirim tipleri
export type NotificationType =
    | 'timeChange'      // Saat değişikliği
    | 'dateChange'      // Tarih güncelleme
    | 'cancelled'       // İptal
    | 'newEvent'        // Yeni etkinlik
    | 'locationChange'  // Mekan değişikliği
    | 'reminder';       // Hatırlatma

// Bildirim tipi
export interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    description: string;
    eventId?: string; // İlgili etkinlik (opsiyonel)
    createdAt: Date;
    isRead: boolean;
}

// Ekran durumu
export type ScreenType = 'feed' | 'calendar' | 'dailyProgram' | 'notifications';

// Seçilen gün bilgisi
export interface SelectedDay {
    date: string; // YYYY-MM-DD
    dayOfWeek: string; // Pzt, Sal, vb.
    dayNumber: number;
}
