'use strict';

import React from 'react'
import {
    Text, View, Platform, BackAndroid, StyleSheet, StatusBar

} from 'react-native'
import {getRouteMap, registerNavigator} from "./route";
// import OrientationAndroid from './utils/orientation'
import {ON_BACK_PRESSED} from "./constants/constant";
import {Navigator} from "react-native-deprecated-custom-components";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigator: {
        flex: 1,
        backgroundColor: 'white'
    },
    errorView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    errorText: {
        color: 'red',
        fontSize: 16
    }

});


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this)
    }

    componentWillMount() {
        // OrientationAndroid.lockToPortrait();
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener(ON_BACK_PRESSED, this.onBackPressed)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='black'
                    barStyle='default'
                />
                <Navigator
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{name: 'MainContainer'}}
                />
            </View>
        );
    }

    renderScene(route, navigator) {
        this.navigator = navigator;
        registerNavigator(navigator);

        let Component = getRouteMap().get(route.name).component;
        if (!Component) {
            return (
                <View style={styles.errorView}>
                    <Text style={styles.errorText}>您所启动的Component未在router中注册</Text>
                </View>
            )
        }
        return (
            <Component {...route}/>
        )
    }

    //出厂动画
    configureScene(route) {
        let sceneAnimation = getRouteMap().get(route.name).sceneAnimation;
        if (sceneAnimation) {
            return sceneAnimation
        }
        return Navigator.SceneConfigs.PushFromRight
    }


    onBackPressed() {

    }

    componentDidMount() {
        super.componentDidMount();
        //TODO 第三方分享
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener(ON_BACK_PRESSED, this.onBackPressed)
        }
    }
}