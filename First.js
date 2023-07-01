import React from "react";
import { Alert, Button, Pressable, Text, Touchable, View } from "react-native";
function First(){
    const btnClick = ()=>{
        Alert.alert("Clicked")
    }
    const btnClickNew = (param)=>{
        Alert.alert(param)
    }
    return(
        <>
            <Text style={{fontSize:30,color:'red'}}>This is First Component</Text>
            <Button title="Click Me" onPress={btnClick}></Button>
            <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:'yellow',flex:1,margin:10}}>
                    <Pressable onPress={()=>{btnClickNew("First Clicked")}}>
                        <Text style={{fontSize:30,textAlign:'center'}}>First</Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor:'aqua',flex:1,margin:10}}>
                    <Pressable onPress={()=>{btnClickNew("two Clicked")}}>
                        <Text style={{fontSize:30,textAlign:'center'}}>First</Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor:'yellow',flex:1,margin:10}}>
                    <Pressable onPress={()=>{btnClickNew("three Clicked")}}>
                        <Text style={{fontSize:30,textAlign:'center'}}>First</Text>
                    </Pressable>
                </View>
                {/* <Pressable onPress={()=>{btnClickNew("Second Clicked")}}>
                    <Text style={{fontSize:30,textAlign:'center',backgroundColor:'grey'}}>Second</Text>
                </Pressable>
                <Pressable onPress={()=>{btnClickNew("Third Clicked")}}>
                    <Text style={{fontSize:30,textAlign:'center',backgroundColor:'grey'}}>Third</Text>
                </Pressable> */}
                
            </View>
        </>
    )
}
export default First;