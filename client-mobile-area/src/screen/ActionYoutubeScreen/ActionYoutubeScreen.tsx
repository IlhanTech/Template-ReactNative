import React, { useState }from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, TextInput, Image, SafeAreaView, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BackButton from '../../components/BackButton/BackButton';
import styles from './StylesActionYoutubeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
    ServiceScreen: undefined;
    ActionYoutubeScreen: undefined;
    LoginScreen: undefined;
    SendMailScreen: undefined;
};

type ActionYoutubeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ActionYoutubeScreen'>;

export default function ActionYoutubeScreen() {

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            console.log("You have been disconnected");
            goLoginScreen();
        } catch (error) {
            console.error("Disconnection error :", error);
        }
    }

    const navigation = useNavigation<ActionYoutubeScreenNavigationProp>();

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
                            <BackButton title={"Youtube Menu"}/>
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
