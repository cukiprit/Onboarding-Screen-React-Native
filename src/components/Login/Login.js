import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoginImage from '../../../assets/image/Login.png';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View style={styles.containerImg}>
        <Image source={LoginImage} style={styles.img} />
      </View>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput
          style={[styles.form, { marginVertical: 20 }]}
          placeholder="Email"
          placeholderTextColor="#352D4D"
        />
        <TextInput
          style={[styles.form, { marginBottom: 40 }]}
          placeholder="Password"
          placeholderTextColor="#352D4D"
        />
        <TouchableOpacity style={{ alignItems: 'center', marginBottom: 20 }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#352D4D',
    textAlign: 'center',
  },
  containerImg: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  img: {
    width: 273,
    height: 257,
  },
  form: {
    padding: 10,
    marginHorizontal: 20,
    borderWidth: 1,
  },
  btn: {
    height: 45,
    width: 315,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Login;
