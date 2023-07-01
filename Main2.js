import React from "react";
import { Alert, Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
const Math2 = ({ navigation }) => {


  const totallevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const btnlevelclick = (no) => {
    // alert(no)
    navigation.navigate('Game', { LevelNo: no })
  }
  const btnstyle = {
    width: 64,
    height: 60,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 10


  }
  const btntext = {
    fontSize: 24,
    borderColor: 'black',
    textAlign: 'center',
    alignSelf: 'center',

  }

  return (
    <>
      <ScrollView>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {

            totallevels.map((item) => {
              return (

                <Pressable style={btnstyle} onPress={() => { btnlevelclick(item) }}>
                  <Text style={btntext}>{item}</Text>
                </Pressable>

              )
            }
            )}

        </View>
      </ScrollView>


    </>
  )
}
export default Math2;