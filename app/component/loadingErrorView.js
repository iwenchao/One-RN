/**
 * 作者：chaos
 * 创建日期：2018-05-26 13:03
 * 文件描述：
 */

import React from "react";
import PropTypes from 'prop-types'
import {TouchableOpacity, View} from "react-native";


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

    render(){
        return (
            <TouchableOpacity activeOpacity={1}>
                <View>

                </View>
            </TouchableOpacity>
        )
    }
}