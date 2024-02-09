import * as React from 'react';
import { Component } from 'react';
import renderer from 'react-test-renderer';
import {Text,View,StyleSheet,Image} from 'react-native'
var Theme = false

function LikeState() {
    setState({Like: 'red'})
    setState({LikeCount: Likecount + 1})
}

export default class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Like: 'white',
            LikeCount: 0
        }
    }

    fetchTheme = () => {
        let theme
        firebase
        .database()
        .ref('/users' + firebase.auth().currentUSer.uid)
        .on('value', (snapshot) => {
            theme = snapshot.val().current_theme
            this.setState({light_theme: theme === "light"})
            Theme = true 
        })
    }

    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.container}>
                    <Image source = {require("./assets/profile_img.png")} style = {{width: '100%',height: '100%', resizeMode: 'center'}}></Image>
                </View>
                <View style = {style.container}>
                    <Text style = {{fontSize: 30,fontWeight: 'bold', color: Theme? "black":"white"}}>Author name: Vivaan</Text>
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
    },
    containerLight: {
        flex: 1,
        backgroundColor: "#eaeaea"
    }

})