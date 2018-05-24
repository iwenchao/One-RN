import {
    Navigator,
} from 'react-native';
import MainContainer from "./container/mainContainer";


let navigator;
const routeMap = new Map();

routeMap.set('MainContainer', {component: MainContainer});

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

