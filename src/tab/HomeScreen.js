import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { CustomHeader } from '../index'
// import { RVText } from '../core/RVText'


// import Card from '../../components/Card/Card';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

]

export class HomeScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, }} >
                <CustomHeader title="Home" isHome={true} navigation={this.props.navigation} />
                <View style={StyleSheet.container}>
                    <ScrollView>
                        <TouchableOpacity>
                            <Card title="CARD WITH DIVIDER">
                                {
                                    users.map((u, i) => {
                                        return (
                                            <View key={i} style={styles.user}>
                                                <Image
                                                    style={styles.image}
                                                    resizeMode="cover"
                                                    source={{ uri: u.avatar }}
                                                />
                                                <Text style={styles.name}>{u.name}</Text>
                                            </View>
                                        );
                                    })
                                }
                            </Card>
                            </TouchableOpacity>

                                <TouchableOpacity>
                            <Card containerStyle={{ padding: 0 }} >
                                {
                                    users.map((u, i) => {
                                        return (
                                            <ListItem
                                                key={i}
                                                roundAvatar
                                                title={u.name}
                                                avatar={{ uri: u.avatar }}
                                            />
                                        );
                                    })
                                }
                            </Card>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <Card
                                title='HELLO WORLD'
                                image={require('../images/Linh.jpg')}>
                                <Text style={{ marginBottom: 10 }}>
                                    The idea with React Native Elements is more about component structure than actual design.</Text>
                                <Button
                                    icon={<Icon name='code' color='#ffffff' />}
                                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                    title='VIEW NOW' />
                            </Card>
                            </TouchableOpacity>

                    </ScrollView>

                </View>

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
        // flex:1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#F5FCFF"

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
            width: 3,
            height: 3
        }

    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    cardText: {
        padding: 10,
        fontSize: 16
    }
})