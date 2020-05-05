import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView,
  FlatList,
  Button,
  SafeAreaView,
  Dimensions
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import { CustomHeader } from '../index'
import { Comments } from '../drawer'
var { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;
export class CategoryDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cate: ''
    }
  }
  renderPro(item) {

    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
        <View style={styles.container1}>
          <Image style={styles.photo} source={{ uri: item.image }} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.category}>{item.price}</Text>
        </View>
      </TouchableHighlight>
    )


  }
  render() {
    const { category } = this.props.route.params
    fetch('https://smartbuy01.gq/api/categories/category/detail/' + category.id)
      .then((req001) => req001.json()).
      then((req001) => {
        this.setState({
          cate: req001

        })
        console.log(this.state.cate)
      })
      .catch((error) => {
        console.error(error);
      });
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title={category.cate_name} cart={false} navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          <FlatList data={this.state.cate} numColumns={2}
            renderItem={({ item }) => this.renderPro(item)}
            keyExtractor={(item, index) => index.toString()}>
          </FlatList>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  imageProduct: {
    width: ((width / 2) - 20) - 20,
    height: ((width / 2) - 20) - 40,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -25
  },
  divListProduct: {
    width: (width / 2) - 25,
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 5,
    marginLeft: 15,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5FCFF"

  },
  divtheme: {
    height: 42,
    borderBottomWidth: 3,
    padding: 10,
    borderColor: '#c2191c',
    backgroundColor: '#D3DCE3'
  },
  divtheme2: {
    height: 41,
    // borderBottomWidth:2,
    borderColor: '#c2191c',
    padding: 10,
    backgroundColor: 'white'
  },
  categories: {
    backgroundColor: 'rgb(176, 224, 230)',
    padding: 10,
    borderColor: "red",
    borderTopWidth: 3

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
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    // fontFamily: 'FallingSky',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
})
