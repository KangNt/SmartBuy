import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, Image,
    ScrollView,
    ImageBackground,
    AsyncStorage,
    Dimensions,
    Button,Alert,ActivityIndicator
} from 'react-native'
import ReadMore from 'react-native-read-more-text';
import { CustomHeader } from '../index'
import { FontAwesome5 } from '@expo/vector-icons';
// import { RVText } from '../core/RVText'

// import Swiper from 'react-native-swiper'
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
var { width, height } = Dimensions.get('window');
var cart = []
export class ShowScan extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: "",
            email:"",
            user_id:'',
            product:[],
            wait_for_reloading:true
            
        }
        try {
          const val = AsyncStorage.multiGet(["id_user","email","name",'avatar']).then(result => {
              this.setState({
                user_id:result[0][1],
                email:result[1][1],
                name:result[2][1],
                avatar:result[3][1],
              })
              
            }) 
        } catch (error) {
          console.log(error)
        }
        const { idProduct } = this.props.route.params
        fetch('https://smartbuy01.gq/api/products/detail/'+idProduct)
        .then((res) => 
          res.json())
        .then((res) => {
          this.setState({
            product: res,
            wait_for_reloading:false
          })
        })
        .catch((error) => {
          console.error(error);
        });
        
    }
    componentDiMount() {
      
    }
    _renderTruncatedFooter = (handlePress) => {
      return (
        <View style={{alignItems:"center",justifyContent:"center"}}>
          
        <Text style={{fontSize:14,fontWeight:"bold",color:"#696969"}} onPress={handlePress}>
          Xem Thêm
        </Text>
        </View>
      );
    }
   AddToFavourite(){
    const {idProduct} =this.props.route.params
      if(this.state.email==null || this.state.name==null){
        alert("Bạn cần đăng nhập để thêm sản phẩm vào yêu thích")
      }
      else{
        fetch('https://smartbuy01.gq/api/favourites/add',{
                method: 'POST',
                headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json',
                
                },
              
                body:JSON.stringify({
                  user_ID:this.state.user_id,
                  product_ID:idProduct
                })
              }
        ).then((res)=>res.json()).then((res)=>{
            if(res.msg=='fail'){
              Alert.alert("Thông báo", "Sản phẩm đã có trong danh sách yêu thích")
              
            }else{
              Alert.alert("Thông báo", "Thêm vào danh sách yêu thích thành công")
             
            }
        })
    }
   }
    _renderRevealedFooter = (handlePress) => {
      return (
        <View style={{alignItems:"center",justifyContent:"center"}}>
          
        <Text style={{fontSize:14,fontWeight:"bold",color:"#696969"}} onPress={handlePress}>
          Thu Gọn
        </Text>
        </View>
      );
    }
    render() {
      if(this.state.product==[] || this.state.product==''){
        return(
          <SafeAreaView style={{ flex: 1, }}>
            <CustomHeader title='Chi Tiết Quét QR' Total={this.state.totalCart} cart={true} navigation={this.props.navigation} />
            <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            {this.state.wait_for_reloading ? 
              <ActivityIndicator animating={true} style={{marginTop:50}} size={50} color="#61dafb"> 
              </ActivityIndicator> 
              :
            <Text>Sản phẩm không tồn tại</Text>
            }
            </View>
          </SafeAreaView>
        )
     
      }else{
      const {info} =this.props.route.params
      
      return (
        <SafeAreaView style={{ flex: 1, }}>
          <CustomHeader title='Chi Tiết Quét QR' Total={this.state.totalCart} cart={true} navigation={this.props.navigation} />
        <View style={styles.container}>
          
          
          <ScrollView>
                {this.state.product.map((item)=>{
                  return(
                    <View style={{alignItems:'center', justifyContent:'center',marginHorizontal:30}}>
                      <Image style={styles.productImg} source={{uri:item.image}}/>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.price}>{item.price} $</Text>
                    </View> 
                  )
                })
              }
              
            <View style={styles.starContainer}>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            </View>
            <View style={styles.contentColors}>
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity> 
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity> 
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity> 
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity> 
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity> 
              <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity> 
            </View>
            
            <View style={styles.contentSize}>
              <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity> 
              <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity> 
              <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity> 
              <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity> 
            </View>
            <View style={styles.addToCarContainer}>
              <TouchableOpacity style={styles.shareButtonFavorite} onPress={()=> this.AddToFavourite()}>
                <Text style={styles.shareButtonText}><FontAwesome5 style={{color:'red'}} name={'heartbeat'} size={21}></FontAwesome5>  Add To Favourite</Text>  
              </TouchableOpacity>
            </View>
            <View style={styles.addToCarContainer}>
              <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener(this.state.product)}>
                <Text style={styles.shareButtonText}><FontAwesome5 name={'cart-plus'} size={19}></FontAwesome5>  Add To Cart</Text>  
              </TouchableOpacity>
            </View> 
            <View style={{textAlign:'center',marginTop:10,alignItems:"center",justifyContent:"center",alignContent:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:18,color:"#696969"}}>Mô Tả</Text>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}
                
                >
                  {this.state.product.map((item)=>{
                    return(
                      <Text style={{textAlign:'center'}}>
                        {item.detail}
                      </Text>
                    )  
                  })}
                
              </ReadMore>
              
            </View>

          </ScrollView>
      
        </View>
        </SafeAreaView>
      )
    }
  }
    
    clickEventListener(data){
      var id =''
      var name= ''
      var price= 0
      var image= ''
      data.map((item)=>{
        id=item.id
        name=item.name
        price=item.price
        image=item.image
      })
      var itemcart = {
        proID:id,
        productName: name,
        price: price,
        image:image
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
              Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng")
               
              
            }
            else{
              
              if(cart[i].quantity>=10){
                alert('Bạn chỉ được thêm tối đa 10 sản phẩm')
              }else{
                cart[i].quantity +=1
                console.log(itemcart)
                // cart.push(itemcart)
                
                AsyncStorage.setItem('cart',JSON.stringify(cart));
                Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng")
              }
            }
          })
          
          
          
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:20,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:0,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:15,
  },
  shareButtonFavorite:{
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#696969",
  },
  addToCarContainer:{
    marginHorizontal:70
  },
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container_cmt: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  nameCMT:{
    fontSize:16,
    fontWeight:"bold",
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
    marginBottom:20,
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