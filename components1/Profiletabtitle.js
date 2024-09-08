


import React from 'react'
import PropTypes from "prop-types"
import { Text,View } from 'react-native'
import style from './Style'
const Profiletabtitle = (props) => {
  return (
    <Text style={style.title}>{props.title}</Text>
  )
}

Profiletabtitle.propTypes = {
    Focused: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
 }

export default Profiletabtitle