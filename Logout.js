import React, {Component} from "react";
import firebase from "firebase";

export default class LogoutScreen extends Component {
    componentDidMount() {
        firebase.auth().signOut();
        this.props.navigation.replace("Login")
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>Logout</Text>
          </View>
        );
      }

}

 const styles = StyleSheet.create({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
})