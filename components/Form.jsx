
import { View, Text,SafeAreaView,ScrollView, TextInput, Button,Pressable } from 'react-native'
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
        <View style={{marginTop:10,padding:10}}>
        <Button onPress={()=>{
             console.log(email,password)
        }} title='submit' color={'red'}
        ></Button>
        </View>

        <Pressable onPress={()=>{
            console.log(email,password)
        }} style={[{backgroundColor:'black'},(email.length === 0 || password.length < 6) && {opacity:0.5}]}
        disabled={email.length === 0 || password.length < 6}
        >
            <Text style={{color:'white',textAlign:'center',padding:10,borderRadius:40}}>Submit</Text>
        </Pressable>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form