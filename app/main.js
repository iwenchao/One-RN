'use strict';

import React from 'react'
import {
    StyleSheet, Text, View, Platform, BackAndroid

} from 'react-native'
import {getRouteMap} from "./route";
import Orientation from './utils/orientation'
import {ON_BACR_PRESSED} from "./constants/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    test: {
        margin: 10,
        textAlign: 'center',
        fontSize: 18
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
        super(props)
        this.renderScene = this.renderScene.bind(this)
        this.configureScene = this.configureScene.bind(this)
    }

    componentWillMount() {
        Orientation.lockToPortrait()
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener(ON_BACR_PRESSED, this.onBackPressed)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.test}>This is a test code </Text>
            </View>
        );
    }

    renderScene(route, navigator) {
        this.navigator = navigator;
        registerNavigator(navigator);

        let Component = getRouteMap().get(route.name).component
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
        let sceneAnimation = getRouteMap().get(route.name).sceneAnimation
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

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return super.shouldComponentUpdate(nextProps, nextState, nextContext);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener(ON_BACR_PRESSED, this.onBackPressed)
        }
    }
}