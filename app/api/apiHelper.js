/**
 * 作者：chaos
 * 创建日期：2018-05-26 14:25
 * 文件描述：
 */


import cacheApi from "./cacheApi";

const BASE_URL = 'http://v3.wufazhuce.com:8000/api';

const showLog = __DEV__;

const getFetch = (url, cached) => {
    const fetchFunc = () => {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            }
        }).then(convertRespToJson)
    }
    return cacheApi(url, fetchFunc, cached).then(defaultAnalyse)
};

const postFetch = url => jsonData => {
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        body: jsonData
    }).then(convertRespToJson).then(defaultAnalyse)
}

const convertRespToJson = response => {
    return response.json()
}

const defaultAnalyse = response => {
    if (response.res === 0) {
        return response.data
    } else {
        console.warn(response.msg)
        throw response.msg
    }
}


const get = cached => (path, data) => {
    let url = `${BASE_URL}${path}`
    if (data) {
        url.append(`?${_getParam(data)}`)
    }
    return loggerWrap(`GET ${url}`)(() => {
        return getFetch(url, cached)
    })
}

const post = path => data => {
    let jsonData = JSON.stringify(data)
    let url = BASE_URL + path
    return loggerWrap(`POST ${url} ${jsonData}`)(() => {
        return postFetch(url)(jsonData)
    })
}


const _getParam = data => {
    return Object.entries(data).map(([key, value]) => {
        return `${key}=${value}`
    }).join('&')
}

const loggerWrap = requestInfo => fetchFunc => {
    if (showLog) {
        let startTime = new Date().getTime()//请求的开始时间
        return fetchFunc().then(result => {
            console.log(`${requestInfo} success  result = ${JSON.stringify(result)} cost time = ${new Date().getTime() - startTime} ms`)
            return result
        }).catch(err => {
            console.warn(`${requestInfo}  ${err}`)
            return Promise.reject(err)
        })
    }

    return fetchFunc()
}

const getFetchFromCache = get(true)
const getFetchNeverCached = get(false)