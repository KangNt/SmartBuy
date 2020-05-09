import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import { SearchBar } from 'react-native-elements';
import { CustomHeader } from '../index'
import { ScrollView } from 'react-native-gesture-handler';
var { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

export class AllProductsNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //api
            loading: false,
            products: [],
            wait_for_reloading: true,
            search: ''

        }
    }
    componentDidMount() {
        fetch('https://smartbuy01.gq/api/products')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    wait_for_reloading: false,
                    products: res

                })
            })
            .catch((error) => {
                console.error(error);
            });

    }

    renderPro(item) {
        return (
            <TouchableOpacity style={{ position: 'relative' }} onPress={() => this.props.navigation.navigate('HomeDetail', { product: item })}>
                <View style={styles.container1}>
                    <Image style={styles.photo} source={{ uri: item.image }} />
                    <Text style={styles.title1}>{item.name}</Text>
                    <Text style={styles.category}>{item.price} VNĐ</Text>
                </View>
            </TouchableOpacity>

        );
    }
    PulltoRefresh = () => {
        this.setState({
            loading: true
        })
        fetch('https://smartbuy01.gq/api/products')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    loading: false,
                    products: res

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const data = this.state.products
        const searchPros = data.filter((item) => {
            const itemData = item.name.toUpperCase()
            return itemData.indexOf(this.state.search.toUpperCase()) > -1

        })
        return (

            <SafeAreaView style={{ flex: 1, }}>
                <CustomHeader title="Danh sách sản phẩm" navigation={this.props.navigation} />
                <SearchBar platform="android" containerStyle={{ height: 40, width: width, justifyContent: "center" }} inputStyle={{ fontSize: 15, }}
                    placeholder="Search..."
                    onChangeText={val => this.setState({ search: val })}
                    value={this.state.search}
                />
                {this.state.wait_for_reloading ?
                    <ActivityIndicator animating={true} style={{ marginTop: 50 }} size={50} color="#61dafb">
                    </ActivityIndicator>
                    :
                    <ScrollView refreshControl={
                        <RefreshControl
                            onRefresh={this.PulltoRefresh}
                            refreshing={this.state.loading}
                        />
                    }
                        style={{ flex: 1 }}
                        showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            {this.state.search != '' ?
                                <Text
                                    style={searchPros == '' ? { display: "none" } : { textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#677ba6" }}>
                                    Kết quả tìm kiếm cho: "{this.state.search}"
                                </Text>

                                :
                                null
                            }
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                {searchPros == ''
                                    ?
                                    <Text
                                        style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#677ba6", }}>
                                        Không tìm thấy sản phẩm
                                        </Text>
                                    :
                                    null

                                }
                            </View>

                            <FlatList data={searchPros} numColumns={2}
                                renderItem={({ item }) => this.renderPro(item)}
                                keyExtractor={(item, index) => index.toString()}>
                            </FlatList>
                        </View>
                    </ScrollView>
                }
            </SafeAreaView>
        )
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
        },


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
        borderRadius: 15,

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
    title1: {
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
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: "white",
        flexBasis: '47%',
        marginHorizontal: 5,
        borderRadius: 15
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
    /******** card components **************/
    title: {
        fontSize: 18,
        flex: 1,
    },
    price: {
        fontSize: 16,
        color: "green",
        marginTop: 5
    },
    buyNow: {
        color: "purple",
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: 5,

    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})