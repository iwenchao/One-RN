/**
 * 作者：chaos
 * 创建日期：2018-05-24 15:43
 * 文件描述：
 */

import MainContainer from "./container/mainContainer";
import ImageViewer from "./component/imageViewer";
import {Navigator} from "react-native-deprecated-custom-components";

let navigator;
const routeMap = new Map();

routeMap.set('MainContainer', {component: MainContainer});
routeMap.set('ImageViewer', {component: ImageViewer, sceneAnimation: Navigator.SceneConfigs.FadeAndroid})



export function registerNavigator(tmNavigator) {
    if (navigator) {
        return
    }
    navigator = tmNavigator
}

export function getNavigator() {
    return navigator
}

export function getRouteMap() {
    return routeMap
}

