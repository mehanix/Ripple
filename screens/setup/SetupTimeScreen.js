import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { ListItem, List, Tile  } from 'react-native-elements';

import flatListData from '../../data/topics';
import { Font, TimePickerAndroid } from 'expo';




export default class SetupTopics extends React.Component {

      

    render() { 
      
        
        return(

        <View style={styles.container}>


            <View style={styles.containerHeader}>
                <ImageBackground source={require('../../images/background_deco.png')} style={{width: '100%', height: '100%'}}>
                  <View style={styles.containerHeader}>
                     <Text style={styles.headerText}>Great!</Text>
                     <Text style={styles.flavorText}>What hour should we notify you?</Text>
                 </View>     
                </ImageBackground>
            </View>





            <View style={styles.containerList}>
            <View style={styles.containerButton}>
                <Button color="#FF6F61"
                    title="time picker"
                    onPress={() => this.renderTimePicker()}/>
                
            </View>

            </View>

            <View style={styles.containerButton}>
                <Button color="#FF6F61"
                    title="Finish!"/>
                
            </View>

        </View>
        
    
        )};

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#263056'
    },

    containerHeader: {
        flex:3,
       // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
    },
    containerList: {
        flex:7,
        justifyContent:'center'
     //   backgroundColor:'blue'
    },
    containerButton:{
        
        paddingTop:30,
        padding:15
    },
    headerText: {
        fontSize:48,
        fontFamily:'pacifico',
        color:'white'
    },
    flavorText: {
        color:'white',
        fontSize:20
    }

});
