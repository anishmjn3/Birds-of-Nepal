import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


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
            activeTintColor:"#ffffff",
            inactiveTintColor:'#a1a1a6',
            style:{backgroundColor: '#00008b'}
         },
    }
)


const Stack=createStackNavigator({
    Home :{screen:HomeScreen},
    Details:{screen:DetailScreen},
    Explore:{screen:Tab,
        navigationOptions : () => ({
            title: 'Explore All Birds',
            headerStyle: {
                backgroundColor: '#00008b',
            },
            headerTitleStyle: {
                color: 'white'
            },
            // headerShown:false
    
        })},
    OpenClass:{screen:ClassesOpen}
})

const AppContainer =createAppContainer(Stack);

export default class App extends React.Component{
    render(){
        return <AppContainer />;
    }
}