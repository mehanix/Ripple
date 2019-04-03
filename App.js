import React from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import { Font } from 'expo';



/***** Screens ****/
import WelcomeScreen from './screens/setup/WelcomeScreen';
import SetupTopicsScreen from './screens/setup/SetupTopicsScreen';
import SetupTimeScreen from './screens/setup/SetupTimeScreen';
import MainScreen from './screens/app/MainScreen';



/************ Navigator logic ************/
const SetupStack = createStackNavigator(
  {
    Welcome: { 
      screen:WelcomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    SetupTopics: {
      screen:SetupTopicsScreen,
      navigationOptions: {
        header: null,
      },
    },
    SetupTime: {
      screen:SetupTimeScreen,
      navigationOptions: {
        header: null,
      },
    }
  },
  {
    initialRouteName:"Welcome",
    
  }
);

const AppStack = createStackNavigator(
  {
    Main: {
      screen:MainScreen,
      navigationOptions: {
        header: null,
      },
    }
  },
  {
    initialRouteName:"Main"
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Setup:SetupStack,
    App:AppStack,
  },
  {
    initialRouteName:'Setup',
  }
))
/****** End navigator logic ******/


export default class App extends React.Component {


 
   

  componentDidMount() {

   

    Font.loadAsync({
      'pacifico': require('./assets/fonts/Pacifico.ttf'),
    });
  }

  render() {
    return <AppContainer />;
  }
}



