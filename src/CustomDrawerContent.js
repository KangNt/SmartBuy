import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image,TouchableOpacity,ScrollView,StyleSheet,AsyncStorage,Alert,RefreshControl} from 'react-native'
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
           
    getInfo = async () => {
        alert('hi')
        try {
           const val = AsyncStorage.multiGet(["email", "name",'avatar']).then(result => {
                alert(result[0][1]+" "+result[1][1])
                alert(result[2][1])
                this.setState({
                  email:result[0][1],
                  name:result[1][1],
                  avatar:result[2][1],
                  
                })
                
              }) 
            if(val!=null){
                return val
            }
         } catch (error) {
             
         }
      }
    _AlertLogout =()=>{
        
        Alert.alert("Thong Bao", "Ban co chac chan muon logout khong?",
        [
          
          {text:'Huy'},
          { text:'OKI', onPress:this._Logout
          
          }
        ],
          {cancelable: false},)
        
      }
     
     
      _Logout = async () => {
        try {
          AsyncStorage.clear();
          this.setState({
            email:'',
            name:""
          })
          this.props.navigation.navigate('Login')
          setTimeout(()=>{
            this.props.navigation.navigate('Home')
          },10)
          
        } catch (error) {
          alert(error)
          
        }
      }
     
    render() {
        return (
            <SafeAreaView style={{ flex: 1,marginTop:20 }}>   
            <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity >
                    <Image source={this.state.avatar==null || this.state.avatar=='' 
                        ? require("../assets/u.png")
                        : {uri:this.state.avatar}}
                        style={{ height: 70, width: 70, borderRadius: 60, marginRight: 180, marginTop: 5 }}
                        showEditButton
                    />
                    {/* <Avatar
                        source={{
                            uri:
                                'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg',
                        }}
                        showEditButton
                        style={{ height: 70, width: 70, borderRadius: 60, marginRight: 180, marginTop: -20 }}
                    /> */}
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
                    onPress={() => this.props.navigation.navigate('MenuTab')}
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
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                    <Text style={styles.text}><FontAwesome5 name="bookmark" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Dấu trang</Text> </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text} ><FontAwesome5 name="bolt" size={24} color={"#CDCCCE"} />     <Text style={styles.texts}>Khoảnh khắc</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => this.props.navigation.navigate('MenuTab')}
                >

                    <Text style={styles.text}><FontAwesome5 name="bell" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Notifications</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.state.email!=null ? {display:'none'} : {marginTop:25} }
                onPress={() => this.props.navigation.navigate('Login')}
                >

                    <Text style={styles.text}><FontAwesome5 name="bell" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Login</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this._Logout()}
                    style={this.state.email==null ? styles.err : styles.success }
                   
                >
                    <Text style={styles.text}><FontAwesome5 name="sign-out-alt" size={24} color={"#CDCCCE"} />    <Text style={styles.texts}>Logout</Text></Text>
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
    err:{
        display:"none"
    },
    success:{
        marginTop: 25
    }

    
})
