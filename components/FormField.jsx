import { View, Text, TextInput, Image } from 'react-native'
import React,{useState} from 'react'
import { icons } from '../constants'
import { TouchableOpacity } from 'react-native'

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {

    const [showPassword, setshowPassword] = useState(false)
  return (
    <View   className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className="border-2 border-black-200 bg-black-100 w-full h-16 px-4 
      rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
            className="flex-1 text-white font-psemibold text-base w-full"
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry={title==='Password' && !showPassword}
        />

        {title==='Password' && (
            <TouchableOpacity onPress={()=>
                setshowPassword(!showPassword)
            }>
                <Image source={!showPassword ? icons.eye : icons.eyehide}
                className='w-6 h-6' resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
      
    </View>
  )
}

export default FormField