import React, { Component } from 'react';
import { View, Text, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomSidebarMenu from './CustomSidebarMenu';
import HomeScreen from './MainScreen';
import DetailScreen from './details';
import BirdScreen from './Explore/TabNavigator';
import ClassesOpen from './Explore/ClassesOpen';
import BirdsFamily from './Explore/BirdsFamily';
import Allbirds from './Explore/AllBirds';
import AboutUsScreen from './AboutUS/Aboutus';
import PrivacyPolicayScreen from './AboutUS/PrivacyPolicy';

global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = (navigation) => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>this.props.navigationProps.toggleDrawer()} >
                    {/*Donute Button Image */}
                    <Image
                        source={require('./Menuicon.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


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
    Home: {
        screen: HomeScreen,
        navigationOptions: (navigation) => ({
            title: 'Birds of Nepal',
            // headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00008b',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerLeft: () => (

            <TouchableOpacity
                // onPress={() => navigation.openDrawer()}

            >
                <Image
                    source={require('./Menu2.png')}
                    style={{ height: 20, width: 50, alignContent: 'center' }}
                    resizeMode='contain'
                />

            </TouchableOpacity>
            )
        })
    },
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
    Main: {screen: StackScreen},
    AboutUs: { screen: AboutUsScreen },
    PrivacyPolicy:{screen:PrivacyPolicayScreen}
},
    {
        contentComponent: CustomSidebarMenu,
        hideStatusBar: false,
        keyboardDismissMode: 'none',
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        drawerType: 'slide'
    }
)

const AppContainer = createAppContainer(Drawer);
// export default createAppContainer(Drawer)
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
