import * as React from 'react';
import { Component } from 'react';
import renderer from 'react-test-renderer';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from './components/PostScreen';

const Stack = createStackNavigator();

function Navigation () {

    <Stack.Navigator>
        <Stack.Screen name = "Feed" component = {Feed} />
        <Stack.Screen name = "Post Screen" component = {PostScreen} />
    </Stack.Navigator>

}

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.post.key,
            post_val: this.props.post.value
        }
    }

    render () {
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                    <View style = {styles.appTitle}>
                        <View style = {styles.appIcon}>
                            <Image 
                            source = {require("./assets/logo.png")}
                            style = {styles.iconImage}>
                            </Image>
                            </View>
                            <View style = {styles.appTitleTextContainer}>
                                <Text style = {styles.appTitleText}>Spectagram</Text>
                            </View>  
                            <View style = {styles.buttonContainer}>
                                <TouchableOpacity 
                                    style = {styles.button}
                                    onPress = {() => navigation.navigate("Post Screen")}
                                ><Text style = {styles.buttonText}>Post Screen</Text></TouchableOpacity>    
                            </View>                      
                    </View>
                    <View style = {styles.cardContainer}>
                        <FlatList 
                        keyExtractor={this.keyExtractor}
                        data = {posts}
                        renderItem={this.renderItem}
                        />
                    </View>              
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black'
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: 'row'
    },
    appIcon: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center'
    },
    appTitleText: {
        color: 'white',
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
})



