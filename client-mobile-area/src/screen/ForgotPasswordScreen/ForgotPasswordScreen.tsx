import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, TextInput, Image, SafeAreaView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BackButton from '../../components/BackButton/BackButton';
import styles from './StylesForgotPasswordScreen';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('Requis'),
    password: Yup.string().min(8, 'Au moins 8 caractères').required('Requis'),
});

type RootStackParamList = {
    LoginScreen: undefined;
    ServiceScreen: undefined;
    SignUpScreen: undefined;
    ForgotPasswordScreen: undefined;
    ResetPasswordScreen: undefined;
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPasswordScreen'>;

export default function ForgotPasswordScreen() {
    const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

    const goResetPassword = (): void => {
        navigation.navigate('ResetPasswordScreen');
    };

    return (
        <SafeAreaView style={styles.styles.screen}>
            <View style={styles.styles.mainContainer}>
                <BubbleBackground />
                <View>
                    <BlurView tint={"dark" as any} style={styles.styles.blurFilter}>
                        <View style={styles.styles.container}>
                          <BackButton title={"Forgot Password"}/>
                            <View style={styles.styles.centeredContainer}>
                                <TextInput
                                    style={styles.styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="white"
                                />
                                <LinearGradient
                                    colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                    locations={[0, 0.7, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.styles.buttonLogin}
                                >
                                    <Pressable style={styles.styles.pressableArea} onPress={goResetPassword}>
                                        <Text style={styles.styles.textLogin}>Forgot Password</Text>
                                    </Pressable>
                                </LinearGradient>
                            </View>
                        </View>
                    </BlurView>
                </View>
            </View>
        </SafeAreaView>
    );
}
