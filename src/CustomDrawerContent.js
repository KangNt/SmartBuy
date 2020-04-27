import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image,TouchableOpacity,ScrollView,StyleSheet,AsyncStorage,Alert} from 'react-native'
import { IMAGE } from './constants/Image'
import { FontAwesome5 } from '@expo/vector-icons';
export class CustomDrawerContent extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            isLoading: false,
            id_user:null,
            name:'',
            email:'',
            password:'',
            avatar:""
    
          }
         try {
            const val = AsyncStorage.multiGet(["id_user","email", "name",'avatar']).then(result => {
                // alert(result[0][1])
                // alert(result[1][1])
                // alert(result[2][1])
                // alert(result[3][1])
  
                this.setState({
                  id_user:result[0][1],
                  email:result[1][1],
                  name:result[2][1],
                  avatar:result[3][1],
                  
                })
                
              }) 
         } catch (error) {
             
         }
         
            
    }
           
    
    getInfo(){
        const val = AsyncStorage.multiGet(["id_user","email", "name",'avatar']).then(result => {
            // alert(result[0][1])
            

            this.setState({
              id_user:result[0][1],
              email:result[1][1],
              name:result[2][1],
              avatar:result[3][1],
              
            })
            
          }) 
        
    }
   
    _AlertLogout =()=>{
        Alert.alert("Thông báo!", "Bạn có chắc chắn muốn Logout không?",
        [
          {text:'Cancel'},
          { text:'OK', onPress:this._Logout
          
          }
        ],
          {cancelable: false},)
        
      }
     
     
      _Logout=()=>{
        AsyncStorage.clear();
        this.setState({
            id_user:null,
            email:null,
            name:null,
            avatar:null,
            
          })
            
          

         

      }
      Register(){
        this.props.navigation.navigate('Register')
      }
      
    render() {
        
        return (
            <SafeAreaView style={styles.container}>
            <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={()=>this.getInfo()}
                
                >
                 
                    <Image source={this.state.avatar==null || this.state.avatar=='' 
                        ? require('./images/user.png')
                        : {uri:this.state.avatar}}
                        style={{ height: 70, width: 70, borderRadius: 60, marginRight: 180, marginTop: 5 }}
                        showEditButton
                    />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={{ marginTop: 5, marginLeft: -120, fontSize: 18, fontWeight: "bold" }}>{this.state.name} </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ marginTop: 5, marginLeft: -120, color: "#ABB4BD" }}>{this.state.email}</Text>

                </TouchableOpacity>


            </View>
            <ScrollView style={{ marginLeft: 5 }}>
                <TouchableOpacity
                    style={{ marginTop: 10,flexDirection:"row"}}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text}>
        <FontAwesome5 name="home" size={24} color={"#CDCCCE"} />  Trang Chủ</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Profile')}
                >
                    <Text style={styles.text} ><FontAwesome5 name="user" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Thông Báo</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Contact')}
                >
                    <Text style={styles.text}><FontAwesome5 name="list-alt" size={24} color={"#CDCCCE"} />   <Text style={styles.texts}>Liên Hệ</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Introduce')}
                >
                    <Text style={styles.text}><FontAwesome5 name="comment-dots" size={24} color={"#CDCCCE"} />   <Text style={styles.texts}>Giới Thiệu</Text></Text>
                </TouchableOpacity>
                
                {this.state.email == null ?
                    <TouchableOpacity
                    style={{marginTop:25}}
                    onPress={() => this.props.navigation.navigate('Login')}
                    >
                    <Text style={styles.text}><FontAwesome5 name="sign-in-alt" size={24} color={"#CDCCCE"} />
                        <Text style={styles.texts}>   Đăng Nhập</Text>
                    </Text>
                    </TouchableOpacity>
                    :
                    null
                }
                {this.state.email == null ?
                    null
                    :
                    <TouchableOpacity
                        style={{marginTop:25}}
                        onPress={()=> this._AlertLogout()}
                    >
                    <Text style={styles.text}><FontAwesome5 name="sign-in-alt" size={24} color={"#CDCCCE"} />
                        <Text style={styles.texts}>   Đăng Xuất</Text>
                    </Text>
                    </TouchableOpacity>
                }
                {this.state.email == null ?
                    <TouchableOpacity
                    style={{marginTop:25}}
                    onPress={()=> this.Register()}
                    >
                    <Text style={styles.text}><FontAwesome5 name="registered" size={24} color={"#CDCCCE"} />
                        <Text style={styles.texts}>   Đăng Kí</Text>
                    </Text>
                    </TouchableOpacity>
                    :
                    null
                }
                {this.state.email == null ?
                    <TouchableOpacity
                        style={{marginTop:25}}
                        onPress={()=> this.props.navigation.navigate('ForgotPassword')}
                    >
                        <Text style={styles.text}><FontAwesome5 name="lock-open" size={24} color={"#CDCCCE"} />
                            <Text style={styles.texts}>   Quên Mật Khẩu</Text>
                        </Text>
                    </TouchableOpacity>
                    :
                    null
                }
                
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:0,
        // backgroundColor:""
    },
    text: {
        marginLeft: 10,
        flexDirection: "row",
        // marginLeft: 10,
        fontSize:18
         
    },
    
})