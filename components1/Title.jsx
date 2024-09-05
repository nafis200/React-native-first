
import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
const Title = (props) => {
  return (
    <SafeAreaView>
      <Text>{props.title}</Text>
    </SafeAreaView>
  )
}

Title.PropTypes = {
     title: PropTypes.string.isRequired
}

export default Title