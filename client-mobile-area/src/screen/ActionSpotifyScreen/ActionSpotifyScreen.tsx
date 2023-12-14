import React, { useState }from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, TextInput, Image, SafeAreaView, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BackButton from '../../components/BackButton/BackButton';
import styles from './StylesActionSpotifyScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '@env';

type RootStackParamList = {
    ServiceScreen: undefined;
    ActionSpotifyScreen: undefined;
    LoginScreen: undefined;
    SendMailScreen: undefined;
};

type ActionSpotifyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ActionSpotifyScreen'>;

export default function ActionSpotifyScreen() {

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            console.log("You have been disconnected");
            goLoginScreen();
        } catch (error) {
            console.error("Disconnection error :", error);
        }
    }

    async function getUserSpotify() {
        const endpoint = API_URL + '/api/spotify/profile';
        try {
          const response = await axios.get(endpoint);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    }

    const navigation = useNavigation<ActionSpotifyScreenNavigationProp>();

    const goLoginScreen = (): void => {
        navigation.navigate('LoginScreen');
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.styles.screen}>
            <View style={styles.styles.mainContainer}>
                <BubbleBackground />
                <View>
                    <BlurView tint={"dark" as any} style={styles.styles.blurFilter}>
                        <View style={styles.styles.container}>
                            <BackButton title={"Spotify Menu"}/>
                            <LinearGradient
                                colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                locations={[0, 0.7, 1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.styles.buttonOnOff}
                            >
                                <Pressable style={styles.styles.pressableArea} onPress={toggleSwitch}>
                                    <Text style={styles.styles.textLogin}>{isEnabled ? 'SERVICE ON' : 'SERVICE OFF'}</Text>
                                </Pressable>
                            </LinearGradient>
                            <LinearGradient
                                colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                locations={[0, 0.7, 1]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.styles.buttonOnOff}
                            >
                                <Pressable style={styles.styles.pressableArea} onPress={getUserSpotify}>
                                    <Text style={styles.styles.textLogin}>Profile Test</Text>
                                </Pressable>
                            </LinearGradient>
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
