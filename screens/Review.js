import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MyIconTwo from 'react-native-vector-icons/MaterialCommunityIcons';
import temp from '../img/temp.png'

export default function Review() {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  >
                    <MyIcon style={styles.iconStyleS} name='arrow-back' />
                </TouchableOpacity>
                <View style={styles.reviewTxtBorder}>
                    <Text style={styles.reviewTxt}>Reviews</Text>
                </View>
            </View>

            <View style={styles.reviewInfo}>
                <View style={styles.reviewInfoVal}>
                    <Text style={styles.reviewInfoValNum}>230 Reviews</Text>
                    <View style={styles.reviewInfoValNumStarBoder}>
                        <Text style={styles.reviewInfoValNumStar}>5.0</Text>
                        <Rating
                            type="star"
                            ratingCount={5}
                            imageSize={18}
                            readonly
                            startingValue={3.5}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.reviewInfoBtnAdd}>
                    <MyIconTwo style={styles.reviewInfoIconBtnAdd} name='lead-pencil' />
                    <Text style={styles.reviewInfoTxtBtnAdd}>Add Review</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listReview}>
                

                <View style={styles.itemReview}>
                    <View style={styles.infoPeople}>
                        <View style={styles.infoPeopleVal}>
                            <Image style={styles.infoPeopleValImg} source={temp} />
                            <View style={styles.infoPeopleValX}>
                                <Text style={styles.infoPeopleValTxt}>Name</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <MyIconTwo style={styles.infoPeopleValTxtTime}  name='clock-outline'/>
                                    <Text style={styles.infoPeopleValTxtTime}>time</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoPeopleValRating}>
                            <View style={styles.infoPeopleValRatingNum}>
                                <Text style={styles.infoPeopleValRatingNumVal}>5.0</Text>
                                <Text style={{ color: 'grey' }}>rating</Text>
                            </View>
                            <Rating
                                type="star"
                                ratingCount={5}
                                imageSize={12}
                                readonly
                                startingValue={3.5}
                            />
                        </View>
                    </View>
                    <Text style={styles.comment}>One of my friends showed me this Star Rating feature in Bootstrap and it looks really interesting. So I challenged myself to re-implement it in React Native.</Text>
                </View>


                <View style={styles.itemReview}>
                    <View style={styles.infoPeople}>
                        <View style={styles.infoPeopleVal}>
                            <Image style={styles.infoPeopleValImg} source={temp} />
                            <View style={styles.infoPeopleValX}>
                                <Text style={styles.infoPeopleValTxt}>Name</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <MyIconTwo style={styles.infoPeopleValTxtTime}  name='clock-outline'/>
                                    <Text style={styles.infoPeopleValTxtTime}>time</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoPeopleValRating}>
                            <View style={styles.infoPeopleValRatingNum}>
                                <Text style={styles.infoPeopleValRatingNumVal}>5.0</Text>
                                <Text style={{ color: 'grey' }}>rating</Text>
                            </View>
                            <Rating
                                type="star"
                                ratingCount={5}
                                imageSize={12}
                                readonly
                                startingValue={3.5}
                            />
                        </View>
                    </View>
                    <Text style={styles.comment}>One of my friends showed me this Star Rating feature in Bootstrap and it looks really interesting. So I challenged myself to re-implement it in React Native.</Text>
                </View>


            </View>

            


        </View>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20
    },
    iconStyle: {
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 90,
        padding: 10,
        backgroundColor: '#e6e6e6',
    },
    iconStyleS: {
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 90,
        padding: 10,
        backgroundColor: '#D9D9D9',
    },
    reviewTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    reviewTxtBorder: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },


    reviewInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    reviewInfoVal: {

    },
    reviewInfoValNum: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    reviewInfoValNumStarBoder: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    reviewInfoValNumStar: {
        marginRight: 10
    },

    reviewInfoBtnAdd: {
        flexDirection: 'row',
        backgroundColor: '#278AE4',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15
    },
    reviewInfoIconBtnAdd: {
        color: 'white',
        fontSize: 20,
        marginRight: 10
    },
    reviewInfoTxtBtnAdd: {
        color: 'white',
        fontSize: 15
    },


    listReview: {
        width: '100%',
        height: 520,
        marginTop:40
    },
    itemReview: {
        width:'100%',
        marginBottom:30
    },
    infoPeople: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    infoPeopleVal: {
        flexDirection:'row',
    },
    infoPeopleValX: {
        marginLeft:20
    },
    infoPeopleValTxt: {
        fontSize:20,
        fontWeight:'bold'
    },
    infoPeopleValTxtTime: {
        color:'grey',
        marginLeft:5
    },
    infoPeopleValImg: {
        width: 50,
        height: 50,
        borderRadius: 90,
        marginLeft:20,
        borderWidth:1,
        borderColor:'grey'
    },
    infoPeopleValRating: {
        marginRight:20,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    infoPeopleValRatingNumVal: {
        fontWeight:'bold',
        fontSize:12,
        marginRight:5
    },
    infoPeopleValRatingNum: {
        flexDirection:'row'
    },
    comment:{
       alignSelf:'flex-start',
       marginLeft:20,
       marginRight:20,
        color:'grey',
        fontSize:13,
        marginTop:14,
        
    }
});
