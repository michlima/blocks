import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
const Home = ({navigation}) => {
    return(
        <View style={{backgroundColor: 'white', height: '100%'}}> 
            <View style={{width: '90%', alignItems: 'flex-end', margin: 10}}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', position: 'absolute', width:'100%'}}>
                <View style={{backgroundColor: '#1E90FF', height: 200, width:200, top: '20%', borderRadius: 100}}>
                    
                </View>
            </View>
            <View style={{backgroundColor: '#1E90FF',height: '100%', marginTop: 50}}>
            </View>
        </View>
    )
}
export default Home