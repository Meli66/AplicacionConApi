import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button , Card, Text} from 'react-native-paper';
import {ImageBackground, View} from 'react-native';


const axios = require('axios').default;



 function MiFraseScreen() {

    const [frase1, setFrase1] = React.useState("");
    const [frase2, setFrase2] = React.useState("");
    const [frase3, setFrase3] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    
   
    
    function llamarAPI(){
    
    
    axios.get("https://animechan.vercel.app/api/random")
    .then(function (resp){
    
    setLoading(true);

    setFrase1(resp.data);
    setFrase2(resp.data);
    setFrase3(resp.data);
    
    
      })
      .catch(function (error) {
       console.log(error);
       setLoading(false);
      });
    
    }
    
    
  

  if (loading) 
  {
    
  
  return (

  <ImageBackground source={require('../img/fondoMiFrase.jpg')}  
        style={{ resizeMode:'cover',
          width: '100%',
          height: '100%', 
       }}>
  <View >
   
  <Button style={{width:250,backgroundColor:'#ea047e', marginTop:50, marginLeft:65}} icon="" mode="contained" onPress={() => llamarAPI()}>
   OBTENGA SU FRASE
  </Button>
   <Text> {"\n"} </Text>
  <Card>
    <Card.Content >
  <Text variant="titleSmall" style={{ marginLeft:2, width:350}}> Anime: {frase1.anime} {"\n"} {"\n"} Personaje: {frase2.character} {"\n"} {"\n"} Frase: {frase3.quote} </Text>
    </Card.Content>
  </Card>
   <StatusBar style="auto" />

 </View>

</ImageBackground>

  );
  }else
  { 
     return (

      <ImageBackground  source={require('../img/fondoError2.jpg')}  
      style={{ resizeMode:'cover',
          width: '100%',
          height: '100%', 
       }}>
      
      <ImageBackground  source={require('../img/fondoError.gif')}  
     style={{ resizeMode:'cover',
     width: '100%',
     height: '100%', 
  }}>

       <Text  style={{marginTop:200}} >  </Text>
       <Card>
        <Card.Content >
     <Text  style={{width:250, marginLeft:90}}  variant="titleMedium"> Error: No encontrado </Text>
       </Card.Content>
      </Card>
      </ImageBackground>
     </ImageBackground>

     ); 
  } 

}

module.exports = MiFraseScreen;


