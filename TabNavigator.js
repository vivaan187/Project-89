import * as React from 'react';
import renderer from 'react-test-renderer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Feed from "../components/Feed";
import CreatePost from "../components/CreatePost";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused,color,size}) => {
                        let iconName;
                        if (route.name === 'Feed') {
                            iconName = focused
                                ? 'book'
                                : 'book-outline';
                        }
                        else if (route.name === 'CreatePost') {
                            iconName = focused ? 'create': 'create-outline'
                        }
                        return <Ionicons name = {iconName} size = {size} color = {color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'black'
                }}
                >
            <Tab.Screen name = "Feed" component = {Feed}/>
            <Tab.Screen name = "CreatePost" componetn = {CreatePost}/>
        </Tab.Navigator>
    );
}

export default TabNavigator

