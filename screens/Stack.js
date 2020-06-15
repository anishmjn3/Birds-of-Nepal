import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {} from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';


import HomeScreen from './MainScreen';
import DetailScreen from './details';

const Stack=createStackNavigator({
    Home :{screen:HomeScreen},
    Details:{screen:DetailScreen}
})

const AppContainer =createAppContainer(Stack);

export default class App extends React.Component{
    render(){
        return <AppContainer />;
    }
}