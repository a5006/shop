import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import './home.styl';
class Home extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      searchContent: ""
    };
  }
  render() {
    return <View>
      <AtSearchBar value={this.state.searchContent} onChange={this.handleChange} onActionClick={this.onActionClick} />
    
     <View className="view">
        <Swiper className="swiper" indicatorColor="#fff" indicatorActiveColor="#FFC701" circular indicatorDots>
          <SwiperItem>
            <View className="swiper_content">
              <Image mode="aspectFit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583490987983&di=1b04925d556ee20fb3f610963dee4f0f&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F59%2F62%2F89%2F29376002_E596289_dd65019h.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg" />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper_content">
              <Image mode="aspectFit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583490987983&di=1b04925d556ee20fb3f610963dee4f0f&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F59%2F62%2F89%2F29376002_E596289_dd65019h.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg" />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="swiper_content">
              <Image mode="aspectFit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583490987983&di=1b04925d556ee20fb3f610963dee4f0f&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F59%2F62%2F89%2F29376002_E596289_dd65019h.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg" />
            </View>
          </SwiperItem>
        </Swiper>
     </View>
    </View>;
  }
  handleChange = val => {
    this.setState({
      searchContent: val
    });
  };
  onActionClick = () => {
    console.log(this.state.searchContent);
    this.setState({
      ifShowBtn: false
    });
  };
  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
export default Home;