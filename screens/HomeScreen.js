import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MyIconIon from 'react-native-vector-icons/Ionicons';
import React, { createContext, useEffect, useState } from "react";
export var ListOrderContext = createContext();
export var Items = createContext();
export default function HomeScreen( {navigation} ) {
    const [data, setData] = useState([]);
    const [dataTemp, setDataTemp] = useState([]);
    const [listOrder, setListOrder] = useState([]);

    ListOrderContext = createContext({ listOrder: listOrder });
    function addList(index, item) {
        var obj = item;
        obj["soLuong"] = "1";
        setListOrder([...listOrder, obj]);
        // setDataTemp([...dataTemp, item]);
        // console.log("fbi:", dataTemp);
        navigation.navigate('DetailScreen', {product: item})
      }

    useEffect(() => {
        getListProducts();
    }, [])

    const getListProducts = () => {
        const apiURL = "https://636c7f0bad62451f9fcbae43.mockapi.io/products";
        fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
            setData(resJson)
        }).catch((error) => {
            console.log("Error: ", error);
        })
    }


    

    return (
        
            <View style={styles.container}>
                 <ListOrderContext.Provider
                value={{ listOrder: listOrder }}
              ></ListOrderContext.Provider>
                <View style={styles.header}>
                    {/* {
                         data.forEach((n) => {
                            console.log("alo image: ", n.danhSachMau.image1)
                        })
                    } */}
                    <TouchableOpacity >
                        <MyIcon style={styles.iconStyle} name='menu' />
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                    <TouchableOpacity onPress={() => navigation.navigate("Review")}>
                        <Text style={styles.titleLaelViewAll}>Review all</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.titleList}>
                    <FlatList
                        data={data}
                        horizontal={true}
                        keyExtractor={(item,index) => index}
                        renderItem={({ item, index }) => (
                            <View style={styles.itemTile}>
                                <View style={styles.itemTitleImg}>
                                        <Image  source={{uri: item.anhHang}} style={{width: 30, height: 30, resizeMode: "contain"}}/>
                                </View>
                                <Text style={styles.itemTitleName}>{item.tenHang}</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.titleProductBoder}>
                    <Text style={styles.titleProduct}>New Arraival</Text>
                    <TouchableOpacity>
                        <Text style={styles.titleProductViewAll}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView nestedScrollEnabled>
                <View style={styles.productList}>
                   

                   
                    <FlatList
                        data={data}
                        numColumns={2}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        keyExtractor={(item,index) => index}
                        renderItem={({ item, index }) => {
                            return (
                            <TouchableOpacity style={styles.itemProduct} onPress={() => {addList(index, item)}} >
                                <MyIconIon style={styles.itemProductIcon} name='heart-outline' />
                                <View>
                                    <Image style={styles.itemProductImg} source={{uri: item.anhSanPham}}/>
                                </View>
                                <View style={styles.itemProductRating}>
                                    <MyIcon style={styles.itemProductIconS} name='star' />
                                    <Text style={styles.itemProductRate}>{item.danhGia}</Text>
                                </View>
                                <Text style={styles.itemProductName}>{item.tenSanPham}</Text>
                                <Text style={styles.itemProductPrice}>${item.donGia}</Text>
                            </TouchableOpacity>
                            )
                        }}
    
                    />
              
                </View>
                </ScrollView>               
            </View>
 
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
        paddingRight: 15,
        marginVertical:10,
    },
    iconStyle: {
       
        fontSize: 30,
        // borderWidth: 1,
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
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
        // resizeMode: "contain"
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
        backgroundColor: 'rgba(194, 145, 108, 0.2)',
        marginLeft: 14,
        // margin:10,
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
        height: 100,
        alignSelf: 'center',
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
