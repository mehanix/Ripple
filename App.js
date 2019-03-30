import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Font } from 'expo';


/***** Screens ****/
import WelcomeScreen from './screens/WelcomeScreen';
import SetupTopicsScreen from './screens/SetupTopicsScreen';
import SetupTimeScreen from './screens/SetupTimeScreen';


/************ Navigator logic ************/
const AppNavigator = createStackNavigator(
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

const AppContainer = createAppContainer(AppNavigator);

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

/****** End navigator logic ******/

