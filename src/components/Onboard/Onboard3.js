import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Onboard3Image from '../../../assets/image/Onboard3.png';

const Onboard3 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={Onboard3Image} />
      </View>
      <Text style={styles.title}>Dukungan Komunitas</Text>
      <Text style={styles.description}>
        Dengan mengikuti kelas kami kamu akan diberikan akses ke komunitas untuk
        saling berbagi pertanyaan terkait pelajaran yang kamu ambil
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
    width: 255,
    height: 255,
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

export default Onboard3;
