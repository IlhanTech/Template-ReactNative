import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface GradientButtonProps {
    title: string;
    onPress: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, onPress }) => {
    return (
        <LinearGradient
            colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
            locations={[0, 0.7, 1]}
            style={styles.buttonLogin}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <Text style={styles.textLogin} onPress={onPress}>
            {title}
            </Text>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    buttonLogin: {
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: 55,
    },
    textLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default GradientButton;
