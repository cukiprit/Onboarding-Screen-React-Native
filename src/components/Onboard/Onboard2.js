import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Onboard2Image from '../../../assets/image/Onboard2.png';

const Onboard2 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={Onboard2Image} />
      </View>
      <Text style={styles.title}>Materi Dibarengi Dengan Project</Text>
      <Text style={styles.description}>
        Kami tidak hanya menyediakan materi tetapi kami juga menyediakan
        beberapa project akhir yang nantinya bisa dijadikan sebagai portofolio
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
    width: 260,
    height: 232,
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

export default Onboard2;
