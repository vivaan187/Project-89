import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../components/PostScreen';
import Navigation from './navigation.TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
    <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name = "Home" component = {TabNavigator} />
        <Stack.Screen name = "PostScreen" component = {PostScreen} />
    </Stack.Navigator>
}

export default StackNavigator;