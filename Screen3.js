import React, { useEffect, useState } from "react";
import { View, Pressable, ImageBackground, Text, TextInput, Alert, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
function Screen3({ route, navigation }) {


    // value pass screen2 to screen3
    const { levelNo } = route.params;

    // const { AnsMul } = route.params;

    const [num, setNum] = useState('')

    const [cnt, update] = useState(0)

    const [score, setScore] = useState(0)
    const [skipped, setSkipped] = useState([])

    // const [cntSkip , setcntSkip] = useState(0)






    // const [levelNo, setLevelNo] = useState(3)

    const btnOne = (txt) => {
        setNum(parseInt(num + txt))
        // setNum(Pressable)
        // Alert.alert("txt")
    }

    // level store 
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@levelNo', value.toString())
            console.log(levelNo)
        } catch (e) {
            // saving error
        }

    }

    // skip store
    const storeSkip = async (value) => {
        try {
            setSkipped([...skipped, parseInt(value)])
            const jsonValue = JSON.stringify(skipped)
            await AsyncStorage.setItem('@storeSkip', jsonValue)
        } catch (e) {
            // saving error
        }
    }


    // remove element

    const storeSkip2 = async () => {
        try {

            // console.log("Skipped removed");
            // console.log(skipped)
            const jsonValue = JSON.stringify(skipped)
            await AsyncStorage.setItem('@storeSkip', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getSkip = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storeSkip')
            console.log(jsonValue)
            if (jsonValue !== null) {
                setSkipped(JSON.parse(jsonValue))

                // setSkipped(setSkipped.splice(jsonValue, 1))
                // console.log(setSkipped)

            }
            else {
                setSkipped([])
            }
        } catch (e) {
            // console.log('value no found')
        }
    }


    useEffect(() => {
        getSkip();
    }, [])




    // answer
    const trueAns = [10, 25, 6, 14, 128, 7, 50, 1025, 100, 3, 212, 3011, 14, 16, 1, 2, 44, 45, 625, 1, 13, 47, 50, 34, 6, 41, 16, 126, 82, 14, 7, 132, 34,
        48, 42, 288, 45, 4, 111, 47, 27, 87, 22, 253, 12, 48, 178, 1, 6, 10, 2, 20, 7, 5, 143547, 84, 11, 27, 3, 5, 39, 31, 10, 130, 22, 3, 14, 42, 164045, 11, 481, 86, 84, 13, 8]

    const AnsHint = ['sum', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

    // img array
    const puzzleData = [
        require('./image/p1.png'),
        require('./image/p2.png'),
        require('./image/p3.png'),
        require('./image/p4.png'),
        require('./image/p5.png'),
        require('./image/p6.png'),
        require('./image/p7.png'),
        require('./image/p8.png'),
        require('./image/p9.png'),
        require('./image/p10.png'),

        require('./image/p11.png'),
        require('./image/p12.png'),
        require('./image/p13.png'),
        require('./image/p14.png'),
        require('./image/p15.png'),
        require('./image/p16.png'),
        require('./image/p17.png'),
        require('./image/p18.png'),
        require('./image/p19.png'),
        require('./image/p20.png'),

        require('./image/p21.png'),
        require('./image/p22.png'),
        require('./image/p23.png'),
        require('./image/p24.png'),
        require('./image/p25.png'),
        require('./image/p26.png'),
        require('./image/p27.png'),
        require('./image/p28.png'),
        require('./image/p29.png'),
        require('./image/p30.png'),


        require('./image/p31.png'),
        require('./image/p32.png'),
        require('./image/p33.png'),
        require('./image/p34.png'),
        require('./image/p35.png'),
        require('./image/p36.png'),
        require('./image/p37.png'),
        require('./image/p38.png'),
        require('./image/p39.png'),
        require('./image/p40.png'),

        require('./image/p41.png'),
        require('./image/p42.png'),
        require('./image/p43.png'),
        require('./image/p44.png'),
        require('./image/p45.png'),
        require('./image/p46.png'),
        require('./image/p47.png'),
        require('./image/p48.png'),
        require('./image/p49.png'),
        require('./image/p50.png'),

        require('./image/p51.png'),
        require('./image/p52.png'),
        require('./image/p53.png'),
        require('./image/p54.png'),
        require('./image/p55.png'),
        require('./image/p56.png'),
        require('./image/p57.png'),
        require('./image/p58.png'),
        require('./image/p59.png'),
        require('./image/p60.png'),

        require('./image/p61.png'),
        require('./image/p62.png'),
        require('./image/p63.png'),
        require('./image/p64.png'),
        require('./image/p65.png'),
        require('./image/p66.png'),
        require('./image/p67.png'),
        require('./image/p68.png'),
        require('./image/p69.png'),
        require('./image/p70.png'),

        require('./image/p71.png'),
        require('./image/p72.png'),
        require('./image/p73.png'),
        require('./image/p74.png'),
        require('./image/p75.png'),

    ]


    const btnCle = () => {
        setNum(num.toString().substring(0, num.toString().length - 1))
    }


    // submit 

    const btnSubmit = () => {

        //  num == 10[1]  
        if (num == trueAns[levelNo - 1]) {
            //remove element
            setSkipped(skipped.filter((element) => {
                return element != levelNo
            }))

            storeData(levelNo);
            console.log("Answer Matched")

            setScore(score + 10)
            setNum('')
            navigation.navigate('Result', { levelNo: levelNo })

        } else {
            // console.log("Sorry")

            Alert.alert('Sorry')
            setScore(score - 10)

        }

    }


    const bottomBtn = {
        paddingHorizontal: 8,
        paddingVertical: 4, alignSelf: 'center',
        fontSize: 25,
        textAlign: "center",
        backgroundColor: "#434242",
        color: "#FCFDF2",
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10
    }

    const ClickSkip = () => {
        Alert.alert('Are you sure you want to skip this level? ')
        navigation.navigate('Game', { levelNo: levelNo + 1 })
        storeSkip(levelNo);
        // console.log(levelNo)
    }


    const ClickHint = () => {
        // console.log('dk')
        Alert.alert(AnsHint[levelNo - 1])
        update(cnt + 1);

    }



    useEffect(() => {
        storeSkip2()
    }, [skipped])


    return (
        <>
            <View>
                <ImageBackground resizeMode="stretch" source={require('./image/gameplaybackground.jpg')} style={{ height: '100%' }}>
                    <View style={{ marginTop: 20, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                        <View>
                            <Pressable onPress={ClickSkip}>
                                <Image source={require('./image/skip.png')} style={{ height: 50, width: 50 }}>
                                </Image>
                            </Pressable>
                        </View>

                        <View>
                            <ImageBackground resizeMode='stretch' source={require('./image/level_board.png')} style={{ height: 90, width: 240, alignSelf: 'center', justifyContent: "center" }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={{
                                        fontSize: 40, textAlign: 'center', alignSelf: 'center', color: 'black',
                                        fontStyle: 'italic', fontWeight: '700'
                                    }}>Puzzle {levelNo}</Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View>
                            <Pressable onPress={() => { ClickHint() }}>
                                <Image source={require('./image/hint.png')} style={{ height: 50, width: 50 }}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ margin: 20 }}>
                        <ImageBackground resizeMode='stretch' source={puzzleData[levelNo - 1]} style={{ height: '80%', width: '100%' }}>
                        </ImageBackground>
                        <View style={{}}>
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#000000', backgroundColor: '#ffffff', padding: 2 }}>{score}</Text>
                        </View>
                    </View>





                    <View style={{ bottom: 105, backgroundColor: 'black', height: '20%', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                            <View style={{ flex: 2, margin: 4 }}>
                                <Text style={{ borderWidth: 2, backgroundColor: "#FCFDF2", height: 40, borderRadius: 7, fontSize: 25, textAlign: 'center', color: 'black' }}>{num}</Text>
                            </View>
                            <View style={{ flex: 1, margin: 4 }}>
                                <Pressable onPress={() => { btnCle("CLR") }}>
                                    <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', borderColor: '#ffffff', borderWidth: 1, borderRadius: 20 }}>CLR</Text>
                                </Pressable>
                            </View>
                            <View style={{ flex: 1, margin: 4 }}>
                                <Pressable onPress={btnSubmit}>
                                    <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center', borderColor: '#ffffff', borderWidth: 1, borderRadius: 20 }}>SUBMIT</Text>
                                </Pressable>
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Pressable onPress={() => { btnOne("1") }} >
                                <Text style={bottomBtn}>1</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("2") }}>
                                <Text style={bottomBtn}>2</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("3") }}>
                                <Text style={bottomBtn}>3</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("4") }}>
                                <Text style={bottomBtn}>4</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("5") }}>
                                <Text style={bottomBtn}>5</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("6") }}>
                                <Text style={bottomBtn}>6</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("7") }}>
                                <Text style={bottomBtn}>7</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("8") }}>
                                <Text style={bottomBtn}>8</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("9") }}>
                                <Text style={bottomBtn}>9</Text>
                            </Pressable>

                            <Pressable onPress={() => { btnOne("0") }}>
                                <Text style={bottomBtn}>0</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        </>
    )
}
export default Screen3;