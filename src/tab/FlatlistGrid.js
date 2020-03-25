import React, { Component } from 'react'

import { StyleSheet, Text, View,FlatList ,Dimensions} from 'react-native'

const dataList = [{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'}]

const   numColumns = 2

const WIDTH = Dimensions.get('window').width
export class FlatlistGrid extends Component{


    formatData =(data,numColumns) => {
        const totalRows = Math.floor(data.length /numColumns)
        let totalLastRow = dataList.length - (totalRows * numColumns)

        while (totalLastRow !== 0 && totalLastRow !== numColumns){
            dataList.push({key: 'blank', emty: true})
            totalLastRow++
        }
    }
    _renderItem = ({itemStyle,index}) =>{

        let {itemStyle, itemText} = styles
        if(item.empty){
            return <View style={[itemStyle,itemInvisible]}/>
        }
        return(
            <View style={itemStyle}>
                <Text style={itemText}>{item.key}</Text>
            </View>
        )
    }
    render(){
        let{ container ,itemText} = styles
        return(
    <View style={container}> 
        <FlatList
            data={this.formatData(dataList,numColumns)}
            renderItem={this._renderItem}
            keyExtractor={(item,index) =>index.toString()}
            numColumns={numColumns}
        />
            {/* <Text style={itemText}> Flatlist Grid</Text> */}
    </View>

        )
            
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
     paddingTop:40

    },

    itemText:{
        color:"#fff",
        fontSize:30
    },
    itemStyle:{
        backgroundColor:'#3232ff',
        alignItems:'center',
        justifyContent:'center',
        height:100,
        flex:1,
        margin:1,
        height : WIDTH / numColumns

    },
    itemInvisible:{
        backgroundColor: 'transparent'
    }
});