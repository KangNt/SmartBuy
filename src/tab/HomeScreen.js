import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image,ScrollView,ImageBackground, Dimensions} from 'react-native'
import { CustomHeader } from '../index'
// import { RVText } from '../core/RVText'
import Card from '../../components/Card/Card';
import Swiper from 'react-native-swiper'
import { FlatList } from 'react-native-gesture-handler';
var {width,height} = Dimensions.get('window');
export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ 
         
          Getone:[],
          sliders:[],
          categories:[],
          selectCate:""
          
        }

    }
    componentDidMount(){
  
        Promise.all([fetch('https://testapi001.cf/api'),fetch('https://testapi001.cf/api/'),fetch('https://testapi001.cf/api/categories')])
         .then(([req1,req2,req3]) => {
           return Promise.all([req1.json(),req2.json(),req3.json()])
         })
         .then(([req001,req002,req003]) => {
           this.setState({
             
             sliders: req001,
             Getone:req002,
             categories:req003
             
           })
   
         })
         .catch((error) =>{
           console.error(error);
         });
         
         
    }
    renderPro(item){
        if (this.state.selectCate==item.cate_id) {
            
         
                return(
                    <TouchableOpacity>
                    <View style={StyleSheet.card}>
                    <Image style={styles.cardImage}
                    source={{uri:item.image}} />
                        <Text>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )
        }
        else if(this.state.selectCate==0){
            return(
                <TouchableOpacity>
                <View style={StyleSheet.card}>
                <Image style={styles.cardImage}
                source={{uri:item.image}} />
                    <Text>{item.name}</Text>
                </View>
                </TouchableOpacity>
            )
        }
        
    }
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1, }} >
                   <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={StyleSheet.container}>
                    <View style={{height:150}}>
                        <Swiper>{this.state.Getone.map( (Item) =>{
                            return(
                               
                                <ImageBackground style={{width:width,height:150}} source={{uri:Item.image}} >
                                    <Text style={styles.text}>{Item.name}</Text>
                                </ImageBackground>
                            )

                            })}
                        </Swiper>
                    </View>
                    <View>
                        
                        <FlatList data={this.state.categories.category} horizontal={true}
                            
                            renderItem={({item}) =>
                                <TouchableOpacity onPress={()=>this.setState({selectCate:item.id})}>
                                    <View style={this.state.selectCate==item.id ? styles.divtheme : styles.divtheme2}>
                                        
                                        <Text>{item.cate_name}</Text>
                                    </View>
                                </TouchableOpacity>
                            }>
                                
                        </FlatList>
                    </View>
                    <ScrollView>
                        
                        <FlatList data={this.state.categories.product}
                            renderItem={({item}) => this.renderPro(item)
                                
                            }>

                        </FlatList>
                            
                            
                       
                        
                    </ScrollView>

                </View>
                </ScrollView>
            </SafeAreaView>





            // <SafeAreaView style={{ flex: 1, }} >
            //     <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
            //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            //         <RVText content="Home!" />
            //         <TouchableOpacity
            //             style={{ marginTop: 20 }}
            //             onPress={() => this.props.navigation.navigate('HomeDetail')}
            //         >
            //         <RVText content=" Do Home Detail" />
            //         </TouchableOpacity>
            //     </View>
            // </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#F5FCFF"

    },
    divtheme:{
        height:42,
        borderBottomWidth:3,
        padding:10,
        borderColor:'#c2191c',
        backgroundColor:'#D3DCE3'
      },
      divtheme2:{
        height:41,
        // borderBottomWidth:2,
        borderColor:'#c2191c',
        padding:10,
        backgroundColor:'white'
      },
    categories:{
        backgroundColor:'rgb(176, 224, 230)',
        padding:10,
        borderColor:"red",
        borderTopWidth:3

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
    }
})