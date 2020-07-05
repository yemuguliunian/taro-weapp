import Taro, { Component } from '@tarojs/taro';
import { Block, Map, View, Text } from '@tarojs/components';
import './index.less';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      latitude: ''
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    const self = this;
    Taro.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation']) {
          // 已授权
          // TODO
          this.getLocation();
        } else if (res.authSetting['scope.userLocation'] === false) {
          // 拒绝授权
          Taro.showModal({
            title: '无法获取当前位置',
            content: '你的位置信息将用于小程序位置接口的效果展示，请手动开启授权',
            success: function (res) {
              if (res.confirm) {
                Taro.openSetting({
                  success: function (res) {
                    if (res.authSetting['scope.userLocation']) {
                      console.log('打开设置授权定位');
                      // TODO
                    }
                  }
                });
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        } else if (res.authSetting['scope.userLocation'] === undefined) {
          // 初次授权
          self.getLocation();
        }
      }
    });
  }

  componentDidHide() {}

  config = {
    navigationBarTitleText: '附近店铺'
  };

  getLocation() {
    const self = this;
    Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        // TODO
        console.log(res);
        const { longitude, latitude } = res;
        self.setState({
          longitude,
          latitude
        });
      }
    });
  }

  render() {
    const { longitude, latitude } = this.state;

    return (
      <Block>
        <View className="info">111</View>
        <Map className="about-map" longitude={longitude} latitude={latitude} />
      </Block>
    );
  }
}
