import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, lightTheme} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeScreen = require("./screens/HomeScreen");
const MiFraseScreen = require("./screens/MiFraseScreen");

const Menu = createDrawerNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0,0,0)',
    background: 'rgb(0,0,0)',
    card: 'rgb(234, 4, 126)',
    text: 'rgb(0,0,0)'
  },
}
export default function app(){

  return(
   
   <NavigationContainer theme={MyTheme}>
    <Menu.Navigator 
     screenOptions={{
      headerStyle:{
        backgroundColor:"#ea047e"
      }
    }}
    
    >
   
     <Menu.Screen name="Home"component={HomeScreen}/>

     <Menu.Screen name="MiFrase" component={MiFraseScreen}/>
    
    </Menu.Navigator>

    </NavigationContainer>
  )
 
  }
