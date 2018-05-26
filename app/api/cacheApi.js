/**
 * 作者：chaos
 * 创建日期：2018-05-26 14:22
 * 文件描述：
 */
import storage from 'react-native-simple-store'

export function cacheByYearMonth(year, month) {
    let date = new Date()
    if (date.getFullYear() === year && date.getMonth() === month){
        return false
    }
    return true
}

export default cacheApi = (key,fetchFunc,cached = true) =>{
    if (!cached){
        console.log(`cached = false . get api data from network ---  key = ${key}`)
        return fetchFunc()
    }

    return storage.get(key).then(value => {
        if(value){
            console.log(`get api data from storage ---- key = ${key}`)
            return value
        }else {
            fetchFunc().then(value=>{
                console.log(`get api data from network ---- key =${key}`)
                storage.save(key,value)
                return value
            })
        }
    })


}