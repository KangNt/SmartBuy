import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
    Alert,
    Dimensions,AsyncStorage,RefreshControl
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { CustomHeader } from '../index'

import { IMAGE } from '../constants/Image'
import { RVText } from '../core/RVText'

// import { Icon, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationActions,StackActions } from 'react-navigation';
import { Card, ListItem, Button, Icon, ButtonGroup } from 'react-native-elements'

var { height, width } = Dimensions.get('window');
var STT_order =[
    {
        value:"0",
        method:'Đã hủy',
        color:"red"
    },
    {
        value:"1",
        method:'Đang chờ xử lí',
        color:"#ff7e3f"
    },
    {
        value:"2",
        method:'Đang chuyển',
        color:"orange"
    },
    {
        value:"3",
        method:'Đã nhận hàng',
        color:"green"
    },
]
var STT_payment =[
    {
        value:"1",
        method:'Chuyển Khoản Ngân Hàng'
    },
    {
        value:"2",
        method:'COD'
    },
    {
        value:"3",
        method:'VISA/MASTER CARD'
    },
]

export class HistoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:"",
            data: [],
            payment_method:"",
            loading:false
        };
        
    }
    componentDidMount(){
        
        try {
            const val = AsyncStorage.multiGet(["id_user","email","name",'avatar']).then(result => {
                this.setState({
                  user_id:result[0][1] 
                })
                fetch('https://smartbuy01.gq/api/history/history-by-user/'+this.state.user_id,{
                    method: 'GET',
                    headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    
                    },
              }
            ).then((res)=>res.json()).then((res)=>{
                  this.setState({
                      data:res.result
                  })
                  console.log(this.state.data)
                  
            })
              }) 
          } catch (error) {
                console.log(error)
          }
       
      console.log(this.state.user_id)
    }
    PulltoRefresh=()=>{
        this.setState({
            loading:true
        })
        try {
            const val = AsyncStorage.multiGet(["id_user","email","name",'avatar']).then(result => {
                this.setState({
                  user_id:result[0][1],

                })
                fetch('https://smartbuy01.gq/api/history/history-by-user/'+this.state.user_id,{
                    method: 'GET',
                    headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    
                    },
              }
            ).then((res)=>res.json()).then((res)=>{
                  this.setState({
                      data:res.result,
                      loading:false
                      
                  })
                  
                  console.log(this.state.data)
                  
            })
              }) 
          } catch (error) {
                console.log(error)
          }

      
            
            
      }

       
    confirm_cancel(item){
        this.setState({
            idOrder:item.id
        })
        Alert.alert("Thông báo!", "Bạn có muốn hủy đơn hàng này không?",
        [
          
          {text:'Cancel'},
          { text:'OK', onPress:this.submit_cancel_order
          
          }
        ],
          {cancelable: false},)
    }
    submit_cancel_order= ()=> {
        fetch('https://smartbuy01.gq/api/orders/cancel-order/'+this.state.user_id+'/'+this.state.idOrder,{
            method: 'PUT',
            headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
            },
        }).then((res)=>res.json()).then((res)=>{
               if(res.result=='ok'){
                fetch('https://smartbuy01.gq/api/history/history-by-user/'+this.state.user_id)
                .then((resHistory)=>resHistory.json()).then((resHistory)=>{
                    this.setState({
                        data:resHistory.result
                    })
                    Alert.alert("Thành Công", "Đã hủy đơn hàng thành công") 
               })   
            }
        })
    }

    render() {
        const buttons = ['Scan', 'Oders',]
        const { selectedIndex } = this.state
        let { navigation, isHome, title } = this.props
        return (
            
            <ScrollView refreshControl={
                <RefreshControl
                onRefresh={this.PulltoRefresh}
                refreshing={this.state.loading}
                />
              }   style={{ flex: 1, }} >
            {/* <ScrollView style={{flex:1}}> */}
                <CustomHeader title="History" navigation={this.props.navigation} />
                
                
                
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 50, borderRadius: 30 }}
                />
                <View style={{flex:1,alignItems:'center'}}>
                    <FlatList
                     style={styles.list} showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                        data={this.state.data}  
                        horizontal={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate('DetailHistory',{item:item})}>
                                    {/* <Image style={styles.cardImage} source={{ uri: item.image }} /> */}
                                    <View style={{alignContent:"center",width:width-50,top:17}}>
                                    <Text style={styles.title}>Mã Đơn Hàng: {item.id}</Text>
                                    <Text style={styles.title}>Tên Khách Hàng: {item.customer_name}</Text>
                                    {
                                        STT_order.map((stt)=>{
                                            if(item.status==stt.value){
                                                return(
                                                    <Text style={styles.title}>Trạng Thái: 
                                                        <Text style={{color:stt.color,fontSize:15,
                                                            fontWeight:'bold',
                                                            marginLeft:40,}}> {stt.method}
                                                        </Text>
                                                    </Text>
                                                ) 
                                            }
                                        })
                                    }
                                    <Text style={styles.title}>Tổng Tiền: {item.total_price} VNĐ</Text>
                                    <Text style={styles.title}>Ngày Đặt: {item.day_buy}</Text>
                                    
                                    <Text style={{position:"absolute",right:5,top:40,fontWeight:"bold",color:"#3399f0",fontSize:40}}>
                                        <FontAwesome5 name='chevron-right' size={20}></FontAwesome5>
                                    </Text>
                                    </View>
                                    {/* <Text style={styles.title}>Địa chỉ nhận hàng: {item.customer_address}</Text>
                                    <Text style={styles.title}>Số điện thoại: {item.customer_phone}</Text>
                                    {
                                        STT_payment.map((stt)=>{
                                            if(item.payment_method==stt.value){
                                                return(
                                                    <Text style={styles.title}>Phương Thức Thanh Toán: {stt.method}</Text>
                                                ) 
                                            }
                                        })
                                    } */}
                                   {item.status!=1 ? <Text></Text>
                                        :  
                                        <View style={{alignItems:"flex-end"}}>
                                            <TouchableOpacity onPress={() => this.confirm_cancel(item)} style={{width:80,height:30,borderRadius:30,
                                                justifyContent:"center",backgroundColor: "white",
                                                borderWidth:1,borderColor:"#dcdcdc",marginBottom:3}}>
                                                <Text style={{textAlign:"center",color:'red'}}>Hủy</Text>
                                            </TouchableOpacity>
                                        </View>
                                        
                                    }
                                    
                                </TouchableOpacity>
                                
                            )
                        }} />
                </View>
                
                

               
            {/* </ScrollView> */}
            </ScrollView>
            
            

        )
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 100,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
    container:{
        flex:1,
        marginTop:20,
      },
      list: {
        //   alignItems:"center"
        //paddingHorizontal: 5,
      },
    
      /******** card **************/
      card:{
        position:"relative",
        backgroundColor:'white',
        marginTop:10,
        marginBottom:20,
        width: width-30,
        // height:150,
        // flexDirection:'column',
        // padding:20,
        borderBottomWidth:2,
        borderBottomColor:"#3399f0",
        
        
        
      },
      cardImage:{
        height: 70,
        width: 70,
      },
      title:{
        fontSize:15,
        
        color:"#333",
        fontWeight:'bold',
        marginLeft:35
      },
      subTitle:{
        fontSize:12,
        flex:1,
        color:"#FFFFFF",
      },
      icon:{
        height: 20,
        width: 20, 
      }
})