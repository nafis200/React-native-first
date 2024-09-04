import { View, Text, Image, ScrollView,SafeAreaView } from 'react-native';
import React from 'react';

const Scroll = () => {
  return (
    <SafeAreaView> 
      <ScrollView showsVerticalScrollIndicator={true} 
      contentContainerStyle={{backgroundColor:'blue',height:2000}}
       style={{marginTop:100}} horizontal={true} showsHorizontalScrollIndicator={true}
      >
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
        <Image
          source={require('../assets/images/66907-images-logo-google-free-download-png-hd.png')}
          style={{ height: 100, width: 300 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scroll;
