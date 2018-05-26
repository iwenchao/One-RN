/**
 * 作者：chaos
 * 创建日期：2018-05-26 12:36
 * 文件描述：
 */

import {ToastAndroid} from 'react-native'

function show(msg) {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
}

function showLong(msg) {
    ToastAndroid.show(msg, ToastAndroid.LONG)
}

export default {
    show, showLong
}