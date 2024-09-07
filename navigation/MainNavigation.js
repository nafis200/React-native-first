
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components1/Home';
import Profile from '../components1/Profile';
const Stack = createStackNavigator();
const MainNavigation = ()=>{
     return(
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{header: ()=> null, headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    );
}

export default MainNavigation