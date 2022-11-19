import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MyIconIon from 'react-native-vector-icons/Ionicons';

import imgTemp from '../Img/shoesTemp.png'


const tileData = [
    {
        'name': 'a'
    },
    {
        'name': 'abcsdfds'
    },
    {
        'name': 'asdf'
    },
    {
        'name': 'asf'
    }
]


export default function HomeScreen( {navigation} ) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity >
                        <MyIcon style={styles.iconStyle} name='menu' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MyIcon style={styles.iconStyle} name='shopping-cart' />
                    </TouchableOpacity>

                </View>
                <Text style={styles.logo}>Hemendra</Text>
                <Text style={styles.logoX}>Welcom to Laza</Text>

                <View style={styles.searchProduct}>
                    <View style={styles.minputBorder}>
                        <MyIcon style={{ fontSize: 45 }} name='search' />
                        <TextInput style={styles.myInput} placeholder='Search..' />
                    </View>
                    <View style={styles.voiceborder}>
                        <TouchableOpacity>
                            <MyIcon style={styles.voiceIcon} name='keyboard-voice' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.titleLabelBoder}>
                    <Text style={styles.titleLael}>Chose brand</Text>
                    <TouchableOpacity>
                        <Text style={styles.titleLaelViewAll}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleList}>
                    <FlatList
                        data={tileData}
                        horizontal={true}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.itemTile}>
                                <Image style={styles.itemTitleImg} source={imgTemp} />
                                <Text style={styles.itemTitleName}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.titleProductBoder}>
                    <Text style={styles.titleProduct}>Chose brand</Text>
                    <TouchableOpacity>
                        <Text style={styles.titleProductViewAll}>View all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.productList}>
                    <FlatList
                        data={tileData}
                        numColumns={2}
                        scrollEnabled={false}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.itemProduct}>
                                <MyIconIon style={styles.itemProductIcon} name='heart-outline' />
                                <TouchableOpacity  onPress={() => navigation.navigate('Detail')} >
                                    <Image style={styles.itemProductImg} source={imgTemp} />
                                </TouchableOpacity>
                                <View style={styles.itemProductRating}>
                                    <MyIcon style={styles.itemProductIconS} name='star' />
                                    <Text style={styles.itemProductRate}>5.0</Text>
                                </View>
                                <Text style={styles.itemProductName}>{item.name}</Text>
                                <Text style={styles.itemProductPrice}>$90</Text>
                            </View>
                        )}
                    />
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15
    },
    iconStyle: {
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 90,
        padding: 10,
        backgroundColor: '#e6e6e6',
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15
    },
    logoX: {
        fontSize: 15,
        marginLeft: 15,
        color: 'grey',
        marginBottom: 45,
    },
    searchProduct: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 30,
        flexDirection: 'row'

    },
    minputBorder: {
        backgroundColor: '#e6e6e6',
        width: '80%',
        borderRadius: 15,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    myInput: {
        width: '75%',
        fontSize: 20,
        marginLeft: 10
    },
    voiceborder: {
        width: '20%',
        backgroundColor: '#5791E7',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    voiceIcon: {
        fontSize: 45,
        color: 'white'
    },
    titleLabelBoder: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        alignItems: 'center',

    },
    titleLael: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleLaelViewAll: {
        color: 'grey'
    },
    titleList: {
        width: '100%',
        height: 60,
        marginTop: 20
    },
    titleProduct: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleProductBoder: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 15
    },
    titleProductViewAll: {
        color: 'grey'
    },

    itemTile: {
        height: 50,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        padding: 5,
        borderRadius: 15,

    },
    itemTitleImg: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5
    },
    itemTitleName: {
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold'
    },
    productList: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemProduct: {
        width: '46%',
        backgroundColor: 'white',
        marginLeft: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'grey'
    },
    itemProductIcon: {
        fontSize: 25,
        textAlign: 'right'
    },
    itemProductIconS: {
        fontSize: 20,
        color: 'FFA500',

    },
    itemProductImg: {
        width: 120,
        height: 150,
        alignSelf: 'center'
    },
    itemProductName: {
        fontSize: 22,
        color: 'grey',
        marginBottom: 5
    },
    itemProductPrice: {
        fontSize: 25,
        fontWeight: 'bold',

    },
    itemProductRate: {
        fontWeight: 'bold',
        marginLeft: 5
    },
    itemProductRating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
