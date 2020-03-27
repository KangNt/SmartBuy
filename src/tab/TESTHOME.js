import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image,ScrollView,ImageBackground,AsyncStorage, Dimensions, Button} from 'react-native'
import { CustomHeader } from '../index'
// import { RVText } from '../core/RVText'
import Card from '../../components/Card/Card';
import global from './global'
// import Swiper from 'react-native-swiper'
import { FlatList } from 'react-native-gesture-handler';
var {width,height} = Dimensions.get('window');
export class TESTHOME extends Component {
    constructor(props){
        super(props);
        this.state ={ 
         
          Getone:[],
          sliders:[],
          categories:[],
          selectCate:"",
          
          id:'',
            name:'',
            email:'',
            password:'',
            avatar:""
          
          
        }
       
            try {
               const val = AsyncStorage.multiGet(["email", "name",'avatar']).then(result => {
                    // alert(result[0][1]+" "+result[1][1])
                    // alert(result[2][1])
                    this.setState({
                      email:result[0][1],
                      name:result[1][1],
                      avatar:result[2][1],
                      
                    })
                    
                  }) 
                
             } catch (error) {
                 
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
    getInfo = async () => {
        try {
           AsyncStorage.multiGet(["email", "name",'avatar']).then(result => {
                alert(result[0][1]+" "+result[1][1])
                alert(result[2][1])
                this.setState({
                  email:result[0][1],
                  name:result[1][1],
                  avatar:result[2][1],
                  
                })
                
              }) 
         } catch (error) {
             
         }
      }
      Show(){
          alert('ho')
          
        
      }
    renderPro(item){
        if (this.state.selectCate==item.cate_id ||this.state.selectCate==0) {
            

                return(
                    
                    <TouchableOpacity style={styles.divListProduct} onPress={()=>this.props.navigation.navigate('HomeDetail',{product:item})}>
                        <Image
                            style={styles.imageProduct}
                            resizeMode="contain"
                            source={{uri:item.image}} />
                            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
                            <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>
                            {item.name}
                            </Text>
                            <Text>Descp Food and Details</Text>
                            <Text style={{fontSize:20,color:"green"}}>{item.price}</Text>
                    </TouchableOpacity>
                    
                )
        }
        
        
    }
    
    render() {
        
        const {email} = this.props.route.params  
      
        
        return (
            <SafeAreaView style={{ flex: 1,flexDirection:"column" }} >
                <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={{flex:1}}>
                    <View style={{height:150}}>
                         <Text>{email}</Text>
                        {/* <Swiper>{this.state.Getone.map( (Item) =>{
                            return(
                               
                                <ImageBackground style={{width:width,height:150}} source={{uri:Item.image}} >
                                    <Text style={styles.text}>{Item.name}</Text>
                                </ImageBackground>
                            )

                            })}
                        </Swiper> */}
                    </View>
                        
                        <FlatList data={this.state.categories.category} horizontal={true}
                            
                            renderItem={({item}) =>
                                <TouchableOpacity onPress={()=>this.setState({selectCate:item.id})}>
                                    <View style={this.state.selectCate==item.id ? styles.divtheme : styles.divtheme2}>
                                        
                                        <Text>{item.cate_name}</Text>
                                    </View>
                                </TouchableOpacity>
                            }>
                                
                        </FlatList>
                      <View>
                        <FlatList data={this.state.categories.product} numColumns={2}
                            renderItem={({item}) => this.renderPro(item)}
                            keyExtractor = { (item,index) => index.toString() }>
                        
                        </FlatList>
                        <View style={{height:20}} />
                    </View>  
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

      imageProduct:{
        width:((width/2)-20)-20,
        height:((width/2)-20)-40,
        backgroundColor:'transparent',
        position:'absolute',
        top:-25
      },
      divListProduct:{
        width:(width/2)-25,
        padding:10,
        borderRadius:10,
        marginTop:25,
        marginBottom:5,
        marginLeft:15,
        alignItems:'center',
        elevation:8,
        shadowOpacity:0.3,
        shadowRadius:50,
        backgroundColor:'white',
      },
    container: {
        marginTop: 10,
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