import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>REGISTER</Text>
      <View>
        <TextInput
          placeholder="Masukkan Username"
          placeholderTextColor="#352D4D"
          style={styles.form}
        />
        <TextInput
          placeholder="Masukkan Email"
          placeholderTextColor="#352D4D"
          style={styles.form}
        />
        <TextInput
          placeholder="Masukkan Password"
          placeholderTextColor="#352D4D"
          style={styles.form}
        />
        <TextInput
          placeholder="Konfirmasi Password"
          placeholderTextColor="#352D4D"
          style={[styles.form, { marginBottom: 20 }]}
        />
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
    textAlign: 'center',
    marginTop: 30,
    color: '#352D4D',
  },
  form: {
    padding: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    marginTop: 20,
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
    fontWeight: 'bold',
  },
});

export default Register;
