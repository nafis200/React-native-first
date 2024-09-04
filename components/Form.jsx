
import { View, Text,SafeAreaView,ScrollView, TextInput, Button,Pressable,Switch } from 'react-native'
import React,{useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Form = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput style={{borderWidth:1,borderRadius:40,padding:10,marginTop:10,backgroundColor:'blue'}}
        placeholder='enter your mail'
        value={email}
        onChangeText={(value)=>{
            setEmail(value)
        }}
        />
        <TextInput style={{borderWidth:1,borderRadius:40,padding:10,marginTop:10,backgroundColor:'pink'}}
        placeholder='enter your password'
        value={password}
        secureTextEntry={true}
        onChangeText={(x)=>{
             setPassword(x)
        }}
        />
        <View style={{flex: 1, direction:'row',alignItems:'center'}}>
        <Switch style={{marginRight:300,backgroundColor:'green',justifyContent:'center'}}
        trackColor={{false: 'blue', true: 'red'}}
        thumbColor={isEnabled ? 'pink' : 'sky'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        <Text>keep me login</Text>
        </View>
        <View style={{marginTop:10,padding:10}}>
        <Button onPress={()=>{
             console.log(email,password)
        }} title='submit' color={'red'}
        ></Button>
        </View>

        <Pressable onPress={()=>{
            console.log(email,password,isEnabled)
        }} style={[{backgroundColor:'black'},(email.length === 0 || password.length < 6) && {opacity:0.5}]}
        disabled={email.length === 0 || password.length < 6}
        >
            <Text style={{color:'white',textAlign:'center',padding:10,borderRadius:40}}>
              Submit
            </Text>
        </Pressable>
        <FontAwesomeIcon icon={faCheck} style={{color:'white',marginLeft:170}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form