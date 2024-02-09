import * as React from 'react';
import { Component } from 'react';
import renderer from 'react-test-renderer';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

function LikeState() {
    setState({Like: 'red'})
    setState({LikeCount: Likecount + 1})
}

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Like: 'white',
            LikeCount: 0
        }
    }
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.container}>
                    <Image source = {require("./assets/profile_img.png")} style = {{width: '100%',height: '100%', resizeMode: 'center'}}></Image>
                </View>
                <View style = {style.container}>
                    <Text style = {{fontSize: 30,fontWeight: 'bold'}}>Author name: Vivaan</Text>
                </View>
                <View>
                    <Image source = {require("./assets/post.jpeg")} style = {{width: '100%',height: '100%', resizeMode: 'center'}}></Image>
                </View>
                <View style = {styles.container}>
                    <TouchableOpacity style = {{justifyContent: 'center',backgroundColor: 'black'}}
                    onPress={this.LikeState}>
                        <Ionicons name = {'heart'} size = {RFValue(30)} color = {this.state.Like}></Ionicons>
                    </TouchableOpacity>
                    <Text> {this.state.LikeCount} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center'
    }
})