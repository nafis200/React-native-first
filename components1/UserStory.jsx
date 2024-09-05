import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
const UserStory = (props) => {
  return (
    <View style={{marginLeft:5}}>
      <ScrollView>
      <Image style={{backgroundColor:'white',borderRadius:100}} source={require('../assets/images/72 - default-profile.png')} />
      <Text>{props.firstName}</Text>
      </ScrollView>
    </View>
  )
}

UserStory.propTypes = {
     firstName: PropTypes.string.isRequired
}

export default UserStory