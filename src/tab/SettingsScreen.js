import React, { Component } from 'react'

import { Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground} from 'react-native'
import { CustomHeader } from '../index'

import { IMAGE } from '../constants/Image'
// import { RVText } from '../core/RVText'


import { ListItem } from 'react-native-elements'

import { FlatList } from 'react-native-gesture-handler'






function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}


export class SettingsScreen extends Component {

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        
      }}
     
    />

  )


  render() {

    const list = [
      {
        name: 'KidPlaza',
        avatar_url: 'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg',
        subtitle: 'nam@123.com'
      },
      // {
      //   name: 'Invoice',
      //   icon: 'bookmark'
      // },
      // {
      //   name: 'Password',
      //   icon: 'fingerprint'
      // },
      // {
      //   name: 'Update',
      //   icon: 'update'
      // },
      // {
      //   name: 'Notifications',
      //   icon: 'notifications'
      // },
      // {
      //   name: 'History',
      //   icon: 'history'
      // }

    ]

   //update Scrollview animated
    let { navigation, isHome, title } = this.props
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
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
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