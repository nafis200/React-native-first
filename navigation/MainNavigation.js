
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components1/Home';
import Profile from '../components1/Profile';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


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