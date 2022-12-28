import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const MiFraseScreen = require("./MiFraseScreen");

function HomeScreen(){
  return(
    <ImageBackground source={require('../img/fondoHome.jpg')}  
    style={{ resizeMode:'cover',
    width: '100%',
    height: '100%', 
 }}>
 <View >

 <Text  style={{width:300,marginTop:30, marginLeft:40, 
    fontSize: RFValue(24),
    textAlign: "center",
    margin: 10
  ,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: RFPercentage(5),
   }}  variant="displayLarge"> Bienvenido a Fraseate!  
 </Text>

 <Text style={{width:300,marginTop:10, marginLeft:45,
    fontSize: RFValue(24),
    textAlign: "center",
    margin: 10
  ,
    textAlign: "center",
    color: "#333333",
    fontSize: RFPercentage(3),
  }}  variant="titleMedium"> Busca tu frase anime del dia :D {"\n"} 
 </Text>

  </View >
  
  </ImageBackground>

  ) 

}

module.exports = HomeScreen;