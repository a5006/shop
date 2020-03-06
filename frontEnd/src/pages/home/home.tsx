
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem,Image } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './home.styl'

interface State {
  searchContent: string,
}
class Home extends Component {
  handleChange = (val: String): void => {
    this.setState({
      searchContent:val
    })
  }
  onActionClick = (): void => {
    console.log(this.state.searchContent)
    this.setState({
      ifShowBtn:false
    })
  }

  state: State = {
    searchContent: "",

  }

  config: Config = {
    navigationBarTitleText: '首页'
  }
  render() {
    return <View>
      <AtSearchBar
        value={this.state.searchContent}
        onChange={this.handleChange}
        onActionClick={this.onActionClick}
      />
    {/* 轮播图 */}
     <View className="view">
        <Swiper
          className='swiper'
          indicatorColor='#fff'
          indicatorActiveColor='#FFC701'
          circular
          indicatorDots
        >
          <SwiperItem>
            <View className='swiper_content'>
              <Image mode="aspectFit" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583490987983&di=1b04925d556ee20fb3f610963dee4f0f&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F59%2F62%2F89%2F29376002_E596289_dd65019h.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper_content'>
              <Image mode="aspectFit" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583490987983&di=1b04925d556ee20fb3f610963dee4f0f&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F59%2F62%2F89%2F29376002_E596289_dd65019h.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper_content'>
              <Image mode="aspectFit" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583490987983&di=1b04925d556ee20fb3f610963dee4f0f&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F59%2F62%2F89%2F29376002_E596289_dd65019h.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg' />
            </View>
          </SwiperItem>
        </Swiper>
     </View>
    </View>
  }
}
export default Home