/**
 * Yemekhane Modülü Ana Ekranı
 * Tab navigasyonu ile tüm alt ekranları birleştirir
 * 
 * Bandırma Onyedi Eylül Üniversitesi - Yemekhane Modülü
 */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './theme';
import BottomTabBar, { TabName } from './components/BottomTabBar';
import MenuScreen from './screens/MenuScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import FeedbackScreen from './screens/FeedbackScreen';

export default function YemekhaneScreen() {
    // Aktif tab state'i
    const [activeTab, setActiveTab] = useState<TabName>('menu');

    // Aktif ekranı render et
    const renderScreen = () => {
        switch (activeTab) {
            case 'menu':
                return <MenuScreen />;
            case 'analytics':
                return <AnalyticsScreen />;
            case 'statistics':
                return <StatisticsScreen />;
            case 'feedback':
                return <FeedbackScreen />;
            default:
                return <MenuScreen />;
        }
    };

    // İstatistikler ekranı için arka plan rengi
    const containerStyle = [
        styles.container,
        activeTab === 'statistics' && { backgroundColor: colors.backgroundDark }
    ];

    return (
        <SafeAreaView style={containerStyle} edges={['top']}>
            {/* Ana içerik */}
            <View style={styles.content}>
                {renderScreen()}
            </View>

            {/* Alt navigasyon çubuğu */}
            <BottomTabBar
                activeTab={activeTab}
                onTabPress={setActiveTab}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundLight,
    },
    content: {
        flex: 1,
    },
});
