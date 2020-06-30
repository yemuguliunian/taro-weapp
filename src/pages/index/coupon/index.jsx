import { View, ScrollView, Icon, Text } from '@tarojs/components';
import './index.less';

function Coupon(props) {
  const { data } = props;

  return (
    <ScrollView scrollX>
      <View className="coupon-container">
        <View className="coupon-wrapper">
          <View className="coupon-item">
            <View className="coupon">
              <View className="coupon-left">
                <Text className="coupon-left__price">20</Text>
                <Text className="coupon-left__remark">满100元使用</Text>
              </View>
              <View className="coupon-right">
                <Text>立即领取</Text>
              </View>
              <Icon />
            </View>
          </View>
          <View className="coupon-item">
            <View className="coupon">
              <View className="coupon-left">
                <Text className="coupon-left__price">20</Text>
                <Text className="coupon-left__remark">满100元使用</Text>
              </View>
              <View className="coupon-right">
                <Text>立即领取</Text>
              </View>
              <Icon />
            </View>
          </View>
          <View className="coupon-item">
            <View className="coupon">
              <View className="coupon-left">
                <Text className="coupon-left__price">20</Text>
                <Text className="coupon-left__remark">满100元使用</Text>
              </View>
              <View className="coupon-right">
                <Text>立即领取</Text>
              </View>
              <Icon />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
