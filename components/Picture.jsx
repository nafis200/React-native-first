
import { View, Text,Image } from 'react-native'
import React from 'react'


const Picture = () => {
  return (
    <View>
      <Image style={{width:'100%',height:'100%',backgroundColor:'red'}}
        resizeMode={'repeat'}
        source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
      />
    </View>
  )
}

export default Picture

// resizeMode
// contain 
// cover 
// stretch 
// repeat
// center