import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtGrid, AtAvatar, AtList, AtListItem, AtModal, AtModalContent } from 'taro-ui';
import 'taro-ui/dist/style/components/grid.scss';
import 'taro-ui/dist/style/components/list.scss';
import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/avatar.scss';
import './index.less';

import 'taro-ui/dist/style/components/modal.scss';

import Auth from '@/components/auth';
import AuthContext from '@/context/authContext';

export default class List extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  static contextType = AuthContext;

  config = {
    navigationBarTitleText: '我的',
    backgroundColor: '#ffffff',
    navigationStyle: 'custom'
  };

  concat() {
    Taro.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    });
  }

  navigateTo(url) {
    const { auth } = this.context;
    auth({
      success() {
        Taro.navigateTo({ url });
      }
    });
  }

  render() {
    return (
      <Auth>
        <View className="mine">
          <View className="banner">
            <AtAvatar circle text="Mamba"></AtAvatar>
            <Text className="name">MambaTeam</Text>
            <Image className="wave" src="../../../assets/images/wave.gif" />
          </View>
          <View className="shadow-warp">
            <AtGrid
              hasBorder={false}
              data={[
                {
                  image:
                    'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                  value: '领卷中心'
                },
                {
                  image:
                    'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                  value: '积分商城'
                },
                {
                  image:
                    'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                  value: '领会员'
                }
              ]}
            />
          </View>
          <View className="menu-list">
            <AtList>
              <AtListItem
                title="我的优惠卷"
                arrow="right"
                onClick={() => this.navigateTo('/pages/mine/about/index')}
              />
              <AtListItem
                title="我的收藏"
                arrow="right"
                onClick={() => this.navigateTo('/pages/mine/about/index')}
              />
              <AtListItem
                title="附近店铺"
                arrow="right"
                onClick={() => this.navigateTo('/pages/mine/about/index')}
              />
              <AtListItem title="联系我们" arrow="right" onClick={this.concat} />
            </AtList>
          </View>
        </View>
      </Auth>
    );
  }
}
