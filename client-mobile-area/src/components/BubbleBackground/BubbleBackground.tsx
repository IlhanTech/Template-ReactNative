import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Bubble from './Bubble';

const { width, height } = Dimensions.get('window');

const BubbleBackground: React.FC = () => {
    const speed = 0.2;
    const color = "rgba(83, 0, 97, 1)";

    const LittleBubble = (
        <Bubble
            key="bottom"
            color={color}
            spawnX={0}
            spawnY={height - 160}
            size={160}
            speed={speed}
        />
    );

    const MediumBubble = (
        <Bubble
            key="middle"
            color={color}
            spawnX={(width - 200) / 2}
            spawnY={(height - 200) / 2}
            size={200}
            speed={speed}
        />
    );

    const BigBubble = (
        <Bubble
            key="top"
            color={color}
            spawnX={width - 295}
            spawnY={0}
            size={295}
            speed={speed}
        />
    );

    return (
        <View style={styles.container}>
            {LittleBubble}
            {MediumBubble}
            {BigBubble}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default BubbleBackground;
