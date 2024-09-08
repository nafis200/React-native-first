
import { View, Text, SafeAreaView, ScrollView,Image } from 'react-native'
import React from 'react'
import globalStyle from './globalStyle'

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
      <View style={globalStyle.imageConatiner}>
       
       <View style={globalStyle.profileImageContent}>
       <Image style={{color:'gray',backgroundColor:'gray',borderRadius:100}} source={require("../assets/images/72 - default-profile.png")} />
       </View>

    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
