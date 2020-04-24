import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  TextInput,
  Dimensions
  ,
  SafeAreaView,AsyncStorage
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ReadMore from 'react-native-read-more-text';
import {CustomHeader} from '../index' 
// import {Comments} from '../drawer'
// import TextInput from "react-native-paper"
var {width,height} = Dimensions.get('window');
var cart =[]

export class HomeScreenDetail extends Component {
 
  constructor(props) {
    super(props);
    this.state={
      refresh:false,
      content_comment:'',
      user_id:'',
      email:'',
      avatar:'',
      name:'',
      product_id:'',
      data:'',
      comment:[],
      cart:[],
      totalCart:0

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
  }

  // clickEventListener() {
  //   Alert.alert("Success", "Product has beed added to cart")
  // }
  componentDidMount(){
    
    const {product} =this.props.route.params
    fetch('https://smartbuy01.gq/api/comments/comments-by-product/'+product.id)
     .then((cmt) =>cmt.json())
     .then((cmt) => {
       this.setState({
       
         data:cmt,
     
         
       })
     })
     .catch((error) =>{
       console.error(error);
     });
    
     
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
  const {product} =this.props.route.params
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
                product_ID:product.id
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
  SubmitCMT(){
    const {product} =this.props.route.params
    
    if(this.state.email==null || this.state.name==null){
      alert("Bạn cần đăng nhập để bình luận")
    }
    else if(this.state.content_comment==""){
      alert("Bạn cần nhập nội dung để bình luận")
    }
    else{
      
      fetch('https://smartbuy01.gq/api/comments/add',{
          method: 'POST',
          headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
          
          },
        
          body:JSON.stringify({
            content:this.state.content_comment,
            user_id:this.state.user_id,
            product_id:product.id
          })
        }
      ).then((res)=>res.json()).then((res)=>{
        if(res.result=='ok'){
          fetch('https://smartbuy01.gq/api/comments/comments-by-product/'+product.id)
          .then((cmt) =>cmt.json())
          .then((cmt) => {
            this.setState({
              data:cmt,
            })
          })
          .catch((error) =>{
            console.error(error);
          })
        
        }
      })
       
      
      this.setState({
        content_comment:''
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

  _handleTextReady = () => {
    // ...
  }
  render() {
    const {product} =this.props.route.params
    
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <CustomHeader title='Chi Tiết' Total={this.state.totalCart} cart={true} navigation={this.props.navigation} />
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', justifyContent:'center',marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:product.image}}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price} $</Text>
            
          </View>
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
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener(product)}>
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
              <Text style={{textAlign:'center'}}>
                {product.detail}
              </Text>
            </ReadMore>
            
          </View>
          <View>
            <Text style={{fontWeight:"bold",fontSize:18,paddingLeft:10,color:"#696969"}}>Bình Luận</Text>
          </View>
          <View style={{position:'relative',alignItems:'center',marginTop:20,width:width}}>
          
          <TextInput ref={input => { this.clear_content = input}} multiline
            style={{width:width-20,height:38,paddingLeft:14
            ,borderRadius:20,borderColor:"#696969",borderWidth:2,paddingRight:45}} 
            placeholder="Nhập nội dung để bình luận"
            
            onChangeText={text => this.setState({content_comment:text})} value={this.state.content_comment}
            
            />
            <TouchableOpacity onPress={()=>this.SubmitCMT()} style={{position:"absolute",right:10,top:-16,alignItems:"center",alignContent:'center'}}>
              <Image style={{width:35,height:70}} source={require('../images/sendic.png')}></Image>
            </TouchableOpacity>
            
          </View>
          <View style={{marginBottom:20}}>
          <FlatList
              style={styles.root}
              data={this.state.data}
              extraData={this.state}
              ItemSeparatorComponent={() => {
                return (
                  <View style={styles.separator}/>
                )
              }}
              renderItem={({item}) => {
                
                return(
                  <View style={styles.container_cmt}>
                    <TouchableOpacity onPress={() => {}}>
                      <Image style={styles.image} source={{uri:item.avatar}}/>
                    </TouchableOpacity>
                    <View style={styles.content}>
                      <View style={styles.contentHeader}>
                        <Text  style={styles.nameCMT}>{item.name}</Text>
                        <Text style={styles.time}>
                          {item.date_cmt}
                        </Text>
                      </View>
                      <Text>{item.content}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor = { (item,index) => index.toString() } 
            />
          </View>
          
        </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
  
  clickEventListener(data){
    this.setState({
      totalCart:this.state.totalCart +1
    })
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
});     
