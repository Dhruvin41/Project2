import React, { useState } from "react";

import { Button, Text, TextInput } from "react-native";
const Second = () => {
    const [a, setValofA] = useState(0)
    const [b, setValofB] = useState(0)
    const [c, setValofC] = useState(0)
    const addition = () => {
        x = parseInt(a) + parseInt(b)
        setValofC(x)
        // console.log('called')
    }
    return (
        <>
            <Text style={{ fontSize: 30, color: 'blue' }}>{c}</Text>
            {/* <Text style={{fontSize:30,color:'blue'}}>{a}</Text> */}
            <TextInput onChangeText={(txt) => { setValofA(txt) }} style={{ borderColor: 'red', borderWidth: 2 }}></TextInput>
            <TextInput onChangeText={(txt) => { setValofB(txt) }} style={{ borderColor: 'red', borderWidth: 2 }}></TextInput>
            <Button title="+" onPress={addition}></Button>
        </>
    )
}
export default Second;