import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Banner } from '../../template/banner'
import api from '../../service/api'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    this.state = {
      imageList: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4201594846,4178139206&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542191482323&di=cc53bd333c872b1070c0361c3741b282&imgtype=0&src=http%3A%2F%2Fpic43.photophoto.cn%2F20170525%2F0011034459782222_b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542191504548&di=1dedb38e47e40ddafad272f32885540d&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160721%2F1155116361608498_b.jpg'
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () {
    let params = {
      page_no: 1,
      page_size: 2
    }
    api.getList(params).then(res => {
      console.log(res)
    })
  }

  componentWillUnmount () {
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    
    return (
      <View className='index'>
        <Banner data={this.state.imageList}></Banner>  
      </View>
    )
  }
}

