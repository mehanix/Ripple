//WelcomeScreen.js

import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';



export default class WelcomeScreen extends React.Component {
    
    
    render() {
      return (
        <View style={styles.container}>
         
         <View style={styles.containerLogo}>
          <ImageBackground source={require('../../images/background_deco.png')} style={{width: '100%', height: '100%'}}>
           <View style={styles.containerLogo}>
            <Image style={{width: 300, height: 150}}
                  source={require('../../images/app_logo.png')}></Image>
            <Text style={styles.flavorText}>Learning made easy</Text>

            </View>
      
        
          </ImageBackground>

    
         </View>
  
         <View style={styles.middleContainer} />
          
  
         <View style={styles.bottomContainer}>
           <Button 
                color="#FF6F61"
          
                title="Let's go!"
                onPress={() => this.props.navigation.navigate('SetupTopics')}/>
         </View>
  
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#263056',
      /*alignItems: 'center',
      justifyContent: 'center',
      padding:10, */
    },
    containerLogo: {
 
      flex:6,
      alignItems:'center',  
      justifyContent:'center',
    },
    flavorText: {
      color:'white',
      fontSize:20
    },
    middleContainer: {
      flex:3,
      flexDirection:'column',
      justifyContent:'flex-end',
      padding:10,
      
    },
    bottomContainer: {
     padding:15
    },
    
    nextButton: {
      
    }
  
  });
  