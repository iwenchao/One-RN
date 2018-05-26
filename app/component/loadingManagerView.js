/**
 * 作者：chaos
 * 创建日期：2018-05-26 12:47
 * 文件描述：
 */

import React from "react";
import PropTypes from 'prop-types'
import LoadingView from './loadingView'
import LoadingErrorView from './loadingErrorView'
import {Text, View} from "react-native";

LoadingManagerView.Loading = 'Loading'
LoadingManagerView.LoadingError = 'LoadingError'
LoadingManagerView.LoadingOK = 'LoadingOK'

LoadingManagerView.propTypes = {
    onFetchData: PropTypes.func,
    status: PropTypes.oneOf([LoadingManagerView.Loading, LoadingManagerView.LoadingError, LoadingManagerView.LoadingOK]).isRequired,
    containerStyle: PropTypes.object

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 18
    }
})

class LoadingManagerView extends React.Component {
    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        const {containerStyle} = this.props
        switch (this.props.status) {
            case LoadingManagerView.Loading:
                return (
                    <LoadingView containerStyle={containerStyle}/>
                )
                break
            case LoadingManagerView.LoadingError:
                return (
                    <LoadingErrorView containerStyle={containerStyle} onPress={this.props.onFetchData}/>
                )
                break
            case LoadingManagerView.LoadingOK:
                return null

            default:
                return (
                    <View style={styles.container}>
                        <Text style={styles.errorText}>状态定义错误</Text>
                    </View>
                )
        }


    }
}

export default LoadingManagerView