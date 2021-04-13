import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const TextField = ({label, textBantuan, isi, setIsi}) => {
  return (
    <View style={{marginVertical: 7}}>
        <Text style={{marginBottom: 5, fontWeight: 'bold'}}>{label}</Text>
        <TextInput style={{borderWidth: 1, borderRadius: 9, paddingVertical: 3, paddingLeft: 10, borderColor: '#C4C4C4'}} placeholder={textBantuan} value={isi} onChangeText={setIsi}/>
    </View>
  )
}

const Button = ({label, fungsi}) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#C237CE', paddingVertical: 10, borderRadius: 25, alignItems: 'center', marginTop: 25}} onPress={fungsi}>
      <Text style={{color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  )
}

const RegistrationPage = ({changePageHandler}) => {
  const  [name, setName] = useState ('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const phoneNumberHandler = (nilai) => {
    nilai = nilai.replace(/\D/g, '');
    setPhoneNumber(nilai);
  }

  const registerHandler = () => {
    console.log(`Name = ${name}`)
    console.log(`Username = ${username}`)
    console.log(`Email = ${email}`)
    console.log(`Address = ${address}`)
    console.log(`Phone Number = ${phoneNumber}`)
    changePageHandler();
  }

  return (
    <View style={{padding: 15}}>
      <Text style={{fontSize: 36, fontWeight: 'bold', marginBottom: 20}}>Registration</Text>
      <TextField label='Name' textBantuan='Masukan Nama Lengkap Anda' isi={name} setIsi={setName} />
      <TextField label='Username' textBantuan='Masukan Username Anda' isi={username} setIsi={setUsername} />
      <TextField label='Email' textBantuan='Masukan Email Anda' isi={email} setIsi={setEmail} />
      <TextField label='Address' textBantuan='Masukan Alamat Anda' isi={address} setIsi={setAddress} />
      <TextField label='Phone Number' textBantuan='Masukan Nomor Telepon Anda' isi={phoneNumber} setIsi={phoneNumberHandler} />
      <Button label='Register' fungsi={registerHandler}/>
    </View>
  )
}

export default RegistrationPage;