import { View, Text,ScrollView ,Image} from 'react-native'
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import React,{useState} from 'react'
import { Link } from 'expo-router'



const SignIn = () => {

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () =>{}

  const [form, setform] = useState({
    email:'',
    password:''
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 mv-6">
            <Image  source={images.logo}  resizeMode='contain' className='w-[115px]  h-[35px]'/>
            <Text className="text-2xl text-white font-psemibold text-semibold mt-5">Log  in to Aora</Text>

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e)=>setform({
                ...form,
                email: e
              })}
              otherStyles='mt-7'
              keyboardType='email-address'
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e)=>setform({
                ...form,
                password: e
              })}
              otherStyles='mt-7'
            />
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles="w-full mt-7"
              isLoading={isSubmitting}
            /> 
            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
              <Link href='/sign-up' className='text-lg text-secondary font-psemibold'>Sign up</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn