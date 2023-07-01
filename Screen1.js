import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Pressable, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Screen1({ route, navigation }) {

    // const { levelNo } = route.params;

    const [levelNo,setLevelNo] = useState(0)

    const btnStyle = {
        width: 200,
        alignSelf: 'center',
        // backgroundColor:'white',
        marginVertical: 20,

    }
    const btnText = {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#ffffff'
    }

    const TopHeader = {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        fontStyle: 'italic',
        color: 'blue'
    }
    
// getdata to screen3
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@levelNo')
            if (value !== null) {
                // console.log("Found = "+value)
                setLevelNo(parseInt( value)+1)
            }
            else {
                setLevelNo(1)
                // console.log('value no exist')
            }
        } catch (e) {
            // error reading value
            // console.log('value no found')
        }
    }

    
    useEffect(()=>{
        //storeData("1")
        getData()
    },[])


    const onLevelClick = () => {
        navigation.navigate('Level')
    }

    const onContinueBtnClick = () => {
        navigation.navigate('Game',{ levelNo: levelNo })
    }
    return (


        <>
            <View style={{}}>
                <ImageBackground source={require('./image/background.jpg')} style={{ height: '100%', justifyContent: 'center' }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={TopHeader}>Math Puzzles</Text>
                    </View>
                    <View style={{ height: '70%', width: '90%', alignSelf: 'center', }}>
                        <ImageBackground resizeMode='stretch' source={require('./image/blackboard_main_menu.png')} style={{ height: '100%' }} >
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Pressable onPress={() => {onContinueBtnClick()}} style={[btnStyle, {}]}>
                                    <Text style={btnText}>CONTINUE</Text>
                                </Pressable>

                                <Pressable onPress={onLevelClick} style={[btnStyle]}>
                                    <Text style={btnText}>PUZZLES</Text>
                                </Pressable>

                                <Pressable style={[btnStyle]}>
                                    <Text style={btnText}>BUY PRO</Text>
                                </Pressable>
                            </View>
                        </ImageBackground>
                    </View>


                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                                <View>
                                    <Text style={{ left: 10, color: 'blue', paddingBottom: 4 }}>AD</Text>

                                </View>

                                <Image resizeMode="stretch" source={require('./image/ltlicon.png')} style={{ height: 60, width: 60 }}></Image>
                            </View>
                        </View>

                        <View style={{ left: 215 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Image resizeMode='stretch' source={require('./image/shareus.png')} style={{ height: 40, width: 40, }}></Image>
                                </View>
                                <View>
                                    <Image resizeMode='stretch' source={require('./image/emailus.png')} style={{ height: 40, width: 40, }}></Image>
                                </View>
                            </View>
                        </View>

                    </View>



                </ImageBackground>
            </View>
        </>
    )
}
export default Screen1;