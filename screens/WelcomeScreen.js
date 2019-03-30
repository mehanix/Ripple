//WelcomeScreen.js

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class WelcomeScreen extends React.Component {
    
    
    render() {
      return (
        <View style={styles.container}>
         
         <View style={styles.containerLogo}>
          <Text style={styles.logoText}>Ripple</Text>
          <Text style={styles.flavorText}>Learning made easy</Text>
         </View>
  
         <View style={styles.middleContainer} />
          
  
         <View style={styles.bottomContainer}>
           <Button 
                style={styles.nextButton} 
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
      backgroundColor: 'powderblue',
      /*alignItems: 'center',
      justifyContent: 'center',
      padding:10, */
    },
    containerLogo: {
      flex:5,
      alignItems:'center',  
      justifyContent:'center',
    },
    logoText: {
      fontSize: 96,
    },
    middleContainer: {
      flex:3,
      flexDirection:'column',
      backgroundColor:'skyblue',
      justifyContent:'flex-end',
      padding:10
      
    },
    bottomContainer: {
      flex: 2,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    
    nextButton: {
      
    }
  
  });
  