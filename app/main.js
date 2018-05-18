import React from 'react'
import {
    StyleSheet, Text, View

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


class App extends React.Component {

    constructor(props) {
        super(props)

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