import React from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Board1 from '../../../assets/image/Board1.png';
import Board2 from '../../../assets/image/Onboard2.png';
import Board3 from '../../../assets/image/Onboard3.png';

const Next = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View>
        <Text style={styles.nextText}>Selanjutnya</Text>
      </View>
    </TouchableOpacity>
  );
};

const Skip = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View>
        <Text style={styles.skipText}>Lewati</Text>
      </View>
    </TouchableOpacity>
  );
};

const Done = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View>
        <Text style={styles.doneText}>Mulai</Text>
      </View>
    </TouchableOpacity>
  );
};

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? '#352D4D' : '#FFF';

  return (
    <View
      style={{
        width: 7,
        height: 7,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 5,
      }}
    />
  );
};

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#FFE559',
          image: <Image source={Board1} style={{ width: 304, height: 218 }} />,
          title: 'Belajar Dimana Saja',
          subtitle:
            'Selama kamu terkoneksi dengan Internet kamu dapat mengakses materi ini dimana saja',
          titleStyles: { color: '#352D4D' },
          subTitleStyles: { color: '#352D4D' },
        },
        {
          backgroundColor: '#FFE559',
          image: <Image source={Board2} style={{ width: 260, height: 232 }} />,
          title: 'Materi Dibarengi Dengan Project',
          subtitle:
            'Kami tidak hanya menyediakan materi tetapi kami juga menyediakan beberapa project akhir yang nantinya bisa dijadikan sebagai portofolio',
          titleStyles: { color: '#352D4D' },
          subTitleStyles: { color: '#352D4D' },
        },
        {
          backgroundColor: '#FFE559',
          image: <Image source={Board3} style={{ height: 232, width: 232 }} />,
          title: 'Dukungan Komunitas',
          subtitle:
            'Dengan mengikuti kelas kami kamu akan diberikan akses ke komunitas untuk saling berbagi pertanyaan terkait pelajaran yang kamu ambil',
          titleStyles: { color: '#352D4D' },
          subTitleStyles: { color: '#352D4D' },
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  nextText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#352D4D',
  },
  skipText: {
    color: '#352D4D',
    marginLeft: 20,
  },
  doneText: {
    color: '#352D4D',
    marginRight: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
