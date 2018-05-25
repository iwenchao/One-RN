/**
 * 作者：chaos
 * 创建日期：2018-05-24 15:43
 * 文件描述：
 */

import {Platform} from 'react-native'
import OrientationIOS from 'react-native-orientation'
import OrientationAndroid from 'react-native-orientation'


let Orientation;
if (Platform.OS === 'ios') {
    Orientation = OrientationIOS
} else {
    Orientation = OrientationAndroid
}

export default Orientation