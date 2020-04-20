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
    Button
} from 'react-native'
import { CustomHeader } from '../index'
import { FontAwesome5 } from '@expo/vector-icons';
// import { RVText } from '../core/RVText'

// import Swiper from 'react-native-swiper'
import { FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
var { width, height } = Dimensions.get('window');

export class ShowScan extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: ""
    //     }
    //     const { info } = this.props.route.params
    //     this.setState({
    //         name: info
    //     })
    //     alert(this.state.name)
    // }
    componentDiMount() {

    }

    constructor(props) {
        super(props); 
        this.state = {
            name: ""
        }
        const { info } = this.props.route.params
   
        // alert(this.state.name);

        this.state = {
          modalVisible: false,
          userSelected: [],
          product: {
            name: "Thuốc là Sài Gòn Bạc",
            description: "Thuốc là Sài Gòn bạc- 352. Gu thuốc: Công ty hiện đang sản xuất các dòng sản phẩm thuộc gu Virginia truyền thống, Virginia cải tiến, gu Mỹ, gu Menthol, gu đặc biệ",
            created: "",
            images: [
              "https://nghingamart.vn/assets/san-pham/hang-tieu-dung/13854.png",
              "https://hotelmart.vn/uploads/share-images/2019/03/25/1016_i5c989cfe07bf7.jpg",
              "https://vn.all.biz/img/vn/catalog/more/4626_saigon_silver.jpeg",
            ],
            colors: [
              "#B0B9DB",
              "#506F60"
            ]
          }
        };
      }
    
      __setImageSelected = (image) => {
        this.setState({ selectedImage: image });
      }
    
      __renderImages = () => {
        return (
          <View style={styles.smallImagesContainer}>
            {this.state.product.images.map((prop, key) => {
              return (
                <TouchableOpacity key={key} onPress={() => { this.__setImageSelected(prop) }}>
                  <Image style={styles.smallImage} source={{ uri: prop }} />
                </TouchableOpacity>
              );
            })}
          </View>
        )
      }
    
      __renderColors = () => {
        return (
          <View style={styles.contentColors}>
            {this.state.product.colors.map((prop, key) => {
              return (
                <TouchableOpacity key={key} style={[styles.btnColor, { backgroundColor: prop }]}></TouchableOpacity>
              );
            })}
          </View>
        )
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
    render() {
        var mainImage = (this.state.selectedImage) ? this.state.selectedImage : this.state.product.images[0];
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: "column" }} >
                <CustomHeader title="Detail Scan" navigation={this.props.navigation} />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                   {/* <FlatList data={this.state.name} horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}>
                    </FlatList>
  */}


<View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{this.state.product.name}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{ uri: mainImage }} />
                </View>
                {this.__renderImages()}
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Colors</Text>
            </View>
            <View style={styles.cardContent}>
              {this.__renderColors()}
            </View>
          </View>
          <View style={styles.card}>
          <View style={styles.starContainer}>
          <Text style={styles.cardTitle}>Đánh giá </Text>
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
            </View>
            </View>
          

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Description</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.description}>{this.state.product.description}</Text>
            </View>
          </View>
          <View style={styles.card}>
          
          
            
          </View>

          <View style={styles.card}>
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
          </View>
        </ScrollView>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Comment</Text>
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
        </View>


                    <View style={{ flex: 1 }}>
                        <View style={{ height: 150 }}>
                            <Text>{}</Text>
                            {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity> */}
                        </View>
                    </View>
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
        }

    },
    cardImage: {
        width: 100,
        height: 50,

    },
    cardText: {
        padding: 10,
        fontSize: 16
    },
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ebf0f7",
      },
      content: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
      },
      header: {
        flexDirection: 'row',
      },
      mainImage: {
        width: 200,
        height: 200,
      },
      smallImagesContainer: {
        flexDirection: 'column',
        marginLeft: 30
      },
      smallImage: {
        width: 60,
        height: 60,
        marginTop: 5,
      },
      btnColor: {
        height: 40,
        width: 40,
        borderRadius: 40,
        marginHorizontal: 3
      },
      contentColors: {
        flexDirection: 'row',
      },
      name: {
        fontSize: 22,
        color: "#696969",
        fontWeight: 'bold',
      },
      price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
      },
      description: {
        fontSize: 18,
        color: "#696969",
      },
      shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
      },
      shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
      },
    
      /******** card **************/
      card: {
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height:6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    
        marginVertical: 5,
        backgroundColor: "white",
        marginHorizontal: 5,
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 17,
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      cardTitle: {
        color: "#00BFFF"
      },
      starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 10
      },
      star: {
        width: 40,
        height: 40,
      },
      addToCarContainer:{
        marginHorizontal:70
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
})