import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';


/***** Screens ****/
import WelcomeScreen from './screens/WelcomeScreen';
import SetupTopicsScreen from './screens/SetupTopicsScreen';



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
      }

    }
  },

  {
    initialRouteName:"Welcome",
    
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

/****** End navigator logic ******/

