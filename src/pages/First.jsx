import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import login from '../assets/mobile/login.png';
import { styles } from '../styles/style';
import Button from '../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import Select from '../components/ui/Select';
function First() {

  const navigation = useNavigation();

  return (
    <View style={{flex:1}} className='relative'>
      <Image source={login}/>
      <Text style={styles.greenText} className='text-3xl p-6 text-center'>
        Start your journey now with 
        <Text className='font-bold text-4xl'> HEALTHKARD</Text>
      </Text>
      <View className='my-10'>
        <Button label='Login' color='green' style='w-10/12 p-4 mx-auto' onPress={()=>navigation.navigate('UserLogin')}/>
        <Button label='Register' color='blue' style='w-10/12 p-4 mx-auto' onPress={()=>navigation.navigate('UserRegister')}/>
      </View>
        <TouchableOpacity onPress={()=>navigation.navigate('agent')} style={styles.green} className='absolute bottom-4 right-4 p-2 w-20 h-20 justify-center items-center rounded-full text-white font-semibold'>
            <Text className='text-xs'>Login Agent</Text>
        </TouchableOpacity>
    </View>
  )
}

export default First
