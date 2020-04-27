import React, { Component } from 'react'
import {
  Text, View, SafeAreaView, TouchableOpacity,
  StyleSheet, Image, ScrollView, ImageBackground, AsyncStorage,
  Dimensions, Button, RefreshControl, TextInput, TouchableHighlight, Alert
}
  from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { CustomHeader } from '../index'
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { SearchBar } from 'react-native-elements';
import global from './global'
import CustomDrawerContent from '../CustomDrawerContent'
// import Swiper from 'react-native-swiper'
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
var { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;
export class HomeScreen extends Component {

  //**Sản phẩm ưa thích  */


  constructor(props) {
    super(props);
    this.state = {
      //api
      loading: false,
      products: [],
      sliders: [],
      categories: [],
      selectCate: "",
      search: '',
      user_id: '',
      name: '',
      email: '',
      password: '',
      avatar: "",
      quantity: null,
      total: null,
      quantity: 0,
      //end api
      data: [
        //data-fake
        { id: 1, title: "Product 1", price: "$ 25.00 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 2, title: "Product 2", price: "$ 10.13 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 3, title: "Product 3", price: "$ 12.12 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 4, title: "Product 4", price: "$ 11.00 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 5, title: "Product 5", price: "$ 20.00 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 6, title: "Product 6", price: "$ 33.00 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 7, title: "Product 7", price: "$ 20.95 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 8, title: "Product 8", price: "$ 13.60 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 9, title: "Product 9", price: "$ 15.30 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
        { id: 9, title: "Product 10", price: "$ 21.30 USD", image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Michael-VO200-TC-Box-Mod-chinh-hang-5.jpg" },
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }




  //**--------------------------------------------------------------------- */



  // constructor(props){
  //     super(props);
  //     this.state ={ 
  //       loading:false,
  //       products:[],
  //       sliders:[],
  //       categories:[],
  //       selectCate:"",
  //       search: '',
  //       user_id:'',
  //       name:'',
  //       email:'',
  //       password:'',
  //       avatar:"",
  //       quantity:null,
  //       total:null,
  //       quantity:0
  //     }
  // }

  componentDidMount() {
    Promise.all([fetch('https://smartbuy01.gq/api/slider'), fetch('https://smartbuy01.gq/api/products'), fetch('https://smartbuy01.gq/api/categories')])
      .then(([req1, req2, req3]) => {
        return Promise.all([req1.json(), req2.json(), req3.json()])
      })
      .then(([req001, req002, req003]) => {
        this.setState({

          sliders: req001,
          products: req002,
          categories: req003

        })
        console.log(this.state.categories.category)
      })
      .catch((error) => {
        console.error(error);
      });

  }

  renderPro(item) {

    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
        <View style={styles.container1}>
          <Image style={styles.photo} source={{ uri: item.image }} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.category}>{item.price} VNĐ</Text>
        </View>
      </TouchableOpacity>

      // <TouchableOpacity style={styles.divListProduct} onPress={()=>this.props.navigation.navigate('HomeDetail',{product:item})}>
      //     <Image
      //         style={styles.imageProduct}
      //         resizeMode="contain"
      //         source={{uri:item.image}} />
      //         <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
      //         <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>
      //         {item.name}
      //         </Text>
      //         <Text>Descp Food and Details</Text>
      //         <Text style={{fontSize:20,color:"green"}}>{item.price}</Text>
      // </TouchableOpacity>

    )



  }
  renderCate(item) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CategoryDetail', { category: item })}>
        <View style={this.state.selectCate == item.id ? styles.divtheme : styles.divtheme2}>

          <Text>{item.cate_name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderSlide(item) {
    return (
      <View>
        <TouchableOpacity style={{ borderRadius: 15, shadowOpacity: 0.3, alignItems: 'center', justifyContent: "center", position: 'relative' }}>
          <Image style={{ height: 150, width: width - 20, borderRadius: 15, shadowRadius: 0.3, shadowColor: 'blue' }} source={{ uri: item.image }} >
          </Image>

          <LinearGradient style={{ width: width - 20, height: 150, position: "absolute", borderRadius: 15, justifyContent: "flex-end" }} colors={['transparent', 'rgba(0,0,32,0.7)']}>
            <Text style={{ color: '#fff', paddingLeft: 8, paddingRight: 5, paddingBottom: 4 }}>{item.description}</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    )

  }



  render() {


    const data = this.state.products
    const searchPros = data.filter((item) => {
      const itemData = item.name.toUpperCase()
      return itemData.indexOf(this.state.search.toUpperCase()) > -1

    })

    // if(is)const {email} = this.props.route.params  
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: "column", }}>
        {/* <CustomDrawerContent></CustomDrawerContent> */}
        <CustomHeader ref="addtocart" title="Trang Chủ" isHome={true} cart={true} navigation={this.props.navigation} />
        <SearchBar platform="android" containerStyle={{ height: 40, width: width, justifyContent: "center" }} inputStyle={{ fontSize: 15, }}
          placeholder="Search..."
          onChangeText={val => this.setState({ search: val })}
          value={this.state.search}
        />

        <ScrollView
          showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>

            <View>
              <Carousel
                layout={'default'} loop={true}
                autoplay={true} autoplayInterval={2500}
                inactiveSlideOpacity={0.7}
                loopClonesPerSide={3}
                vertical={false}
                // ref={(c) => { this._carousel = c; }}
                data={this.state.sliders}
                renderItem={({ item }) => this.renderSlide(item)}
                sliderWidth={width}
                itemWidth={width}
                sliderHeight={200}
                itemHeight={200}

              />
            </View>
            <View>
              <FlatList data={this.state.categories.result} horizontal={true}
                renderItem={({ item }) => this.renderCate(item)}
                keyExtractor={(item, index) => index.toString()}>
              </FlatList>
            </View>
            <View >
              <FlatList data={searchPros} numColumns={2}
                renderItem={({ item }) => this.renderPro(item)}
                keyExtractor={(item, index) => index.toString()}>
              </FlatList>
              <View style={{ height: 20 }} />
            </View>
          </View>


          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>Sản phẩm được mua nhiều <FontAwesome5 name="jedi-order" size={24} color={"#FF0C0C"} /> </Text>
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return (
                <View style={styles.separator} />
              )
            }}
            renderItem={(post) => {
              const item = post.item;
              return (
                <View style={styles.card}>

                  <View style={styles.cardHeader}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>

                  <Image style={styles.cardImage} source={{ uri: item.image }} />

                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                          <Image style={styles.icon} source={require('../images/add-to-cart.png')} />
                          <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                        
                          <Text style={styles.socialBarLabel}>125 l</Text>
                        </TouchableOpacity>
                       </View>
                    </View>
                  </View>
                </View>
              )
            }} />




          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>Sản phẩm được ưa thích  <FontAwesome5 name="heartbeat" size={24} color={"#FF0C0C"} /> </Text>
          
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return (
                <View style={styles.separator} />
              )
            }}
            renderItem={(post) => {
              const item = post.item;
              return (
                <View style={styles.card}>

                  <View style={styles.cardHeader}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
               
                  <Image style={styles.cardImage} source={{ uri: item.image }} />


                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                          <Image style={styles.icon} source={require('../images/add-to-cart.png')} />
                          <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Image style={styles.icon} source={require('../images/heart.png')} />
                          <Text style={styles.socialBarLabel}>25</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }} />
            

        </ScrollView>















      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  imageProduct: {
    width: ((width / 2) - 20) - 20,
    height: ((width / 2) - 20) - 40,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -25
  },
  divListProduct: {
    width: (width / 2) - 25,
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 5,
    marginLeft: 15,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5FCFF"

  },
  divtheme: {
    height: 42,
    borderBottomWidth: 3,
    padding: 10,
    borderColor: '#c2191c',
    backgroundColor: '#D3DCE3'
  },
  divtheme2: {
    height: 41,
    // borderBottomWidth:2,
    borderColor: '#c2191c',
    padding: 10,
    backgroundColor: 'white'
  },
  categories: {
    backgroundColor: 'rgb(176, 224, 230)',
    padding: 10,
    borderColor: "red",
    borderTopWidth: 3

  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: 1,
    shadowOffset: {
      width: 30,
      height: 30
    },


  },
  cardImage: {
    width: 100,
    height: 50,

  },
  cardText: {
    padding: 10,
    fontSize: 16
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,

  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    // fontFamily: 'FallingSky',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: '47%',
    marginHorizontal: 5,
    borderRadius: 15
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft:5,
  
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})