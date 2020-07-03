import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import Cell from '@/components/cell';
import Coupon from './coupon';

import { connect } from '@tarojs/redux';
import ThemeContext from '@/context/themeContext';

import './index.less';
import 'taro-ui/dist/style/components/flex.scss';

class Index extends Component {
  componentWillMount() {
    const { bottom } = Taro.getMenuButtonBoundingClientRect();
    this.swiperTop = bottom + 10;
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页',
    backgroundColor: '#ffffff',
    navigationStyle: 'custom'
  };

  navigateTo() {
    Taro.navigateTo({
      url: '/pages/list/index'
    });
  }

  static contextType = ThemeContext;

  render() {
    const { themeColor } = this.context;

    return (
      <View className="index">
        <View style={{ height: `${this.swiperTop + 150}px` }}>
          <View className="banner"></View>
          {/* 轮播图 */}
          <View className="index__swiper" style={{ top: `${this.swiperTop}px` }}>
            <Swiper
              indicatorDots
              indicatorColor="#999"
              indicatorActiveColor={themeColor}
              circular
              autoplay
            >
              <SwiperItem>
                <Image
                  className="swiper-img"
                  mode="aspectFill"
                  src="http://img1.imgtn.bdimg.com/it/u=303424482,4174188653&fm=26&gp=0.jpg"
                />
              </SwiperItem>
              <SwiperItem>
                <Image
                  className="swiper-img"
                  mode="aspectFill"
                  src="http://img2.imgtn.bdimg.com/it/u=1860599421,289389611&fm=26&gp=0.jpg"
                />
              </SwiperItem>
              <SwiperItem>
                <Image
                  className="swiper-img"
                  mode="aspectFill"
                  src="http://img2.imgtn.bdimg.com/it/u=1720489700,3092803210&fm=26&gp=0.jpg"
                />
              </SwiperItem>
            </Swiper>
          </View>
        </View>
        <Coupon />
        <Cell title="人气单品" />
        <View className="panel-content">
          <View className="at-row at-row--wrap ">
            {[...Array(4)].map((item, index) => {
              return (
                <View className="at-col at-col-6 commodity-item" key={index}>
                  <View className="good">
                    <Image
                      className="good__cover"
                      mode="aspectFill"
                      src="http://img2.imgtn.bdimg.com/it/u=1720489700,3092803210&fm=26&gp=0.jpg"
                    />
                    <View className="good__content">
                      <View className="good__title">泡芙蛋糕</View>
                      <View className="good__value">
                        <Text className="good__value--price">200</Text>
                        <Text className="good__value--right">已售200个</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ index }) => {
  return {
    index
  };
};

export default connect(mapStateToProps)(Index);
