import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image,TouchableOpacity,ScrollView,StyleSheet,AsyncStorage,Alert} from 'react-native'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            isLoading: false,
            id_user:null,
            name:'nam',
            email:'',
            password:'',
            avatar:""
    
          }
          
    }
    ClickChangeName(){
        this.setState({
            name:"ok"
        })
    }
    render(){
        return(
            <View style={{alignContent:"center",flex:1,justifyContent:"center"}}>
                <Text>{this.state.name}</Text>
            </View>
        )
    }
}