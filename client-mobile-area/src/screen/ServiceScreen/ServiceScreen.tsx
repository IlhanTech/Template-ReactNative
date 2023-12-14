import React, { useCallback } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './StylesServiceScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CronComponent from '../../components/CronComponent/Cron';
import axios from 'axios';
import { API_URL } from '@env';

type RootStackParamList = {
    ServiceScreen: undefined;
    ActionSpotifyScreen: undefined;
    ActionDeezerScreen: undefined;
    ActionYoutubeScreen: undefined;
    LoginScreen: undefined;
    CronSettingsScreen: undefined;
};

type ServiceScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ServiceScreen'>;

export default function ServiceScreen() {
    const navigation = useNavigation<ServiceScreenNavigationProp>();

    const loadTimerValue = useCallback(async () => {
        try {
            const value = await AsyncStorage.getItem('CRON_TIMER_VALUE');
            console.log('Timer value reloaded:', value);
        } catch (error) {
            console.error("Failed to load the timer value: ", error);
        }
    }, []);

    async function loginUserSpotify() {
        const endpoint = API_URL + '/api/spotify/login';
        try {
          const response = await axios.get(endpoint);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    }

    async function loginUserDeezer() {
        const endpoint = API_URL + '/api/deezer/login';
        try {
          const response = await axios.get(endpoint);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            loadTimerValue();
        }, [loadTimerValue])
    );

    const goActionSpotifyScreen = (): void => {
        loginUserSpotify();
        navigation.navigate('ActionSpotifyScreen');
    };

    const goActionDeezerScreen = (): void => {
        loginUserDeezer();
        navigation.navigate('ActionDeezerScreen');
    };

    const goActionYoutubeScreen = (): void => {
        navigation.navigate('ActionYoutubeScreen');
    };

    const goLoginScreen = (): void => {
        navigation.navigate('LoginScreen');
    };

    const goCronSettingsScreen = (): void => {
        navigation.navigate('CronSettingsScreen');
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            console.log("You have been disconnected");
            goLoginScreen();
        } catch (error) {
            console.error("Disconnection error :", error);
        }
    };

    return (
        <SafeAreaView style={styles.styles.screen}>
            <View style={styles.styles.mainContainer}>
                <BubbleBackground />
                <View>
                    <BlurView tint={"dark"} style={styles.styles.blurFilter}>
                        <View style={styles.styles.container}>
                            <Text style={styles.styles.headerLoginText}>Services</Text>
                            <LinearGradient
                                colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                locations={[0, 0.7, 1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.styles.buttonLogin}
                            >
                                <Pressable style={styles.styles.pressableArea} onPress={goActionSpotifyScreen}>
                                    <Text style={styles.styles.textLogin}>Spotify</Text>
                                </Pressable>
                            </LinearGradient>
                            <LinearGradient
                                colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                locations={[0, 0.7, 1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.styles.buttonLogin}
                            >
                                <Pressable style={styles.styles.pressableArea} onPress={goActionDeezerScreen}>
                                    <Text style={styles.styles.textLogin}>Deezer</Text>
                                </Pressable>
                            </LinearGradient>
                            <LinearGradient
                                colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                locations={[0, 0.7, 1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.styles.buttonLogin}
                            >
                                <Pressable style={styles.styles.pressableArea} onPress={goActionYoutubeScreen}>
                                    <Text style={styles.styles.textLogin}>Youtube</Text>
                                </Pressable>
                            </LinearGradient>
                            <CronComponent navFunc={goCronSettingsScreen} />
                            <LinearGradient
                                colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                locations={[0, 0.7, 1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.styles.buttonDisco}
                            >
                                <Pressable style={styles.styles.pressableArea} onPress={handleLogout}>
                                    <Text style={styles.styles.textLogin}>Disconnect</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>
                    </BlurView>
                </View>
            </View>
        </SafeAreaView>
    );
}
