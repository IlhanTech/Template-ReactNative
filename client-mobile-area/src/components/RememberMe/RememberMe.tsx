import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

interface RememberMeProps {
  onValueChange?: (value: boolean) => void;
}

const RememberMe: React.FC<RememberMeProps> = ({ onValueChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(prev => !prev);
    if (onValueChange) {
      onValueChange(!isChecked);
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity
            activeOpacity={1}
            onPress={toggleCheck}
            style={isChecked ? styles.checkBoxGradient : styles.checkBox}
        >
            {isChecked && (
                <LinearGradient
                    colors={['rgba(98, 142, 255, 1)', 'rgba(135, 64, 205, 1)', 'rgba(88, 4, 117, 1)']}
                    locations={[0, 0.7, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradient}
                >
                  <Icon name="check" color="white" size={18} />
                </LinearGradient>
            )}
        </TouchableOpacity>
      <Text style={styles.text} onPress={toggleCheck}>Remember me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
    marginTop: 10,
  },
  checkBoxGradient: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 4,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 4,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,

  },
  checkedBox: {
    width: 19,
    height: 20,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});

export default RememberMe;
