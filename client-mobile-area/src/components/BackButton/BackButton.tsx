import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <TouchableOpacity onPress={handleBackPress} style={styles.container}>
        <AntDesign name="arrowleft" size={40} color={'white'}/>
      </TouchableOpacity>
      <Text style={styles.headerLoginText}> {title} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 999,
  },
  headerLoginText: {
    fontSize: 33,
    fontWeight: '500',
    color: 'white',
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 60,
  },
});

export default BackButton;
