/**
 * 作者：chaos
 * 创建日期：2018-05-26 12:54
 * 文件描述：
 */

import React from "react";
import PropTypes from 'prop-types'
import {Text, View} from "react-native";

LoadingView.propTypes = {
    containerStyle: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        marginTop: 10
    }
})


class LoadingView extends React.Component {

    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <Text style={styles.text}>加载中...</>
            </View>
        )
    }
}

export default LoadingView