
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components1/Home';
import Profile from '../components1/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text,View } from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs= createMaterialTopTabNavigator();

const Tab1 = ()=>{
     return(
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
               <Text style={{backgroundColor:'gray'}}>This is tab1</Text>
          </View>
     )
}
const Tab2 = ()=>{
     return(
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
               <Text style={{backgroundColor:'gray'}}>This is tab1</Text>
          </View>
     )
}
const Tab3 = ()=>{
     return(
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
               <Text style={{backgroundColor:'gray'}}>This is tab1</Text>
          </View>
     )
}




export const ProfileTabNavigation = () => {
     return (
          <ProfileTabs.Navigator>
               <ProfileTabs.Screen name="Tab1" component={Tab1} />
               <ProfileTabs.Screen name="Tab2" component={Tab2} />
               <ProfileTabs.Screen name="Tab3" component={Tab3} />
          </ProfileTabs.Navigator>
     );
}


const MainMenNavigation = ()=>{
 return <Drawer.Navigator>
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="Profile" component={Profile} />
</Drawer.Navigator>
}


const MainNavigation = ()=>{
     return(
          <Stack.Navigator initialRouteName={"Home"} screenOptions={{header: ()=> null, headerShown:false}}>
           <Stack.Screen name={"Drawer"} component={MainMenNavigation} />
          </Stack.Navigator>
        
    );
}

export default MainNavigation