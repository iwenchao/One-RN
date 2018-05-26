/**
 * 作者：chaos
 * 创建日期：2018-05-25 15:32
 * 文件描述：
 */
import BaseComponent from "../component/BaseComponent";
import {getNavigator} from "../route";
import Toast from '../utils/toast.android'
import appearTime from "../constants/appearTime";
import LoadingManagerView from '../component/loadingManagerView'
import {getLastestPictureList} from "../api/pictureApi";

class PicContainer extends BaseComponent {

    // 构造
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.renderPage = this.renderPage.bind(this)
        this.onBeyondRange = this.onBeyondRange.bind(this)
        this.state = {
            dataSource : new ViewPagerAndroid.DataSource()
        }

    }


    getNavigatorBarProps() {
        return {
            leftButtonIcon: require('../images/search_min.png'),
            rightButtonIcon: require('../images/individual_center.png'),
            title: 'ONE'
        }
    }

    componentDidMount() {

    }

    fetchData() {
        //加载中
        this.state({
            loadingState:LoadingManagerView.Loading
        })
        //去下载数据
        getLastestPictureList().then(idlist =>{
            this.setState({
                dataSource : this.state.dataSource.cl
            })
        })
    }

    renderBody() {

    }


    onBeyondRange(num) {
        if (num < 0) {
            Toast.show('右拉刷新页面')
        } else {
            Toast.show('左滑进入往期列表')
            getNavigator().push({
                name: 'BeforeMonthList',
                ...(appearTime.picture),
                onPress: this.onPress
            })
        }

    }

    onPress(rowData) {
        getNavigator().push({
            name: 'BeforePictureList',
            year: rowData[0],
            month: rowData[1]
        })
    }

    /**
     *
     * @param id
     * @param pageId
     */
    renderPage(id, pageId) {

    }


    onLeftPressed(): void {
        super.onLeftPressed();
    }

    onRightPressed(): void {
        super.onRightPressed();
        getNavigator().push({
            name: 'MyGithubPage'
        })
    }
}

export default PicContainer