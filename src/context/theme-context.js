import Taro from '@tarojs/taro';
import { themeColor } from '@/config';

const ThemeContext = Taro.createContext({ themeColor });

export default ThemeContext;
