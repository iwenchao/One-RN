import MainContainer from "./container/mainContainer";
import ImageViewer from "./component/imageViewer";


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

