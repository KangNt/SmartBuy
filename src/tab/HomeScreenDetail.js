import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import { TextInput } from 'react-native-paper';
export class HomeScreenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      product: {
        name: "Ch510-sony",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        created: "",
        images: [
          "https://salt.tikicdn.com/cache/w1200/ts/product/42/b3/30/9899385a6d821a948167cd1dd0eed190.jpg",
          "https://vcdn.tikicdn.com/ts/review/69/37/6b/527998850c75518c6cc4b733cdbdf16b.jpg",
          "https://vcdn.tikicdn.com/ts/review/b9/b9/7e/37d5eb931efbb1beca09aaafed4fc98d.jpg",
        ],
        colors: [
          "#00BFFF",
          "#FF1493",
          "#00CED1",
          "#228B22",
          "#20B2AA",
          "#FF4500",
        ]
      }
    };
  }

  __setImageSelected = (image) => {
    this.setState({ selectedImage: image });
  }

  __renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {this.state.product.images.map((prop, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => { this.__setImageSelected(prop) }}>
              <Image style={styles.smallImage} source={{ uri: prop }} />
            </TouchableOpacity>
          );
        })}
      </View>
    )
  }

  __renderColors = () => {
    return (
      <View style={styles.contentColors}>
        {this.state.product.colors.map((prop, key) => {
          return (
            <TouchableOpacity key={key} style={[styles.btnColor, { backgroundColor: prop }]}></TouchableOpacity>
          );
        })}
      </View>
    )
  }

  render() {
    var mainImage = (this.state.selectedImage) ? this.state.selectedImage : this.state.product.images[0];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{this.state.product.name}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{ uri: mainImage }} />
                </View>
                {this.__renderImages()}
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Colors</Text>
            </View>
            <View style={styles.cardContent}>
              {this.__renderColors()}
            </View>
          </View>
          
          <View style={styles.starContainer}>
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
              <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
            </View>
            

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Description</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.description}>{this.state.product.description}</Text>
            </View>
          </View>
          <View style={styles.card}>
          
          <TextInput
            label='comments'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            focused
            />
            
          </View>

          <View style={styles.card}>
            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.shareButton} onPress={() => this.clickEventListener()}>
                <Text style={styles.shareButtonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7",
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
  },
  mainImage: {
    width: 200,
    height: 200,
  },
  smallImagesContainer: {
    flexDirection: 'column',
    marginLeft: 30
  },
  smallImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3
  },
  contentColors: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 22,
    color: "#696969",
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold'
  },
  description: {
    fontSize: 18,
    color: "#696969",
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: "#00BFFF"
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 10
  },
  star: {
    width: 40,
    height: 40,
  },
});

{/* <TextInput
label='comments'
value={this.state.text}
onChangeText={text => this.setState({ text })}
focused
/>
import { TextInput } from 'react-native-paper'; */}


// import React, { Component } from 'react'

// import { Text, View, SafeAreaView } from 'react-native'
// import {CustomHeader} from '../index'
// export class HomeScreenDetail extends Component {
//     render() {
//         return (
//             <SafeAreaView style={{ flex: 1, }}>
//             <CustomHeader title="Home Detail" navigation={this.props.navigation} />
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//               <Text>Home Detail</Text>
//             </View>
//           </SafeAreaView>
//         )
//     }
// }

