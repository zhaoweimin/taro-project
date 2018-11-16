import Taro, { Component } from '@tarojs/taro'
import { SwiperItem, View, Swiper, Image } from '@tarojs/components'

export default class Banner extends Component {

  // 添加一个类构造函数来初始化状态 this.state：
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const SwiperItems = this.state.data.map((post, i) => {
      return <SwiperItem className='item' key={i}>
        <View>
          <Image className='image' src={post} mode='widthFix'></Image> 
        </View>
      </SwiperItem>
    })
    return (
      <Swiper
        className='swiper-banner'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        { SwiperItems }
      </Swiper>  
    )
  }
}
