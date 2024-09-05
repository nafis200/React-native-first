
import { View, Text,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Title = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{flex:1, flexDirection:'row', alignItems: 'center',justifyContent:'space-between',paddingTop:30,paddingLeft:17,paddingRight:26}}>
      <Text style={{fontSize:30}}>{props.title}</Text>
      <FontAwesomeIcon icon={faEnvelope}
       style={{color:'white'}}
       size={32}
      />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Title.PropTypes = {
     title: PropTypes.string.isRequired
}

export default Title