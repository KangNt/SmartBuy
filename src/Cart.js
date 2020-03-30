import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View,TouchableOpacity,Dimensions,Image,ScrollView } from 'react-native'
import {CustomHeader} from './index'
var { width } = Dimensions.get("window")
export class Cart extends Component {
    render() {
        return ( 
            <View style={{ flex: 1, }}>
            <CustomHeader title="Cart" isHome={false} navigation={this.props.navigation} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, }}>
            <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex:1}}>
                <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc",
                 paddingBottom:10}}>
                  <Image resizeMode={"contain"} style={{width:width/3,height:width/4}} source={{uri: "https://testapi001.cf/public/images/test.jpg"}} />
                  <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
                    <View>
                      <Text style={{fontWeight:"bold", fontSize:20}}>Titulo de producto</Text>
                      <Text>Descripcion de food</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold',color:"#9fd236",fontSize:20}}>$565</Text>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity>
                          <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                        <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>5</Text>
                        <TouchableOpacity>
                          <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                  <Image resizeMode={"contain"} style={{width:width/3,height:width/4}} source={{uri: "https://testapi001.cf/public/images/test.jpg"}} />
                  <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
                    <View>
                      <Text style={{fontWeight:"bold", fontSize:20}}>Titulo de producto</Text>
                      <Text>Descripcion de food</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold',color:"#9fd236",fontSize:20}}>$565</Text>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity>
                          <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                        <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>5</Text>
                        <TouchableOpacity>
                          <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                  <Image resizeMode={"contain"} style={{width:width/3,height:width/4}} source={{uri: "https://testapi001.cf/public/images/test.jpg"}} />
                  <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
                    <View>
                      <Text style={{fontWeight:"bold", fontSize:20}}>Titulo de producto</Text>
                      <Text>Descripcion de food</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontWeight:'bold',color:"#9fd236",fontSize:20}}>$565</Text>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity>
                          <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                        <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>5</Text>
                        <TouchableOpacity>
                          <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>

              </View>

              <View style={{height:20}} />
                <TouchableOpacity style={{
                    backgroundColor:"#9fd236",
                    width:width-40,
                    alignItems:'center',
                    padding:10,
                    borderRadius:5
                  }}>
                  <Text style={{
                      fontSize:24,
                      fontWeight:"bold",
                      color:'white'
                    }}>
                    CHECKOUT
                  </Text>
                </TouchableOpacity>

              <View style={{height:20}} />
          </View>
          </ScrollView>
          </View>
        )
    }
}