import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class App extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>火箭总冠军！！！</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center'
    },
    hello :{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
});


AppRegistry.registerComponent('onern',()=> App);