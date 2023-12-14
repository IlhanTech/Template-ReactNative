import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../screen/LoginScreen/LoginScreen';
import ServiceScreen from '../../screen/ServiceScreen/ServiceScreen';
import ActionSpotifyScreen from '../../screen/ActionSpotifyScreen/ActionSpotifyScreen';
import SignUpScreen from '../../screen/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../../screen/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../../screen/ResetPasswordScreen/ResetPasswordScreen';
import ActionDeezerScreen from '../../screen/ActionDeezerScreen/ActionDeezerScreen';
import ActionYoutubeScreen from '../../screen/ActionYoutubeScreen/ActionYoutubeScreen';
import CronSettingsScreen from '../../screen/CronSettingsScreen/CronSettingsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LoginScreen'>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{title: 'LoginScreen'}}
            />
            <Stack.Screen
              name="ServiceScreen"
              component={ServiceScreen}
              options={{title: 'ServiceScreen'}}
            />
            <Stack.Screen
              name="ActionSpotifyScreen"
              component={ActionSpotifyScreen}
              options={{title: 'ActionSpotifyScreen'}}
            />
            <Stack.Screen
              name="ActionYoutubeScreen"
              component={ActionYoutubeScreen}
              options={{title: 'ActionYoutubeScreen'}}
            />
            <Stack.Screen
              name="ActionDeezerScreen"
              component={ActionDeezerScreen}
              options={{title: 'ActionDeezerScreen'}}
            />
            <Stack.Screen
              name="CronSettingsScreen"
              component={CronSettingsScreen}
              options={{title: 'CronSettingsScreen'}}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{title: 'SignUpScreen'}}
            />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
              options={{title: 'ForgotPasswordScreen'}}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
              options={{title: 'ResetPasswordScreen'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;