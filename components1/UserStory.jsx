import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
const UserStory = (props) => {
  return (
    <View style={{marginLeft:10,marginTop:15}}>
      <ScrollView>
      <Image style={{backgroundColor:'white',borderRadius:100,borderWidth:5,borderColor:'#F35BAC'}} source={require('../assets/images/72 - default-profile.png')} />
      <Text>{props.firstName}</Text>
      </ScrollView>
    </View>
  )
}

UserStory.propTypes = {
     firstName: PropTypes.string.isRequired
}

export default UserStory