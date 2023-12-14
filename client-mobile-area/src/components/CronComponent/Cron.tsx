import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const CronComponent = ({ navFunc }) => {
  const [timerCount, setTimerCount] = useState(0);
  const isFocused = useIsFocused();

  const loadTimerValue = async () => {
    try {
      const value = await AsyncStorage.getItem('CRON_TIMER_VALUE');
      const initialTimerValue = value !== null ? parseInt(value, 10) : 5;
      setTimerCount(initialTimerValue);
    } catch (error) {
      console.error("Failed to load the timer value: ", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadTimerValue();
    }
  }, [isFocused]);

  useEffect(() => {
    let intervalId;
    if (timerCount > 0) {
      intervalId = setInterval(() => {
        setTimerCount((currentCount) => currentCount - 1);
      }, 1000);
    } else {
      console.log('Tâche cron exécutée');
      loadTimerValue();
    }
    return () => clearInterval(intervalId);
  }, [timerCount]);

  return (
    <TouchableOpacity onPress={navFunc}>
      <LinearGradient
        colors={['transparent', 'transparent']}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.borderCron}
      >
        <View style={styles.borderInner}>
          <Text style={styles.timerText}>Time remaining : {timerCount}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borderCron: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  borderInner: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
});

export default CronComponent;
