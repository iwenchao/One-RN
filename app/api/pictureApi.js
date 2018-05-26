/**
 * 作者：chaos
 * 创建日期：2018-05-26 14:21
 * 文件描述：
 */


export function getPictureList(year, month) {
    let get = cacheByYearMonth(year,month)
    month = month +1
    return get(`/hp/bymonth/${year}-${month}`)
}


export function getLastestPictureList() {
    return getFetchNeverCached('/hp/idlist/0')
}

export function getPictureDetail(id) {
    return getFetchFromCache(`/hp/detail/${id}`)
}