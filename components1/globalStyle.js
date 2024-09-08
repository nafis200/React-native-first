

import { StyleSheet } from 'react-native'
import React from 'react'
import { horizontalScale } from './Scaling'

const globalStyle = StyleSheet.create({
     backgroundWhite: {
         backgroundColor: '#FFFFFF',
     }, 
     flex: {
         flex: 1,
     },
     imageConatiner:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
     },
     profileImageContent:{
         borderWidth: 1,
         padding: horizontalScale(3),
         borderRadius: horizontalScale(50)
     }
})

export default globalStyle