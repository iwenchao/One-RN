/**
 * 作者：chaos
 * 创建日期：2018-05-25 15:44
 * 文件描述：
 */

import React from "react";
import {getNavigator} from "../route";
import {View, StyleSheet} from "react-native";

class BaseComponent extends React.Component {

    // 构造
    constructor(props) {
        super(props);
    }

    getNavigatorBarProps() {
        return null
    }

    renderNavigatiorBar() {
        let naviProps = this.getNavigatorBarProps()
        Object.assign(naviProps, this.props)
        return (
            <NavigatorBar
                navigatorBarProps={naviProps}
                onLeftPressed={this.onLeftPressed}
                onRightPressed={this.onRightPressed()}
            />
        )
    }

    renderBody() {

    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.renderNavigatiorBar()}
                {this.renderBody()}
            </View>
        )
    }

    onLeftPressed() {
        getNavigator().pop()
    }

    onRightPressed() {
        console.log('onRightPressed')
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default BaseComponent