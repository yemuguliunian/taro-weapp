import { View, Text, Icon } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import 'taro-ui/dist/style/components/icon.scss';
import './index.less';

function Cell(props) {
  const { title, value = '更多', click } = props;
  return (
    <View className="mam-cell">
      <Text className="mam-cell__title">{title}</Text>
      <Text className="mam-cell__value">{value}</Text>
      <View className="at-icon at-icon-chevron-right mam-cell__right-icon" onClick={click} />
    </View>
  );
}

export default Cell;
