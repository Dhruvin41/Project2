import React from "react";
import { Button, Text, Pressable } from "react-native";
const Example = (props) => {
    return (
        <>
            {/* <Text style={{fontSize:30,color:'red'}}>{props.name} - {props.email}</Text> */}
            <Pressable onPress={() => { props.myFunc(props.index, props.value) }}>
                <Text style={{
                    borderWidth: 3, textAlign: 'center', padding: 10, fontSize: 35, width: 70, backgroundColor: '#CFF5E7',
                    color: '#000000', fontWeight: '600', flex:1
                }}>{props.value}</Text>
            </Pressable>
        </>
    )
}
export default Example;