import React, {componentDidMount} from 'react';
import { View } from 'react-native-web';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import Profile from '../components/Profile';
import LogoutScreen from '../components/Logout';
import StackNavigator from './navigation/StackNavigator';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            light_theme: 'dark'
        }
    }
    componentDidMount() {
    let theme
    firebase
    .database()
    .ref("/users/" + firebase.auth().curentUser.uid)
    .on("value", function (snapshot) {
        theme = snapshot.val().current_theme
    })
    this.setState({light_theme : theme === 'light' ? true : false})
    };
    render() {
        return(
        <NavigationContainer>
        <Drawer.Navigator
        drawerContentOptions = {{activeTintColor: "#e91e63", 
        inactiveTitntColor: this.state.light_theme ? 'black' : "white", 
        itemStyle: {marginVertical : 5}}        }>
        <Drawer.Screen name = "Home" component ={StackNavigator}/>
        <Drawer.Screen name = "Profile" component={Profile}/>
        <Drawer.Screen name = "Logout" component={LogoutScreen}/>
    </Drawer.Navigator>
</NavigationContainer>
        )}
        
    }
    


