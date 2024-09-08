
import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import style from './style';

const Title1 = (props) => {
    return ( 
        <Text style={style.title} >{props.title}</Text>
    );
}

Title1.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title1