import React, { useState }  from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, TextInput, Image, SafeAreaView, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';
import RememberMe from '../../components/RememberMe/RememberMe';
import { BlurView } from "expo-blur";
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './StylesLoginScreen';
import axios from 'axios';
import { API_URL } from '@env';
import qs from 'qs';

const iconGoogle = require('../../assets/LoginScreen/icongoogle.png');
const iconFacebook = require('../../assets/LoginScreen/iconfacebook.png');
const iconGithub = require('../../assets/LoginScreen/icongithub.png');

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().min(8, 'At least 8 characters').required('Required'),
});

type RootStackParamList = {
    LoginScreen: undefined;
    ServiceScreen: undefined;
    SignUpScreen: undefined;
    ForgotPasswordScreen: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

export default function LoginScreen() {

    const handleLogin = async (values: any) => {
        const valuesToSend = { ...values };
        const endpoint = API_URL + '/api/auth/token';
        navigation.navigate('ServiceScreen');
        /* try {
            const response = await axios.post(endpoint, qs.stringify(valuesToSend), {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            console.log('Server Response:', response.data);
            if (response.data.access_token) {
                formik.resetForm();
                console.log('Login successful. Navigating to ServiceScreen...');
                navigation.navigate('ServiceScreen');
            } else {
                console.error('Error in data response:', response.data);
                Alert.alert('Login error');
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.msg || error.message || 'Request error';
            console.error('Exception caught in handleLogin:', errorMessage);
            Alert.alert(errorMessage);
        } */
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleLogin,
    });

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const goSignUp = (): void => {
        navigation.navigate('SignUpScreen');
    };

    const goForgotPassword = ():void => {
        navigation.navigate('ForgotPasswordScreen');
    };

    return (
        <SafeAreaView style={styles.styles.screen}>
            <View style={styles.styles.mainContainer}>
                <BubbleBackground />
                <View>
                    <BlurView tint={"dark" as any} style={styles.styles.blurFilter}>
                        <View style={styles.styles.container}>
                            <Text style={styles.styles.headerLoginText}>Login</Text>
                            <View style={styles.styles.centeredContainer}>
                                <TextInput
                                    style={styles.styles.input}
                                    placeholder="Username"
                                    placeholderTextColor="white"
                                    onChangeText={formik.handleChange('username')}
                                    value={formik.values.username}
                                />
                                <TextInput
                                    style={styles.styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="white"
                                    secureTextEntry={true}
                                    onChangeText={formik.handleChange('password')}
                                    value={formik.values.password}
                                />
                                <RememberMe />
                                <LinearGradient
                                    colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                    locations={[0, 0.7, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.styles.buttonLogin}
                                >
                                    <Pressable style={styles.styles.pressableArea} onPress={formik.handleSubmit}>
                                        <Text style={styles.styles.textLogin}>Login</Text>
                                    </Pressable>
                                </LinearGradient>
                                <View style={{ alignItems: 'center', width: '100%' }}>
                                    <Pressable onPress={goForgotPassword}>
                                        <Text style={styles.styles.forgotPassword}>Forgot password ?</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.styles.containerOr}>
                                <View style={styles.styles.line} />
                                <Text style={styles.styles.textOr}>Or</Text>
                                <View style={styles.styles.line} />
                            </View>
                            <View style={styles.styles.containerImage}>
                                <Pressable onPress={() => console.log('Image Pressed!')} style={styles.styles.imageButtonLeft}>
                                    <Image source={iconGoogle} />
                                </Pressable>
                                <Pressable onPress={() => console.log('Image Pressed!')} style={styles.styles.imageButtonCenter}>
                                    <Image source={iconFacebook} />
                                </Pressable>
                                <Pressable onPress={() => console.log('Image Pressed!')} style={styles.styles.imageButtonRight}>
                                    <Image source={iconGithub} />
                                </Pressable>
                            </View>
                        </View>
                    </BlurView>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Pressable onPress={goSignUp}>
                            <Text style={styles.styles.forgotPassword}>Don’t have an account ? Signup</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
