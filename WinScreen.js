import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, Image, Pressable } from "react-native";

function WinScreen({ route, navigation }) {



    // store data

    const { levelNo } = route.params;

    const ClickMainmenu = () => {
        navigation.navigate('Home')
    }

    const ClickContinue = () => {
        // : <== key 
        navigation.navigate('Game', { levelNo: levelNo + 1 })
    }
    return (
        <>
            <View>
                {/* top header */}
                <View style={{ marginTop: 5 }}>
                    <Text style={{ color: 'blue', fontSize: 30, fontStyle: 'italic', fontWeight: '600', textAlign: 'center' }}>PUZZLE {levelNo} COMPLETED </Text>
                </View>

                {/* win image */}
                <View style={{ marginTop: 15 }}>
                    <Image resizeMode='stretch' source={require('./image/trophy.png')} style={{ alignSelf: 'center', width: 200, height: 250 }}></Image>
                </View>

                <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}>
                    <Pressable onPress={ClickContinue}>
                        <Text style={{
                            fontSize: 30, textAlign: 'center', margin: 10, backgroundColor: '#C0C0C0',
                            padding: 5, borderRadius: 10
                        }} >CONTINUE</Text>
                    </Pressable>


                    <Pressable onPress={ClickMainmenu}>
                        <Text style={{
                            fontSize: 30, textAlign: 'center', margin: 10, backgroundColor: '#C0C0C0',
                            padding: 5, borderRadius: 10
                        }} >MAIN MENU</Text>
                    </Pressable>

                    <Pressable>
                        <Text style={{
                            fontSize: 30, textAlign: 'center', margin: 10, backgroundColor: '#C0C0C0',
                            padding: 5, borderRadius: 10
                        }}>BUY PRO</Text>
                    </Pressable>

                </View>

                {/* bottom header */}
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: 'blue', fontSize: 30, fontStyle: 'italic', fontWeight: '600', textAlign: 'center' }}>SHARE THIS PUZZLES</Text>
                </View>
                {/* Share icon */}
                <View style={{ alignSelf: 'center', marginTop: 10, backgroundColor: '#C0C0C0', borderRadius: 20 }}>
                    <Image resizeMode="stretch" source={require('./image/shareus.png')} style={{ width: 40, height: 40, margin: 10 }}></Image>
                </View>

            </View>
        </>
    )
}

export default WinScreen;