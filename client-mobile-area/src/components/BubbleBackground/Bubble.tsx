import React, { useEffect, useRef } from 'react';
import { StyleSheet, Dimensions, AppState, AppStateStatus } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface BubbleProps {
  color: string;
  size: number;
  spawnX: number;
  spawnY: number;
  speed: number;
}

const Bubble: React.FC<BubbleProps> = ({ color, size, spawnX, spawnY, speed }) => {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const moveInterval = useRef<number>();

  const x = useSharedValue(spawnX);
  const y = useSharedValue(spawnY);
  const xDirection = useSharedValue(1);
  const yDirection = useSharedValue(1);
  const duration = 16;

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      appState.current = nextAppState;
    };
    const subscription = AppState.addEventListener('change', handleAppStateChange);

    const moveBubble = () => {
      if (appState.current === 'active') {
        if (x.value + size + speed * xDirection.value > width || x.value + speed * xDirection.value < 0) {
          xDirection.value *= -1;
        }
        if (y.value + size + speed * yDirection.value > height || y.value + speed * yDirection.value < 0) {
          yDirection.value *= -1;
        }
        x.value += speed * xDirection.value;
        y.value += speed * yDirection.value;
      }
    };

    moveInterval.current = setInterval(moveBubble, duration);

    return () => {
      clearInterval(moveInterval.current!);
      subscription.remove();
    };
  }, []);

  const bubbleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        bubbleStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    opacity: 0.7,
  },
});

export default Bubble;
