import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';

export default class About extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '附近店铺'
  };

  render() {
    return (
      <View className="about">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
