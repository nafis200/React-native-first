import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput,View,Text} from 'react-native';

const Input = () => {
    const [text,setText] = useState('')
    const [number, onChangeNumber] = React.useState('');
  
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>{
             setText(value)
        }}
        value={text}
        placeholder='enter your name'
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      
      <View>
        <Text>{text}</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Input