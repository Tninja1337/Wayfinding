import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStore} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import reducers from './reducers';
import {
  Auth,
  AuthLoadingScreen,
  Directions,
  Explore,
  Settings,
  Help,
} from './components/Pages';

const HeaderBarConfig = {
  // Default config for header bar
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#FFA500',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#F6F6F5',
    },
  },
};
// Stack Navigator for authentication page
let AuthStack = createStackNavigator(
  {
    Auth,
  },

  HeaderBarConfig,
);
/* 
  These next few stacks are each individual tab, we use 
  a stack navigator for each so that way if we have sub-pages
  for any page, we can navigate to them.
*/
const DirectionsStack = createStackNavigator(
  {
    Directions,
  },
  HeaderBarConfig,
);

const ExploreStack = createStackNavigator(
  {
    Explore,
  },
  HeaderBarConfig,
);

const SettingsStack = createStackNavigator(
  {
    Settings,
  },
  HeaderBarConfig,
);

const HelpStack = createStackNavigator(
  {
    Help,
  },
  HeaderBarConfig,
);
//Combine all our main stacks into a tab navigator
let MainNav = createBottomTabNavigator(
  {
    Directions: DirectionsStack,
    Explore: ExploreStack,
    Settings: SettingsStack,
    Help: HelpStack,
  },
  {
    //Set each of the tabs icons
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Directions') {
          iconName = `navigation`;
        } else if (routeName === 'Explore') {
          iconName = `map-marker-radius`;
        } else if (routeName === 'Settings') {
          iconName = 'settings';
        } else if (routeName === 'Help') {
          iconName = 'help';
        }

        // Return Icon component to be used for tab
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    //Settings for tabs when switching between them
    tabBarOptions: {
      activeBackgroundColor: '#FFA500',
      activeTintColor: 'white',
      inactiveTintColor: 'black',
    },
  },
);
//Our over-arching nav container that holds both the auth flow and main app flow
let AppNavContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: MainNav,
    },
    {
      initialRouteName: 'AuthLoading',
      HeaderBarConfig,
    },
  ),
);

//Create our app, wrapping it in a provider which gives us access to the redux store
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
