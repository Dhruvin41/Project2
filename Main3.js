import React, { useState } from "react";
import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
const Math3 = ({route, navigation}) => {


    // -----items param using----
    const { LevelNo } = route.params;

    const [num, setnum] = useState('')


    const btnpress = (text) => {
        setnum(parseInt(num + text))
    }



    //---img array---------
    const pazzledata = [
        require('./img/p1.png'),
    ]

    const clear = () => {
        setnum(num.toString().substring(0, num.toString().length - 1))

    }
    return (
        <>

            <View style={{}}>
                <ImageBackground resizeMode='stretch' source={require('./img/gameplaybackground.jpg')} style={{ height: '100%' }}>

                    <View style={{ alignItems: 'center', }}>
                        <View style={{ margin: 10 }}>
                            <ImageBackground resizeMode='stretch' source={require('./img/level_board.png')} style={{ height: 50, width: 200, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 30 }}>puzzel {LevelNo}</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <ImageBackground resizeMode='stretch' source={pazzledata[LevelNo - 1]} style={{ height: 300, width: 300 }}></ImageBackground>
                        </View>
                        <View style={{ backgroundColor: 'black', width: '100%', height: 120, marginTop: 100 }}>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <Text style={{ width: '50%', backgroundColor: 'white', height: 49, margin: 10, padding: 15 }}>{num}</Text>
                                <Pressable onPress={() => clear()}>
                                    <Text style={{ backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 15, marginTop: 10 }}>c</Text>
                                </Pressable>
                                <Pressable>
                                    <Text style={{ backgroundColor: 'white', paddingHorizontal: 22, paddingVertical: 15, marginTop: 10, marginLeft: 5 }}>submit</Text>
                                </Pressable>
                            </View>
                            {/* -----button------- */}
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable onPress={() => btnpress('1')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>1</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('2')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>2</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('3')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>3</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('4')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>4</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('5')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>5</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('6')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>6</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('7')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>7</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('8')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>8</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('9')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>9</Text>
                                </Pressable>
                                <Pressable onPress={() => btnpress('0')}>
                                    <Text style={{ backgroundColor: 'black', borderColor: 'white', borderWidth: 1, padding: 15, color: 'white' }}>0</Text>
                                </Pressable>
                            </View>
                        </View>


                    </View>

                </ImageBackground>
            </View>

        </>
    )
}
export default Math3;