
import { View, Text,Image } from 'react-native'
import React from 'react'

const Picture = () => {
  return (
    <View>
      <Image style={{width:250,height:100,marginTop:50}}
        source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
      />
    </View>
  )
}

export default Picture