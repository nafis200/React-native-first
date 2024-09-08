
import { View, Text, SafeAreaView, ScrollView,Image } from 'react-native'
import React from 'react'
import globalStyle from './globalStyle'
import { horizontalScale } from './Scaling'
import { ProfileTabNavigation } from '../navigation/MainNavigation'

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
      <View style={globalStyle.imageConatiner}>
       
       <View style={globalStyle.profileImageContent}>
       <Image style={{color:'gray',backgroundColor:'gray',borderRadius:100,width:horizontalScale(120),height:horizontalScale(120)}} source={require("../assets/images/72 - default-profile.png")} />
       </View>
    </View>
    <View style={globalStyle.userNameConatiner}>
          <Text style={globalStyle.userName}>Nafis ahamed</Text>
    </View>
    <View style={globalStyle.profileStatsContainer}>
       <View style={globalStyle.singleStatContainer}>
        <Text style={{color:'black',fontSize:20}}>45</Text>
        <Text style={{color:'black',fontSize:20}}>Following</Text>
       </View>
       <View style={globalStyle.singleStatContainer}>
        <Text style={{color:'black',fontSize:20}}>30</Text>
        <Text style={{color:'black',fontSize:20}}>Follwers</Text>
       </View>
       <View style={globalStyle.singleStatContainer}>
        <Text style={{color:'black',fontSize:20}}>100</Text>
        <Text style={{color:'black',fontSize:20}}>Posts</Text>
       </View>
    </View>

   <View style={{height:'180%'}}>
        <ProfileTabNavigation></ProfileTabNavigation>
   </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
