/**
 * 作者：chaos
 * 创建日期：2018-05-24 13:37
 * 文件描述：
 */
import commonStyle from "../styles/commonStyle";
import React from "react";
import {View} from "react-native";
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: commonStyle.GRAY_COLOR
    },
    touchableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50
    }
})

class TabBar extends React.Component {


    // 构造
    constructor(props) {
        super(props);
        if (props.tobBarResources.length !== props.tabs.length) {
            console.warn('scrollableTabView TabBar config error, please check resources')
        }

        // 初始状态
        // this.state = {};
    }


    render() {
        const {
            tabBarResources,
            activeTab,
            tabs,
            gotoPage
        } = this.props

        return (
            <View style={styles.container}>

            </View>
        )
    }
}

TabBar.propsTypes = {
    tabBarResources: PropTypes.array.isRequired,//图片资源二维数组
    activeTab: PropTypes.number,
    tabs: PropTypes.array
}

export default TabBar