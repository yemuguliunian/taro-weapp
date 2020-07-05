import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import dva from '@/utils/dva';
import models from '@/models';
import './app.less';

import Index from '@/pages/index';

import ThemeContext from '@/context/themeContext';

// 注册 dva
const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();

class App extends Component {
  // 全局配置
  config = {
    pages: [
      'pages/index/index',
      'pages/mall/index',
      'pages/cart/index',
      'pages/mine/home/index',
      'pages/mine/about/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333333',
      selectedColor: '#172991',
      // borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'assets/images/icon/tabBar/index.png',
          selectedIconPath: 'assets/images/icon/tabBar/index-selected.png'
        },
        {
          pagePath: 'pages/mall/index',
          text: '商城',
          iconPath: 'assets/images/icon/tabBar/mall.png',
          selectedIconPath: 'assets/images/icon/tabBar/mall-selected.png'
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: 'assets/images/icon/tabBar/cart.png',
          selectedIconPath: 'assets/images/icon/tabBar/cart-selected.png'
        },
        {
          pagePath: 'pages/mine/home/index',
          text: '我的',
          iconPath: 'assets/images/icon/tabBar/mine.png',
          selectedIconPath: 'assets/images/icon/tabBar/mine-selected.png'
        }
      ]
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    }
  };

  render() {
    return (
      <ThemeContext.Provider>
        <Provider store={store}>
          <Index />
        </Provider>
      </ThemeContext.Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
