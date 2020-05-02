import React, { Component } from 'react'

import { Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground,AsyncStorage,Dimensions} from 'react-native'
import { CustomHeader } from '../index'

import { IMAGE } from '../constants/Image'
// import { RVText } from '../core/RVText'


import { ListItem } from 'react-native-elements'

import { FlatList } from 'react-native-gesture-handler'
var {width,height} = Dimensions.get('window');
export class SettingsScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      name:"",
      avatar:""
  
    }
    AsyncStorage.multiGet(["id_user","email", "name",'avatar']).then(result => {
      this.setState({
        id_user:result[0][1],
        email:result[1][1],
        name:result[2][1],
        avatar:result[3][1],
        
      })
      
    }) 
  }
  Login(){
    AsyncStorage.multiGet(["id_user","email", "name",'avatar']).then(result => {
      this.setState({
        id_user:result[0][1],
        email:result[1][1],
        name:result[2][1],
        avatar:result[3][1],
        
      })
      this.props.navigation.navigate('Login')
    }) 
  }
  render() {

    if(this.state.email==null){
      return(
      <SafeAreaView style={{ flex: 1, }}
      horizontal={true}
      >
            
        {/* <View style={{ flexDirection: 'row', height: 50, height: 150,}}> */}
          {/* <ImageBackground source={IMAGE.ICON_BACKGROUND} style={{ width: '100%', height: '100%' }}> */}
         <CustomHeader isHome={false} title="Settings" navigation={this.props.navigation} />
          {/* </ImageBackground> */}
        {/* </View> */}
        <View style={{alignItems:'center'}}>
          <Text style={{textAlign:"center"}}>Bạn cần đăng nhập để sử dụng chức năng này</Text>
          <TouchableOpacity onPress={()=>this.Login()} style={{backgroundColor:"#9fd236",
                    width:width-200,
                    alignItems:'center',
                    padding:10,
                    borderRadius:5}}><Text style={{textAlign:"center"}}>Đăng Nhập</Text></TouchableOpacity>
        </View>

      </SafeAreaView>
      )
    }
    else{
    return (

      <SafeAreaView style={{ flex: 1, }}
      horizontal={true}
      >
            
        {/* <View style={{ flexDirection: 'row', height: 50, height: 150,}}> */}
          {/* <ImageBackground source={IMAGE.ICON_BACKGROUND} style={{ width: '100%', height: '100%' }}> */}
         <CustomHeader isHome={false} title="Settings" navigation={this.props.navigation} />
          {/* </ImageBackground> */}
        {/* </View> */}

        <TouchableOpacity>
        <ListItem
          title={this.state.name}
          subtitle={this.state.email}
          leftAvatar={{
            source: this.state.avatar && { uri:this.state.avatar},
            
          }}
          onPress={()=>this.props.navigation.navigate('Profile')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChangePassword')}>
          <ListItem
              title={"Đổi Mật Khẩu"}
              subtitle={'Đổi mật khẩu tại đây'}
              leftIcon={{name:'lock'}}
              bottomDivider
              chevron
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfile')}>
          <ListItem
              title={"Thông tin cá nhân"}
              subtitle={'Thay đổi thông tin cá nhân tại đây'}
              leftIcon={{name:'person'}}
              bottomDivider
              chevron
          />
        </TouchableOpacity>



        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* <RVText content="Settings!" /> */}
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('SettingDetail')}
          >
            {/* <RVText content="Go Settings Detail!" /> */}
          </TouchableOpacity>

        </View>
      </SafeAreaView>





    )
    }
  }
}