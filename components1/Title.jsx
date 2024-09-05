
import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Title = (props) => {
  return (
    <SafeAreaView>
      <Text style={{fontSize:30}}>{props.title}</Text>
      <FontAwesomeIcon icon={faEnvelope}
       style={{color:'white'}}
       size={32}
      />
    </SafeAreaView>
  )
}

Title.PropTypes = {
     title: PropTypes.string.isRequired
}

export default Title