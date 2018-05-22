import React from 'react'
import {
    StyleSheet, Text, View,
    Navigator

} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    test: {
        margin: 10,
        textAlign: 'center',
        fontSize: 18
    }

});


export class App extends React.Component {

    constructor(props) {
        super(props)
        this.renderScene = this.renderScene.bind(this)

    }

    getDefaultProps() {

    }

    getInitailState() {

    }


    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.test}>This is a test code </Text>
            </View>
        );
    }

    renderScene(route, navigator){
        this.navigator = navigator;
        registerNavigator(navigator);
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