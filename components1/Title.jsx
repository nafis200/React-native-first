
import { View, Text,SafeAreaView, ScrollView, Pressable } from 'react-native'
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
      <Pressable style={{backgroundColor:'#898DAE',padding:12, borderRadius:100}}>
      <FontAwesomeIcon icon={faEnvelope}
       style={{color:'white'}}
       size={32}
      />
      <View style={{width:20, height:20,backgroundColor:'pink',borderRadius:10,flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute',right:9,top:-5}}>
        <Text style={{fontSize:6,fontWeight:600, lineHeight:7,color:'white'}}>2</Text>
        </View>
      </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title