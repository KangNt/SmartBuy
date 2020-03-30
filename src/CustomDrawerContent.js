import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image,TouchableOpacity,ScrollView,StyleSheet,AsyncStorage,Alert} from 'react-native'
import { IMAGE } from './constants/Image'
import { FontAwesome5 } from '@expo/vector-icons';
export class CustomDrawerContent extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            isLoading: false,
            id:'',
            name:'',
            email:'',
            password:'',
            avatar:""
    
          }
         try {
            AsyncStorage.multiGet(["email", "name",'avatar']).then(result => {
                // alert(result[0][1]+" "+result[1][1])
                // alert(result[2][1])
                this.setState({
                  email:result[0][1],
                  name:result[1][1],
                  avatar:result[2][1],
                  isLoading:true
                })
                
              }) 
         } catch (error) {
             
         }
         
            
    }
           
    // componentDidMount(){
    //    this.getInfo()
            
      
    // }
    // getInfo(){
    //     return(
    //         AsyncStorage.multiGet(["email", "name",'avatar']).then(result => {
    //             alert(result[0][1])
    //             this.setState({
    //             email:result[0][1],
    //             name:result[1][1],
    //             avatar:result[2][1],
                
    //             })
                
    //         }) 
    //     )
    // }
   
    // _AlertLogout =()=>{
    //     Alert.alert("Thông báo!", "Bạn có chắc chắn muốn Logout không?",
    //     [
          
    //       {text:'Cancel'},
    //       { text:'OK', onPress:this._Logout
          
    //       }
    //     ],
    //       {cancelable: false},)
        
    //   }
     
     
      _Logout = async () => {
        try {
          AsyncStorage.clear();
          this.setState({
            email:'',
            name:""
          })
          this.props.navigation.navigate('Login')
        } catch (error) {
          alert(error)
          
        }
      }
      
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity 
                onPress={ () => this.getInfo()}
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
                        <FontAwesome5 name="home" size={24} color={"#CDCCCE"} />   Home</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Profile')}
                >
                    <Text style={styles.text} ><FontAwesome5 name="user" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Hồ sơ</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text}><FontAwesome5 name="list-alt" size={24} color={"#CDCCCE"} />   <Text style={styles.texts}>Danh sách</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text}><FontAwesome5 name="comment-dots" size={24} color={"#CDCCCE"} />   <Text style={styles.texts}>Chủ đề</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Card')}
                >
                    <Text style={styles.text}><FontAwesome5 name="bookmark" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Shopping cart</Text> </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text} ><FontAwesome5 name="bolt" size={24} color={"#CDCCCE"} />     <Text style={styles.texts}>Khoảnh khắc</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Notifications')}
                >
                    <Text style={styles.text}><FontAwesome5 name="bell" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Notifications</Text></Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('Login')}
                >

                    <Text style={{ marginLeft: 15, marginTop: 15,fontWeight:'bold',size:18 }}><FontAwesome5 name="sign-in-alt" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Login</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ marginTop: 35, marginLeft: 5 }}
                    onPress={() => this._Logout()}
                >
                    <Text style={{ marginLeft: 15, marginTop: -10,fontWeight:'bold' }}><FontAwesome5 name="sign-out-alt" size={24} color={"#CDCCCE"} /> Đăng xuất</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        flexDirection: "row",
        marginLeft: 10,
        fontSize:18
         
    },
    
})