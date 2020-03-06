import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Button, Text } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import { AtButton } from 'taro-ui';
import { minus, asyncAdd } from '../../actions/counter';
import './index.styl';
let Index = class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    /**
    * 指定config的类型声明为: Taro.Config
    *
    * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
    * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
    * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
    */
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
        <AtButton type="primary">123</AtButton>
        <Button className="add_btn" onClick={this.props.add}>+</Button>
        <Button className="dec_btn" onClick={this.props.dec}>-</Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

};
Index = __decorate([connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))], Index);
function add(a, b) {
  a = a.toString().split("");
  b = b.toString().split("");
  if (a.length > b.length) {
    b = b.reverse();
    while (a.length != b.length) {
      b = b + "0";
    }
    b = b.reverse();
  } else if (a.length < b.length) {
    a = a.reverse();
    while (a.length != b.length) {
      a = a + "0";
    }
    a = a.reverse();
  }
  console.log(a, b);
}
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
export default Index;