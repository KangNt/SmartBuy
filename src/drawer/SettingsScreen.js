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
    <TouchableOpacity>

    
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      
      leftIcon={{ name: item.icon }}
      bottomDivider
      chevron
      onPress={() => this.props.navigation.navigate('Profile')}
    />
    </TouchableOpacity>

  )
  render() {

    const list = [
      {
        name: 'KidPlaza',
        avatar_url: 'https://i1.sndcdn.com/avatars-000703955956-xs2oh0-t500x500.jpg',
        subtitle: '@kiennguyen07'
      },
      {
        name: 'Invoice',
        icon: 'bookmark'
      },
      {
        name: 'Password',
        icon: 'fingerprint'
      },
      {
        name: 'Update',
        icon: 'update'
      },
      {
        name: 'Notifications',
        icon: 'notifications'
      },
      {
        name: 'History',
        icon: 'history'
      }

    ]

   //update Scrollview animated
    let { navigation, isHome, title } = this.props
    return (

      <SafeAreaView style={{ flex: 1, }}
      horizontal={true}
      >
            
        <View style={{ flexDirection: 'row', height: 50, height: 150,}}>
          <ImageBackground source={IMAGE.ICON_BACKGROUND} style={{ width: '100%', height: '100%' }}>
         <CustomHeader  isHome={true} navigation={this.props.navigation} />
          </ImageBackground>
        </View>

        <TouchableOpacity>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
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