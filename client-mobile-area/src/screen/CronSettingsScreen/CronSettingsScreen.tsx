import React, { useState } from 'react';
import {View, Text, Pressable, TextInput, SafeAreaView, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './StylesCronSettingsScreen';
import BackButton from '../../components/BackButton/BackButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

type RootStackParamList = {
    ServiceScreen: undefined;
    LoginScreen: undefined;
    CronSettingsScreen: undefined;
};

type CronSettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CronSettingsScreen'>;

const validationSchema = Yup.object().shape({
  timerValue: Yup.number()
    .required('Required')
    .positive('Must be positive')
    .integer('Must be an integer'),
});

const CronSettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            console.log("You have been disconnected");
            goLoginScreen();
        } catch (error) {
            console.error("Disconnection error :", error);
        }
    }
    const navigation = useNavigation<CronSettingsScreenNavigationProp>();

    const goLoginScreen = (): void => {
        navigation.navigate('LoginScreen');
    }

    const handleValueTimer = async (values: any) => {
        try {
          const newTimerValue = values.timerValue.toString();
          await AsyncStorage.setItem('CRON_TIMER_VALUE', newTimerValue);
          console.log("Timer value has been updated to: ", newTimerValue);
          navigation.goBack();
        } catch (error) {
          console.error("Failed to save the timer value: ", error);
        }
    };

  const formik = useFormik({
    initialValues: {
      timerValue: '',
    },
    validationSchema,
    onSubmit: handleValueTimer,
  });

return (
    <SafeAreaView style={styles.styles.screen}>
        <View style={styles.styles.mainContainer}>
            <BubbleBackground />
            <View>
                <BlurView tint={"dark" as any} style={styles.styles.blurFilter}>
                    <View style={styles.styles.container}>
                        <BackButton title={"Spotify Menu"}/>
                        <TextInput
                            style={styles.styles.input}
                            placeholder="Timer Value"
                            placeholderTextColor="white"
                            keyboardType="numeric"
                            onChangeText={formik.handleChange('timerValue')}
                            onBlur={formik.handleBlur('timerValue')}
                            value={formik.values.timerValue}
                        />
                        <LinearGradient
                            colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                            locations={[0, 0.7, 1]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.styles.buttonLogin}
                        >
                            <Pressable style={styles.styles.pressableArea} onPress={formik.handleSubmit}>
                                <Text style={styles.styles.textLogin}>Save Changes</Text>
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

const test = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 55,
        marginBottom: 30,
    }
});


  export default CronSettingsScreen;