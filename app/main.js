'use strict';

import React from 'react'
import {
    StyleSheet, Text, View

} from 'react-native'
import {getRouteMap} from "./route";
import Orientation from './utils/orientation'

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


    componentDidMount(): void {
        super.componentDidMount();
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return super.shouldComponentUpdate(nextProps, nextState, nextContext);
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        super.componentDidUpdate(prevProps, prevState, snapshot);
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        super.componentWillUpdate(nextProps, nextState, nextContext);
    }
}