import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import ScrollableTabView from "react-native-scrollable-tab-view";


const styles = StyleSheet.create(
    {
        subView: {
            overflow: 'hidden'
        }
    }
);

const TAB_BAR_RESO = [
    [require('../images/home.png'), require('../images/home_active.png')],
    [require('../images/reading.png'), require('../images/reading_active.png')],
    [require('../images/music.png'), require('../images/music_active.png')],
    [require('../images/movie.png'), require('../images/movie_active.png')]

];

class MainContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<ScrollableTabView
            tabBarPosition="bottom"
            locked={true}
            scrollWithoutAnimation={true}
            prerenderingSiblingsNumber={4}
            renderTabBar={()=>{
                return <TabBar >
            }
            }
        >

        </ScrollableTabView>)
    }


}

export default MainContainer