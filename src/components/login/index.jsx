/**
 * 登录界面
 * 这边使用 hooks 处理
 */
import { AtModal, AtModalContent } from 'taro-ui';
import { View, Text, Button } from '@tarojs/components';
import './index.less';
import 'taro-ui/dist/style/components/modal.scss';

const Login = (props) => {
  const { isOpened, onClose, onGetUserInfo } = props;

  return (
    <AtModal isOpened={isOpened} onClose={onClose}>
      <AtModalContent>
        <View className="login-wrap">
          <Text className="login-title">您还未登录</Text>
          <Text className="login-title sub">请先登录再进行操作</Text>
          <Button type="primary" open-type="getUserInfo" onGetUserInfo={onGetUserInfo}>
            微信登录
          </Button>
          <Button onClick={onClose}>暂不登录</Button>
        </View>
      </AtModalContent>
    </AtModal>
  );
};

export default Login;
