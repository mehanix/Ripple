//WelcomeScreen.js

import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { ListItem, List  } from 'react-native-elements';

import flatListData from '../data/topics';


class FlatListItem extends React.Component {
    constructor(props) {
        super(props);
    
        console.log(this.props);
    }
    
    render() {
        return(
        
            
            <View style={{flex:1,backgroundColor:'purple'}}>
                <Text style={{fontSize:30}}>{this.props.obj.item.title}</Text>
                <Text>{this.props.obj.item.desc}</Text>
            </View>
        );
    }
}


export default class SetupTopics extends React.Component {

    render() { 
        return(

        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <Text style={styles.headerText}>Welcome!</Text>
                <Text>What do you want to learn about?</Text>
            </View>

            <View style={styles.containerList}>
                <FlatList horizontal={true}
                data={flatListData}
                renderItem={(item) => {   
                    return(<FlatListItem obj={item}></FlatListItem>)}}> 


                </FlatList>
         

            </View>

            <View style={styles.containerButton}>
                <Button
                    title="Next"/>
                
            </View>

        </View>
        
    
        )};

}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    containerHeader: {
        flex:3,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
    },
    containerList: {
        flex:5,
        backgroundColor:'blue'
    },
    containerButton:{
        flex:1,
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:'center'
    },
    headerText: {
        fontSize:48,
    }

});
