import React from 'react'
import { SafeAreaView, View} from 'react-native'
import { DotIndicator } from 'react-native-indicators'

const loader = () =>(
    <SafeAreaView style={{alignItems: 'center', backgroundColor:'transparent'}}>
        <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center',backgroundColor:'transparent'}}>
            <DotIndicator
                count={5}
                color='#ffbc01'
                animationDuration={1000}
            />
        </View>
    </SafeAreaView>
)

export default loader