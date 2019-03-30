//WelcomeScreen.js

import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { ListItem, List, Tile  } from 'react-native-elements';

import flatListData from '../data/topics';
import { Font } from 'expo';



class FlatListItem extends React.Component {
    constructor(props) {
        super(props);
    
        console.log(this.props);
    }

    render() {
        return(

        <Tile 
         
             containerStyle={{padding:10}}
             height='100%'
             title={this.props.obj.title}
             imageSrc={require('../images/cynthia.jpg')}
             
             imageContainerStyle={{width:'100%'}}
             featured
             caption={this.props.obj.desc}
             onPress={() =>{console.log("pressed tile")}}
             overlayContainerStyle={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}
             
            >
          

        </Tile>

        
           
        );
    }
}


export default class SetupTopics extends React.Component {

    


    render() { 
        return(

        <View style={styles.container}>


            <View style={styles.containerHeader}>
                <ImageBackground source={require('../images/background_deco.png')} style={{width: '100%', height: '100%'}}>
                  <View style={styles.containerHeader}>
                     <Text style={styles.headerText}>Welcome!</Text>
                     <Text style={styles.flavorText}>What do you want to learn about?</Text>
                 </View>     
                </ImageBackground>
            </View>





            <View style={styles.containerList}>

                <ScrollView horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            >

                {flatListData.map(item => (
                    <FlatListItem obj={item}></FlatListItem>
                 ))}


                </ScrollView>



            </View>

            <View style={styles.containerButton}>
                <Button color="#FF6F61"
                    title="Next"
                    onPress={() => this.props.navigation.navigate('SetupTime')}/>
                
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
