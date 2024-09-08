

import { StyleSheet } from 'react-native'
import React from 'react'
import { horizontalScale, scaleFontSize, verticalScale } from './Scaling'

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
     },
     userName:{
         fontWeight:'600',
         fontSize:scaleFontSize(20),
         lineHeight:scaleFontSize(20),
         color:'black'
     },
     userNameConatiner:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:verticalScale(20)
     },
     profileStatsContainer:{
        marginHorizontal:horizontalScale(24),
        flexDirection:'row',
        justifyContent:'center'
     },
     singleStatContainer: {
        paddingHorizontal: horizontalScale(18),
     }
})

export default globalStyle