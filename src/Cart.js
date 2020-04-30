import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import TextInput from 'react-native-textinput-with-icons'
import { Text, View, TouchableOpacity, Dimensions, Image,ActivityIndicator ,ScrollView, AsyncStorage, Alert, Picker, SafeAreaView } from 'react-native'
import { CustomHeader } from './index'
import InputTextField from "../components/InputTextField"
var { width, height } = Dimensions.get("window")
var cart = []
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      user_id: "",
      name: '',
      phone: '',
      address: '',
      email: '',
      disabled: false,
      err_email: "",
      err_phone: "",
      err_address: "",
      err_name: "",
      payment_method: '',
      err_payment_method: "",
      wait_for_process:"Thanh Toán",
      wait_for_reloading:true
    };
    try {
      const val = AsyncStorage.multiGet(["id_user", "email", "name", 'avatar']).then(result => {

        this.setState({
          user_id: result[0][1],
        })
      })
    } catch (error) {
      console.log(error)
    }

  }
  componentDidMount() {

    AsyncStorage.getItem('cart').then((cart) => {
      console.log(cart)
      if (cart !== null) {
        // We have data!!
        const cartfood = JSON.parse(cart)
        this.setState({ 
          dataCart: cartfood,
          wait_for_reloading:false
        })

      }
    })
      .catch((err) => {
        // alert(err)
      })

  }
  submit_order() {
    // this.setState({
    //   wait_for_process:"Đang chờ xử lí"
    // })
    this.setState({
      disabled: true,
      wait_for_process:"Đang chờ xử lí"
    })
    setTimeout(() => {
      this.setState({
        disabled: false,
      })
    }, 2000)
    var total_price = 0
    this.state.dataCart.map((item, index) => {
      total_price += item.quantity * item.price

    })
    fetch('https://smartbuy01.gq/api/orders/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',

      },

      body: JSON.stringify({
        payment_method: this.state.payment_method,
        customer_phone: this.state.phone,
        customer_email: this.state.email,
        customer_address: this.state.address,
        customer_name: this.state.name,
        total_price: total_price,

      })
    }
    ).then((res) => res.json()).then((res) => {
     
      this.setState({
        err_address: res.customer_address,
        err_name: res.customer_name,
        err_phone: res.customer_phone,
        err_email: res.customer_email,
        err_payment_method: res.payment_method,
        wait_for_process:"Thanh Toán"
      })
      if (res.msg == 'success') {
        this.setState({
          wait_for_process:"Đang chờ xử lí"
        })
        Alert.alert("Thông báo", "Đặt Hàng Thành Công")
        var total_quantity = 0
        var pro_id = ''
        var unit_price = 0
        this.state.dataCart.map((item, index) => {
          total_quantity = item.quantity
          unit_price = item.price
          pro_id = item.proID
          fetch('https://smartbuy01.gq/api/orders/add-detail', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
            },

            body: JSON.stringify({
              id_user: this.state.user_id,
              product_id: pro_id,
              quantity: total_quantity,
              unit_price: unit_price,
            })

          }).then((res) => res.json()).then((res01) => {
            if (res01.msg == 'ok') {
              fetch('https://smartbuy01.gq/api/orders/send-email').
              then((resEmail) => resEmail.json()).then((resEmail) => {
                  if(resEmail.result=='ok'){
                    console.log('Gửi email thành công')
                  }
              })
              setTimeout(() => {
                AsyncStorage.removeItem('cart')
                this.setState({
                  disabled: false,
                  dataCart: ''
                })
              }, 1000)

            }
          })
        })
      }
    })


  }

  confirm_del = () => {

    Alert.alert("Thông báo!", "Bạn có muốn xóa toàn bộ giỏ hàng không?",
      [

        { text: 'Cancel' },
        {
          text: 'OK', onPress: this.del_cart

        }
      ],
      { cancelable: false })
  }
  del_cart = () => {

    AsyncStorage.removeItem('cart')
    this.setState({
      dataCart: ''
    })




  }

  render() {
   
    if (this.state.dataCart == '' || this.state.dataCart == null) {
      return (
        <SafeAreaView style={{ flex: 1, }}>
          
          <View style={{ flex: 1, }}>
            <CustomHeader title="Cart" isHome={false} navigation={this.props.navigation} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
            {this.state.wait_for_reloading ? 
              <ActivityIndicator animating={true} style={{marginTop:50}} size={50} color="#61dafb"> 
              </ActivityIndicator> 
              :
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:20 }}>
                <Image source={require('./images/shopping-bag.png')}/>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>Bạn chưa có sản phẩm nào trong giỏ hàng</Text>
              </View>
            }
            </ScrollView>
          </View>
      
        </SafeAreaView>
      )
    }
    else {
      let { name, address, phone, email } = this.state
      return (
        <SafeAreaView style={{ flex: 1, }}>
          
          <View style={{ flex: 1, }}>
            {/* <CustomHeader title="Cart" isHome={false} navigation={this.props.navigation} /> */}
            <View style={{ marginLeft: 10, marginTop: 10, flexDirection:'row'}}>
                <TouchableOpacity
                   onPress={() => this.props.navigation.goBack()}>
                  <Text style={{ fontSize: 16, color: 'red' }}><FontAwesome5 name={'arrow-left'} size={25}></FontAwesome5></Text>
                </TouchableOpacity>
                <TouchableOpacity
                   onPress={() => this.confirm_del()}  style={{marginLeft:"80%" }}>
                  <Text style={{ fontSize: 16, color: 'red',}}><FontAwesome5 name={'trash-restore'} size={25}></FontAwesome5></Text>
                </TouchableOpacity>
              </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,marginBottom:10 }}>

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.dataCart.map((item, i) => {
                  return (
                    <View style={{ flex: 1 }}>

                      <View style={{
                        width: width - 20, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc",
                        paddingBottom: 10
                      }}>
                        <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 4 }} source={{ uri: item.image }} />
                        <View style={{ flex: 1, backgroundColor: 'transparent', padding: 10, justifyContent: "space-between" }}>
                          <View>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.productName}</Text>

                          </View>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontWeight: 'bold', color: "#33c37d", fontSize: 20 }}>{item.price * item.quantity} VNĐ</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <TouchableOpacity onPress={() => this.onChangeQual(i, false)}>
                                <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
                              </TouchableOpacity>
                              <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>{item.quantity}</Text>
                              <TouchableOpacity onPress={() => this.onChangeQual(i, true)}>
                                <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })

                }


                <View style={{ height: 20 }} />
                <Text style={{ fontSize: 28, color: "#9fd236" }}>{this.LoadTotalPrice()} VNĐ</Text>
                <View style={{ alignItems: 'center' }}>

                  <TextInput
                    label="Nhập địa chỉ nhận hàng"
                    leftIcon="location"
                    leftIconType="oct"
                    rippleColor="blue"

                    rightIconType="material"
                    value={address}
                    refrance={(refrance) => {
                      this.input = refrance;
                    }}
                    onChangeText={address => this.setState({ address })}
                  />
                  <View style={{ alignItems: "flex-start", width: width - 65 }}>
                    <Text style={{ color: "red" }}>{this.state.err_address}</Text>
                  </View>
                  <TextInput
                    label="Nhập họ tên"
                    leftIcon="person"
                    leftIconType="oct"
                    rippleColor="blue"

                    rightIconType="material"
                    value={name}
                    refrance={(refrance) => {
                      this.input = refrance;
                    }}
                    onChangeText={name => this.setState({ name })}
                  />
                  <View style={{ alignItems: "flex-start", width: width - 65 }}>
                    <Text style={{ color: "red" }}>{this.state.err_name}</Text>
                  </View>
                  <TextInput
                    label="Nhập địa chỉ email"
                    leftIcon="mail"
                    leftIconType="oct"
                    rippleColor="blue"

                    rightIconType="material"
                    value={email}
                    refrance={(refrance) => {
                      this.input = refrance;
                    }}
                    onChangeText={email => this.setState({ email })}
                  />
                  <View style={{ alignItems: "flex-start", width: width - 65 }}>
                    <Text style={{ color: "red" }}>{this.state.err_email}</Text>
                  </View>
                  <TextInput
                    label="Nhập số điện thoại"
                    leftIcon="device-mobile"
                    leftIconType="oct"
                    rippleColor="blue"

                    rightIconType="material"
                    value={phone}
                    refrance={(refrance) => {
                      this.input = refrance;
                    }}
                    onChangeText={phone => this.setState({ phone })}
                  />
                  <View style={{ alignItems: "flex-start", width: width - 65 }}>
                    <Text style={{ color: "red" }}>{this.state.err_phone}</Text>
                  </View>
                  <View style={{ alignItems: "flex-start", width: width - 65 }}>
                    <Picker
                      enabled={true}
                      mode={'dialog'}
                      selectedValue={this.state.payment_method}
                      style={{ height: 50, width: width - 65, color: "#696868" }}

                      onValueChange={(itemValue, itemIndex) => this.setState({ payment_method: itemValue })}
                    >
                      <Picker.Item label="Chọn Phương Thức Thanh Toán" value=""/>
                      <Picker.Item label="Chuyển Khoản Ngân Hàng" value="1" />
                      <Picker.Item label="COD" value="2" />
                      <Picker.Item label="VISA/MASTER CARD" value="3" />
                      <Picker.Item label="Tiền mặt" value="4" />
                    </Picker>
                    <Text style={{ color: "red" }}>{this.state.err_payment_method}</Text>
                  </View>
                  

                  <TouchableOpacity disabled={this.state.disabled} onPress={() => this.submit_order()} style={this.state.dataCart == '' ? { display: "none" } :
                    {
                      backgroundColor: "#9fd236",
                      width: width - 40,
                      alignItems: 'center',
                      marginBottom: 20,
                      marginTop: 10,
                      padding: 10,
                      borderRadius: 5,
                      marginTop: -50
                    }}>
                    <Text style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: 'white'
                    }}>
                      {this.state.wait_for_process}
                    </Text>
                  </TouchableOpacity>

                </View>

                <View style={{ height: 20 }} />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>

      )
    }
  }
  LoadTotalPrice() {
    var total = 0
    const dataCar = this.state.dataCart
    dataCar.forEach((item) => {
      total += item.quantity * item.price
    })

    return total
  }
  onChangeQual(i, type) {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {

      if (dataCar[i].quantity >= 10) {
        Alert.alert("Thông báo!", "Giới hạn đặt hàng tối đa cho mỗi sản phẩm là 10")
      }
      else {
        cantd = cantd + 1
        dataCar[i].quantity = cantd
      }
      this.setState({ dataCart: dataCar })
      AsyncStorage.setItem('cart', JSON.stringify(dataCar));
    }
    else if (type == false && cantd >= 2) {
      cantd = cantd - 1
      dataCar[i].quantity = cantd
      this.setState({ dataCart: dataCar })
    }
    else if (type == false && cantd == 1) {
      dataCar.splice(i, 1)
      console.log(this.state.dataCart)
      this.setState({ dataCart: dataCar })
      AsyncStorage.setItem('cart', JSON.stringify(this.state.dataCart))
    }
  }
}