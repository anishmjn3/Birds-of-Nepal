import React from 'react';
import { View, Text, Button, Dimensions,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './MainScreen';
import DetailScreen from './details';
import BirdScreen from './Explore/TabNavigator';
import ClassesOpen from './Explore/ClassesOpen';
import BirdsFamily from './Explore/BirdsFamily';
import Allbirds from './Explore/AllBirds';

const Tab = createMaterialTopTabNavigator({
    AllBird: { screen: Allbirds },
    Family: { screen: BirdsFamily }
},
    {
        initialRouteName: 'AllBird',
        tabBarOptions: {
            activeTintColor: "#ffffff",
            inactiveTintColor: '#a1a1a6',
            style: { backgroundColor: '#00008b' }
        },
    }
)



const StackScreen = createStackNavigator({ 
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
    Explore: {
        screen: Tab,
        navigationOptions: () => ({
            title: 'Explore All Birds',
            headerStyle: {
                backgroundColor: '#00008b',
            },
            headerTitleStyle: {
                color: 'white'
            },
        })
    },
    OpenClass: { screen: ClassesOpen },
})
const StackScreen1 = createStackNavigator({ 
    Explore: {
        screen: Tab,
        navigationOptions: () => ({
            title: 'Explore All Birds',
            headerStyle: {
                backgroundColor: '#00008b',
            },
            headerTitleStyle: {
                color: 'white'
            },
        })
    },
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
    OpenClass: { screen: ClassesOpen },
})

const Drawer = createDrawerNavigator({
    Main: { screen: StackScreen },
    AboutUs: { screen: StackScreen1,
        navigationOptions: () => ({
        title: 'Explore All Birds',
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        },
    }) },
},
{
    hideStatusBar: false,
    keyboardDismissMode:'none',
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',

    },
    drawerType:'slide'
  }
)

const AppContainer = createAppContainer(Drawer);
// export default createAppContainer(Drawer)
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}


class HomeScreen1 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
        </View>
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
        </View>
      );
    }
  }
  
  const DrawerNavigator = createDrawerNavigator(
    {
      Home: HomeScreen1,
      Settings: SettingsScreen,
    },
    {
      hideStatusBar: false,
      keyboardDismissMode:'none',
    //   drawerBackgroundColor: 'rgba(255,255,255,.9)',
    //   overlayColor: '#6b52ae',
    //   contentOptions: {
    //     activeTintColor: '#fff',
    //     activeBackgroundColor: '#6b52ae',
    //   },
    }
  );
  
//   export default createAppContainer(DrawerNavigator);