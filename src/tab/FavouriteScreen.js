import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  SafeAreaView,
  AsyncStorage,
  RefreshControl
} from 'react-native'
import { CustomHeader } from '../index'
import { IMAGE } from '../constants/Image'
import { Icon, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
var cart = []
export class FavouriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: '',
      user_id: null,
      product_id: '',
      loading: false

    };

  }
  componentDidMount() {

    try {
      const val = AsyncStorage.multiGet(["id_user", "email", "name", 'avatar']).then(result => {
        this.setState({
          user_id: result[0][1],
          email: result[1][1],
          name: result[2][1],
          avatar: result[3][1],

        })
        fetch('https://smartbuy01.gq/api/favourites/favourite-by-userid/' + result[0][1]).
          then((res) => res.json()).then((res) => {
            this.setState({
              data: res.result
            })
          })

      })
    } catch (error) {
      console.log(error)
    }

  }
  PulltoRefresh = () => {
    this.setState({
      loading: true
    })
    fetch('https://smartbuy01.gq/api/favourites/favourite-by-userid/' + this.state.user_id).
      then((res) => res.json()).then((res) => {

        this.setState({
          data: res.result,
          loading: false
        })
      })

  }
  clickEventListener(data) {

    var itemcart = {
      proID: data.id,
      productName: data.name,
      price: data.price,
      image: data.image
    }
    console.log(itemcart.proID)
    console.log(cart)
    var flag = false
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].proID == itemcart.proID) {
        flag = true

        break
      }
    }
    console.log(flag)
    if (flag === false) {
      // We have data!!
      itemcart.quantity = 1
      // const cart = JSON.parse(datacart)
      cart.push(itemcart)
      console.log(itemcart)
      AsyncStorage.setItem('cart', JSON.stringify(cart));
      Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng")
    }
    else {
      if (cart[i].quantity >= 10) {
        alert('Bạn chỉ được thêm tối đa 10 sản phẩm')
      } else {
        cart[i].quantity += 1
        console.log(itemcart)
        // cart.push(itemcart)
        AsyncStorage.setItem('cart', JSON.stringify(cart));
        Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng")
      }

    }

  }
  _AlertDelete = (item) => {
    this.setState({
      product_id: item.id
    })
    Alert.alert("Thông báo!", "Bạn có muốn xóa sản phẩm này khỏi danh sách yêu thích không?",
      [

        { text: 'Cancel' },
        {
          text: 'OK', onPress: this.delete

        }
      ],
      { cancelable: false })

  }
  delete = () => {
    const val = AsyncStorage.multiGet(["id_user", "email", "name", 'avatar']).then(result => {
      this.setState({
        user_id: result[0][1],
        email: result[1][1],
        name: result[2][1],
        avatar: result[3][1],

      })
      fetch('https://smartbuy01.gq/api/favourites/delete/' + result[0][1] + '/product/' + this.state.product_id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',

        }
      }
      ).then((res) => res.json()).then((res) => {
        console.log(res)
        if (res.msg == 'ok') {
          fetch('https://smartbuy01.gq/api/favourites/favourite-by-userid/' + result[0][1])
            .then((list_favourite) => list_favourite.json())
            .then((list_favourite) => {
              console.log(list_favourite)
              this.setState({
                data: list_favourite.result,
              })
            })
            .catch((error) => {
              console.error(error);
            })

        }
      })

    })

  }
  render() {
    let { navigation, isHome, title } = this.props
    return (

      <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title="Yêu thích" navigation={this.props.navigation} />
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={this.PulltoRefresh}
              refreshing={this.state.loading}
            />
          }>
          <View style={styles.container}>
            <FlatList
              style={styles.contentList}
              columnWrapperStyle={styles.listContainer}
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate('HomeDetail', { product: item }) }}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.cardContent}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.count}>{item.price} VNĐ</Text>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.followButton} onPress={() => this.clickEventListener(item)}>
                          <Text style={styles.followButtonText}>Add to cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.followButton} onPress={() => this._AlertDelete(item)}>
                          <Text style={styles.followButtonText}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }} />
          </View>
        </ScrollView>
      </SafeAreaView>



    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "#ebf0f7",

  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 5,
    width: 200
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7"
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,

    color: "#3399ff",
    fontWeight: 'bold'
  },
  count: {
    fontSize: 14,
    flex: 1,

    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 90,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#FF5757",
    fontSize: 12,
  },
});












    // import React, { Component } from 'react'
    // import { View, Text } from 'react-native'

    // import CustomHeader from '../CustomHeader';


    // export class FavouriteScreen extends Component {
    //     render() {
    //         return (

    //             <View>
    //                 <CustomHeader title="Favourite" isHome={true} navigation={this.props.navigation} />
    //                 <Text>
    //                     FavouriteScreen!
    //                 </Text>
    //             </View>
    //         );
    //     }