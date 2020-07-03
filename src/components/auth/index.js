/**
 * 鉴权。未登录则弹出登录模态框
 */
import Taro, { useState } from '@tarojs/taro';
import { Block } from '@tarojs/components';
import Login from '@/components/login';

import AuthContext from '@/context/authContext';

function Auth(props) {
  const [isOpened, setOpened] = useState(false);

  const auth = ({ success }) => {
    if (Taro.getStorageSync('auth')) {
      if (success) {
        success();
      }
    } else {
      // 未登录则提示用户登录
      setOpened(true);
    }
  };

  const getUserInfo = (res) => {
    const { userInfo } = res.detail;
    if (userInfo) {
      // 授权成功 TODO
      Taro.setStorageSync('auth', userInfo);
      setOpened(false);
    } else {
      // TODO
    }
  };

  return (
    <AuthContext.Provider value={{ auth }}>
      <Block>
        {props.children}
        <Login isOpened={isOpened} onClose={() => setOpened(false)} onGetUserInfo={getUserInfo} />
      </Block>
    </AuthContext.Provider>
  );
}

export default Auth;
