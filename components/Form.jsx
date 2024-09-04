
import { View, Text,SafeAreaView,ScrollView, TextInput } from 'react-native'
import React,{useState} from 'react'

const Form = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form