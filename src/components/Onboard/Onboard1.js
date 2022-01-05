import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Onboard1Image from '../../../assets/image/Board1.png';

const Onboard1 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.containerImg}>
        <Image source={Onboard1Image} style={styles.img} />
      </View>
      <Text style={styles.title}>Belajar Dimana Saja</Text>
      <Text style={styles.description}>
        Selama kamu terkoneksi dengan Internet kamu dapat mengakses materi ini
        dimana saja
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  img: {
    width: 304,
    height: 218,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: '#352D4D',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 25,
    color: '#352D4D',
  },
});

export default Onboard1;
