import React, { useState, useEffect } from "react";
import { Pressable, Text, View, ImageBackground, ScrollView, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Screen2({ navigation }) {

    const totalLevels = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
        62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, ''
    ]
    const [levelNo, setLevelNo] = useState(0)

    const [skip, storeSkip] = useState([])

    // const arr = []

    // store level
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@levelNo')
            if (value !== null) {

                setLevelNo(parseInt(value) + 1)
            }
            else {

                setLevelNo(1)

            }
        } catch (e) {
            // console.log('value no found')
        }
    }

    const getSkip = async () => {
        try {
            //return jsonValue != null ? JSON.parse(jsonValue) : null;
            const jsonValue = await AsyncStorage.getItem('@storeSkip')
            if (jsonValue !== null) {
                console.log(JSON.parse(jsonValue))

                storeSkip(JSON.parse(jsonValue))
            }
            else {
                storeSkip([])
            }
        } catch (e) {
            // console.log('value no found')
        }
    }



    useEffect(() => {
        getData()
        getSkip()
    }, [])


    const btnStyle = {
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 10,
        width: 80,
        marginBottom: 10
    }

    const btnText = {
        fontSize: 30,
        borderColor: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 15,
        paddingBottom: 15
    }
    const btnLevelClick = (no) => {
        //console.log(no)
        navigation.navigate('Game', { levelNo: no })
    }
    return (
        <>

            <View style={{ flex: 1 }}>
                <ImageBackground source={require('./image/background.jpg')} style={{ height: '100%', }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, color: 'blue', fontWeight: '600', fontStyle: 'italic' }}>Select Puzzle</Text>
                    </View>
                    <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-evenly', }}>
                        <ScrollView>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: 50 }}>
                                {
                                    totalLevels.map((item) => {
                                        console.log(skip.includes(item))
                                        return (

                                            (item < levelNo && !skip.includes(item)) ?
                                                <Pressable style={btnStyle} onPress={() => { btnLevelClick(item) }}>
                                                    <ImageBackground source={require('./image/tick.png')}>
                                                        <Text style={btnText}>{item}</Text>
                                                    </ImageBackground>
                                                </Pressable>
                                                : (item == levelNo || skip.includes(item)) ?

                                                    <Pressable style={btnStyle} onPress={() => { btnLevelClick(item) }} >

                                                        <Text style={btnText}>{item}</Text>

                                                    </Pressable>
                                                    :
                                                    <Pressable style={btnStyle} onPress={() => { btnLevelClick(item) }} disabled={true}>
                                                        <ImageBackground source={require('./image/lock.png')}>
                                                            <Text style={btnText}></Text>
                                                        </ImageBackground>
                                                    </Pressable>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>

            </View>
        </>
    )
}

export default Screen2;