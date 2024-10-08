import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const VideoCard = ({ video:{ title , thumbnail , video , creator :{username, avatar} } }) => {
    const [play, setplay] = useState(false)
  return (
    <View className='flex-col items-center mb-14 px-4'>
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
                    <Image
                        source={{uri:avatar}}
                        className='w-full h-full rounded-lg'
                        resizeMode='cover'    
                    />
                </View>
                <View className='justify-center ml-3 gap-y-1 flex-1'>
                    <Text className='text-sm text-white font-psemibold' numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className='text-xs text-gray-100 font-pregular'>
                        {username}
                    </Text>
                </View>
            </View>
            <View className='pt-2'>
                <Image
                    source={icons.menu}
                    className="w-5 h-5"
                    resizeMode='contain'
                />
            </View>
        </View>
        {play ? (
            <Text className='text-white'>Playing</Text>
        ):(
            <TouchableOpacity className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
                activeOpacity={0.7}
                onPress={() => setplay(true)}
               >
                <Image
                    source={{uri:thumbnail}}
                    className='w-full h-full rounded-xl mt-3'
                    resizeMode='cover'
                />
                <Image
                    source={icons.play}
                    className='w-12 h-12 absolute'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )}
    </View>
  )
}

export default VideoCard