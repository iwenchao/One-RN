本项目实现如何将react native继承到现有项目
[参考链接](https://juejin.im/entry/5a570dccf265da3e393a5597)

1. 新建项目OneRN
    1. 要求：
     ```
     //最低版本
     minSdkVersion 19
     //目标版本
     targetSdkVersion 26
     // support v7
     implementation 'com.android.support:appcompat-v7:26.1.0'
     //gradle
     classpath 'com.android.tools.build:gradle:3.0.1'
     ```

2. cd项目根目录
    ```
    npm init//生成一系列的配置文件

    然后添加react ，react-native库

    npm install --save react react-native

    //配置.flowconfig，这个是对js代码做约束的，建议配置
    curl -o .flowconfig  https://raw.githubusercontent.com/facebook/react-native/master/.flowconfig

    //添加start到package.json文件,这样我们就可以时时的调用本地调试服务进行热加载了
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node node_modules/react-native/local-cli/cli.js start"
    },

    ```

3. 配置项目依赖
    ```
    //app目录下的build.gradle中：
    dependencies {
        implementation fileTree(dir: 'libs', include: ['*.jar'])
        implementation 'com.android.support:appcompat-v7:26.1.0'
        ...
         // From node_modules.
        api "com.facebook.react:react-native:+"
    }

    //根目录下的build.gradle：
    //官方配置
    allprojects {
        repositories {
            ...
            maven {
                // All of React Native (JS, Android binaries) is installed from npm
                url "$rootDir/../node_modules/react-native/android"
            }
        }
        //...
    }
    // 由于官方的android项目是放在android/目录下，所以他的路径是这样的
    "$rootDir/../node_modules/react-native/android"
    //而我们为了方便AS编译，直接放在项目根目录配置RN的，所以这里的路径要改一下
     url "$rootDir/../node_modules/react-native/android"

     //我们的目录正确配置
    allprojects {
        repositories {
            maven {
                url "$rootDir/node_modules/react-native/android"
            }
            jcenter()
        }
    }

    //为了防止个别机型.so库
     defaultConfig {
           ndk {
                //选择要添加的对应cpu类型的.so库。
                abiFilters 'armeabi', "armeabi-v7a","armeabi-v7a","x86"
            }
        }


    ```
4. manifest添加权限
    ```
    <uses-permission android:name="android.permission.INTERNET"/>
    /**设置调试 的权限**/
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.SYSTEM_OVERLAY_WINDOW" />

    //添加debug模式Activity(正式打包注释掉就好了)
    <activity android:name="com.facebook.react.devsupport.DevSettingsActivity"/>

    ```


5. 添加index.js入口文件
    ```
   import React from 'react';
   import {
       AppRegistry,
       StyleSheet,
       Text,
       View
   } from 'react-native';

   class HelloWorld extends React.Component{

       render(){
           return (
               <View style={styles.container}>
                   <Text style={styles.hello}>HelloWorld React</Text>
               </View>
           );
       }
   }

   var styles = StyleSheet.create({
       container :{
           flex:1,
           justifyContent:'center'
       },
       hello :{
           fontSize:20,
           textAlign:'center',
           margin:10
       }
   });


   AppRegistry.registerComponent('onern',()=> HelloWorld);
    ```

6. 然后就是Android项目中的activity写法了。
7. RN打离线包到Android
    ```
    //由于我们在BaseRnActivity的ReactInstanceManager中setBundleAssetName(“index.android.bundle”)了android离线包，
    //所以在运行之前我们app之前先打个离线包JSBundle到android项目中。
    //首先在项目app/src/main下面必须要创建一个assets目录，然后我们就开始打离线包啦：

    //注意路径
    react-native bundle --platform android --dev false --entry-file index.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest app/src/main/res/

    # 控制台这样输出的话 ，表示打包成功
    Loading dependency graph, done.
    bundle: start
    bundle: finish
    bundle: Writing bundle output to: app/src/main/assets/index.android.bundle
    bundle: Done writing bundle output



    ```

8. 运行Android
    ```
    //由于我们是已有项目集成RN,
    //所以我们就不可以使用命令react-native run-android了。没关系我们手动编译呗。

    //先开启本地react native服务
    adb reverse tcp:8081 tcp:8081
    npm start

    ```
