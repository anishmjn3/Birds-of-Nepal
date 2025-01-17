
import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import DetailScreen from '../details';
import ClassesOpen from './ClassesOpen';
import BirdsFamily from './BirdsFamily';
import Allbirds from './AllBirds';

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

const Stack =createStackNavigator({
    Home:{screen:Tab},
    Details:{screen:DetailScreen},
    Explore:{screen:Allbirds},
    OpenClass:{screen:ClassesOpen}
},
{
    initialRouteName:'Home'
})
const AppContainer = createAppContainer(Stack);

export default class App extends React.Component {
    static navigationOptions = () => ({
        title: 'Explore All Birds',
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        },
    });

    render() {
        return <AppContainer />;
    }
}