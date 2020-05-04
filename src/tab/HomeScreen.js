import React, { Component } from 'react'
import {
  Text, View, SafeAreaView, TouchableOpacity,
  StyleSheet, Image, ScrollView, ImageBackground, AsyncStorage,
  Dimensions, Button, RefreshControl, TextInput, TouchableHighlight, Alert,ActivityIndicator
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
var cart =[]
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
      listNewProducts:"",
      mostList_bought_Products:'',
      list_favorite_products:"",
      wait_for_reloading:true
     
    }
  }

  addProductToCart = (data) => {
    var itemcart = {
      proID:data.id,
      productName: data.name,
      price: data.price,
      image:data.image
    }
        var flag = false
        for(var i = 0;i<cart.length;i++){
            if(cart[i].proID==itemcart.proID){
              flag=true
              
              break
            }
        }
        console.log(flag) 
        AsyncStorage.getItem('cart').then((res)=>{
          
          if(res==null || res=='' ){
            cart.length = 0
            flag=false
          }
          if(flag === false) {
            
            // We have data!!
            itemcart.quantity=1
            // const cart = JSON.parse(datacart)
            cart.push(itemcart)
            AsyncStorage.setItem('cart',JSON.stringify(cart));
            this.props.navigation.navigate('cart') 
            
          }
          else{
               cart[i].quantity +=1
              AsyncStorage.setItem('cart',JSON.stringify(cart)); 
              this.props.navigation.navigate('cart') 
          }
        })
}

  componentDidMount() {
    Promise.all([fetch('https://smartbuy01.gq/api/slider'), fetch('https://smartbuy01.gq/api/products'),
                fetch('https://smartbuy01.gq/api/categories'),fetch('https://smartbuy01.gq/api/products/list-favorite-products')
                ,fetch('https://smartbuy01.gq/api/products/most-list-bought-products'),
                fetch('https://smartbuy01.gq/api/products/list-new-products')
    ])
      .then(([res1, res2, res3,res4,res5,res6]) => {
        return Promise.all([res1.json(), res2.json(), res3.json(),res4.json(),res5.json(),res6.json()])
      })
      .then(([res1, res2, res3,res4,res5,res6]) => {
        this.setState({
          wait_for_reloading:false,
          sliders: res1,
          products: res2,
          categories: res3,
          list_favorite_products:res4.result,
          mostList_bought_Products:res5.result,
          listNewProducts:res6,
         
        })
        
        console.log(this.state.categories.category)
      })
      .catch((error) => {
        console.error(error);
      });

  }

  renderPro(item) {

    return (
      <TouchableOpacity style={{position:'relative'}} onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
        <View style={styles.container1}>
          <Image style={styles.photo} source={{ uri: item.image }} />
          <Text style={styles.title1}>{item.name}</Text>
          <Text style={styles.category}>{item.price} VNĐ</Text>
          {/* <Image  style={{position:'absolute',width:60,height:52,right:-8,top:-3,
            }} source={require('../../assets/new.png')} /> */}
          
        </View>
      </TouchableOpacity>

    )

  }
  renderProNew(item) {

    return (
      <TouchableOpacity style={{position:'relative'}} onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
        <View style={styles.container1}>
          
          <Image style={styles.photo} source={{ uri: item.image }} />
          <Text style={styles.title1}>{item.name}</Text>
          <Text style={styles.category}>{item.price} VNĐ</Text>
          <Image  style={{position:'absolute',width:60,height:52,right:-8,top:-3,
            }} source={require('../../assets/new.png')} />
          
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
  PulltoRefresh=()=>{
    this.setState({
      loading:true
    })
    Promise.all([fetch('https://smartbuy01.gq/api/slider'), fetch('https://smartbuy01.gq/api/products'),
                fetch('https://smartbuy01.gq/api/categories'),fetch('https://smartbuy01.gq/api/products/list-favorite-products')
                ,fetch('https://smartbuy01.gq/api/products/most-list-bought-products'),
                fetch('https://smartbuy01.gq/api/products/list-new-products')
    ])
      .then(([res1, res2, res3,res4,res5,res6]) => {
        return Promise.all([res1.json(), res2.json(), res3.json(),res4.json(),res5.json(),res6.json()])
      })
      .then(([res1, res2, res3,res4,res5,res6]) => {
        this.setState({
          sliders: res1,
          products: res2,
          categories: res3,
          list_favorite_products:res4.result,
          mostList_bought_Products:res5.result,
          listNewProducts:res6,
          loading:false
        })
        console.log(this.state.categories.category)
      })
      .catch((error) => {
        console.error(error);
      });
  
        
        
  }
  renderCate(item) {
    return (
      <TouchableOpacity style={{backgroundColor:"#70c1ae"}} onPress={() => this.props.navigation.navigate('CategoryDetail', { category: item })}>
        <View style={this.state.selectCate == item.id ? styles.divtheme : styles.divtheme2}>

          <Text style={{color:"#677ba6",fontSize:15,fontWeight:'600'}}>{item.cate_name}</Text>
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
      <SafeAreaView  style={{ flex: 1, flexDirection: "column", }}>
        <CustomHeader ref="addtocart" title="Trang chủ" isHome={true} cart={true} navigation={this.props.navigation} />
        <SearchBar platform="android" containerStyle={{ height: 40, width: width, justifyContent: "center" }} inputStyle={{ fontSize: 15, }}
          placeholder="Search..."
          onChangeText={val => this.setState({ search: val })}
          value={this.state.search}
        />
        {this.state.wait_for_reloading ? 
        <ActivityIndicator animating={true} style={{marginTop:50}} size={50} color="#61dafb"> 
        </ActivityIndicator> 
        :
        <ScrollView refreshControl={
          <RefreshControl
          onRefresh={this.PulltoRefresh}
          refreshing={this.state.loading}
          />
          }
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
            <View>
              <View style={{alignItems:"center",marginTop:10}}>
              
                {this.state.search!='' ? 
                <Text 
                  style={searchPros =='' ? {display:"none"}:{textAlign:"center",fontSize:17,fontWeight:"bold",width:130,color:"#677ba6"}}>
                  Kết quả tìm kiếm cho: "{this.state.search}"
                </Text>
                
                : 
                <Text style={{textAlign:"center",fontSize:17,fontWeight:"bold",width:130,color:"#677ba6", }}>
                  Sản Phẩm Mới
                </Text>}
                <Text>
                  {searchPros =='' ?
                      <Text 
                      style={{textAlign:"center",fontSize:17,fontWeight:"bold",width:130,color:"#677ba6",}}>
                      Không tìm thấy sản phẩm
                    </Text>
                    :
                    null
                  }
                </Text> 
              </View>
              {this.state.search!=''?
                <FlatList data={searchPros} numColumns={2}
                  renderItem={({ item }) => this.renderPro(item)}
                  keyExtractor={(item, index) => index.toString()}>
                </FlatList>
                :
                <FlatList 
                 data={this.state.listNewProducts}
                 
                 
                 numColumns={2}
                  renderItem={({ item }) => this.renderProNew(item)}
                  keyExtractor={(item, index) => index.toString()}>
                </FlatList>
              }
              
              <View style={{ height: 20 }} />
            </View>
          </View>
          <View style={this.state.search!='' ? {display:'none'} : {}}>
           
             <Text style={{ fontSize: 17,color:"#677ba6", fontWeight: "bold", marginLeft: 10 }}>Sản phẩm được mua nhiều <FontAwesome5 name="jedi-order" size={24} color={"#FF0C0C"} /> </Text>
             <FlatList style={styles.list}
            
               contentContainerStyle={styles.listContainer}
               data={this.state.mostList_bought_Products}
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
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
                     <View style={styles.cardHeader}>
                       <View>
                         <Text style={styles.title}>{item.name}</Text>
                         <Text style={styles.price}>{item.price} VNĐ</Text>
                       </View>
                     </View>
   
                     <Image style={styles.cardImage} source={{ uri: item.image }} />
   
                     <View style={styles.cardFooter}>
                       <View style={styles.socialBarContainer}>
                         <View style={styles.socialBarSection}>
                           <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart(item)}>
                             <Image style={styles.icon} source={require('../images/add-to-cart.png')} />
                             <Text style={[styles.socialBarLabel, styles.buyNow]}> Mua ngay</Text>
                           </TouchableOpacity>
                         </View>
                         <View style={styles.socialBarSection}>
                           <TouchableOpacity style={styles.socialBarButton}>
                           
                             <Text style={styles.socialBarLabel}>{item.total_Buy} lượt</Text>
                           </TouchableOpacity>
                          </View>
                       </View>
                     </View>
                     </TouchableOpacity>
                   </View>
                 )
               }} />
              
          </View>
          <View style={this.state.search!='' ? {display:'none'} : {}}>
          <Text style={{ fontSize: 17, fontWeight: "bold",color:"#677ba6", marginLeft: 10 }}>Sản phẩm được ưa thích  <FontAwesome5 name="heartbeat" size={24} color={"#FF0C0C"} /> </Text>
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.list_favorite_products}
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
                  <View style={styles.cardHeader}>
                    <View>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.price}>{item.price} VNĐ</Text>
                    </View>
                  </View>

                  <Image style={styles.cardImage} source={{ uri: item.image }} />

                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart(item)}>
                          <Image style={styles.icon} source={require('../images/add-to-cart.png')} />
                          <Text style={[styles.socialBarLabel, styles.buyNow]}> Mua ngay</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <Image style={styles.icon} source={require('../images/heart.png')} />
                          <Text style={styles.socialBarLabel}> {item.tong_so_luot_yeu_thich}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                </View>
              )
            }} />
            </View>

        </ScrollView>
           
      }
        
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
  title1: {
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