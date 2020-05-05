import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  AsyncStorage,
  Alert,
  Picker,
  SafeAreaView
} from 'react-native'
import { CustomHeader } from '../index'
var { width, height } = Dimensions.get("window")
var cart = []
var STT_payment = [
  {
    value: "1",
    method: 'Chuyển Khoản Ngân Hàng'
  },
  {
    value: "2",
    method: 'COD'
  },
  {
    value: "3",
    method: 'VISA/MASTER CARD'
  },
  {
    value: "4",
    method: 'Tiền mặt'
  }
]
export class DetailHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

  }
  render() {
    const { item } = this.props.route.params
    fetch('https://smartbuy01.gq/api/history/history-detail/' + item.id).
      then((res) => res.json()).then((res) => {
        this.setState({
          data: res.result
        })
        console.log(this.state.data)
      })
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View style={{ flex: 1, }}>
          <CustomHeader title="Chi Tiết Đơn Hàng" isHome={false} navigation={this.props.navigation} />
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <View style={{ flex: 1 }}>
                <View style={{
                  backgroundColor: 'transparent', borderBottomWidth: 2, borderColor: "#cccccc",
                  paddingBottom: 10
                }}>
                  <Text style={{ fontSize: 16 }}>Số điện thoại: {item.customer_phone}</Text>
                  <Text style={{ fontSize: 16 }}>Địa chỉ nhận hàng: {item.customer_address}</Text>
                  <Text style={{ fontSize: 16 }}>Email: {item.customer_email}</Text>
                  {STT_payment.map((stt) => {
                    if (item.payment_method == stt.value) {
                      return (
                        <Text style={{ fontSize: 16 }}>Phương thức thanh toán: {stt.method}
                        </Text>
                      )
                    }
                  })
                  }
                </View>
                <View>
                  <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: "bold" }}>Thông tin sản phẩm</Text>
                </View>
                {this.state.data.map((item) => {
                  return (
                    <View style={{
                      width: width - 20, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc",
                      paddingBottom: 10
                    }}>
                      <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 4 }} source={{ uri: item.image }} />
                      <View style={{ flex: 1, backgroundColor: 'transparent', padding: 10, justifyContent: "space-between" }}>
                        <View>
                          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                          <Text style={{ fontWeight: 'bold', color: "#33c37d", fontSize: 20 }}>{item.unit_price} VNĐ</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>
                              {item.quantity}

                            </Text>

                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })

                }
              </View>



              <View style={{ height: 20 }} />

              <View style={{ height: 20 }} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
