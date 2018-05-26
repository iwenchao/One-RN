/**
 * 作者：chaos
 * 创建日期：2018-05-26 13:03
 * 文件描述：
 */

import React from "react";
import PropTypes from 'prop-types'
import {Image, Text, TouchableOpacity, View} from "react-native";


LoadingErrorView.propTypes = {
    onPress: PropTypes.func,
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
    },
    image: {
        width: 50,
        height: 50
    }
})


class LoadingErrorView extends React.Component {

    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={[styles.container, this.props.containerStyle]}
                              onPress={this.props.onPress}>
                <View style={[styles.container, this.props.containerStyle]}>
                    <Image style={[styles.container]} resizeMode={'contain'}
                           source={require('../images/loading_error_image.png')}/>
                    <Text style={styles.text}>加载失败，请点击重试</Text>
                </View>
            </TouchableOpacity>
        )
    }
}