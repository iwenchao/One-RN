/**
 * 作者：chaos
 * 创建日期：2018-05-26 12:47
 * 文件描述：
 */

import React from "react";
import PropTypes from 'prop-types'
import LoadingView from './loadingView'

LoadingManagerView.Loading = 'Loading'
LoadingManagerView.LoadingError = 'LoadingError'
LoadingManagerView.LoadingOK = 'LoadingOK'

LoadingManagerView.propTypes = {
    onFetchData: PropTypes.func,
    status: PropTypes.oneOf([LoadingManagerView.Loading, LoadingManagerView.LoadingError, LoadingManagerView.LoadingOK]).isRequired,
    containerStyle: PropTypes.object

}

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


                break
        }


    }
}