import { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less';

export default class List extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '列表页'
  };

  render() {
    return (
      <View className="list">
        <Text>列表页</Text>
      </View>
    );
  }
}
