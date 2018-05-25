/**
 * 作者：chaos
 * 创建日期：2018-05-24 16:28
 * 文件描述：
 */

import React from "react";
import {getNavigator} from "../route";
import {TouchableOpacity, Dimensions, Image, StyleSheet} from "react-native";
import PropTypes from 'prop-types'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: windowHeight / 3 * 2,
        width: windowWidth
    }
})


class ImageViewer extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this)
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={this.onPress()}>
                <Image style={styles.image} resizeMode='contain' source={this.props.source}/>
            </TouchableOpacity>
        )
    }

    onPress() {
        getNavigator().pop()
    }
}

ImageViewer.propTypes = {
    source: PropTypes.oneOfType([
        PropTypes.shape({uri: PropTypes.string}),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.shape({uri: PropTypes.string, width: PropTypes.number, height: PropTypes.number}))
    ]),
}


export default ImageViewer