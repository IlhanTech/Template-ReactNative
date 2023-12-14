import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, TextInput, Image, SafeAreaView, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
import BubbleBackground from '../../components/BubbleBackground/BubbleBackground';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import BackButton from '../../components/BackButton/BackButton';
import styles from './StylesSignUpScreen';
import axios from 'axios';
import { API_URL } from '@env';
import qs from 'qs';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    //email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'At least 8 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match').required('Required'),
});

type RootStackParamList = {
    LoginScreen: undefined;
    ServiceScreen: undefined;
    SignUpScreen: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpScreen'>;

export default function SignUpScreen() {
    const handleSignup = async (values: any) => {
        console.log('Starting handleSignup...');
        const { confirmPassword, ...valuesToSend } = values;
        console.log('Values to send:', valuesToSend);
        const endpoint = API_URL + '/api/auth/signup';
        console.log(`Sending request to: ${endpoint}`);
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
                console.log('Registration successful. Navigating to ServiceScreen...');
                navigation.navigate('ServiceScreen');
            } else {
                console.error('Error in data response:', response.data);
                Alert.alert('Registration error');
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.msg || error.message || 'Request error';
            console.error('Exception caught in handleSignup:', errorMessage);
            Alert.alert(errorMessage);
        } */
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            //email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: handleSignup,
    });

    const navigation = useNavigation<SignUpScreenNavigationProp>();

    return (
        <SafeAreaView style={styles.styles.screen}>
            <View style={styles.styles.mainContainer}>
                <BubbleBackground />
                <View>
                    <BlurView tint={"dark" as any} style={styles.styles.blurFilter}>
                        <View style={styles.styles.container}>
                          <BackButton title={"Sign Up"}/>
                            <View style={styles.styles.centeredContainer}>
                                <TextInput
                                    style={styles.styles.input}
                                    placeholder="Username"
                                    placeholderTextColor="white"
                                    onChangeText={formik.handleChange('username')}
                                    onBlur={formik.handleBlur('username')}
                                    value={formik.values.username}
                                />
                                {/* <TextInput
                                    style={styles.styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="white"
                                    onChangeText={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                    value={formik.values.email}
                                /> */}
                                <TextInput
                                    style={styles.styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="white"
                                    secureTextEntry={true}
                                    onChangeText={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                    value={formik.values.password}
                                />
                                <TextInput
                                    style={styles.styles.input}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="white"
                                    secureTextEntry={true}
                                    onChangeText={formik.handleChange('confirmPassword')}
                                    onBlur={formik.handleBlur('confirmPassword')}
                                    value={formik.values.confirmPassword}
                                />
                                <LinearGradient
                                    colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                                    locations={[0, 0.7, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.styles.buttonLogin}
                                >
                                    <Pressable style={styles.styles.pressableArea} onPress={formik.handleSubmit}>
                                        <Text style={styles.styles.textLogin}>Sign up</Text>
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
