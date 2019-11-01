import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStore} from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import reducers from './reducers';
import {Header} from './components/common';
import AuthLoadingScreen from './components/Pages/AuthLoadingScreen';
import Auth from './components/Pages/Auth';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Tutoring from './components/Pages/Tutoring';

// Create our stack navigator
let AuthStack = createStackNavigator(
  {
    Auth,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#CCCCCC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#F6F6F5',
      },
    },
  },
);

let MainNav = createBottomTabNavigator(
  {
    Home,
    About,
    Tutoring,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-options`;
        } else if (routeName === 'Tutoring') {
          iconName = 'ios-options';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

let AppNavContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: MainNav,
    },
    {
      initialRouteName: 'AuthLoading',
      // Default config for header bar
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0033A0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#F6F6F5',
        },
      },
    },
  ),
);
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
