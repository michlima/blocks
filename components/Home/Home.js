import React, {useState,useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Blocks from './Dashboard/Blocks'
const Home = ({navigation}) => {

    return(
        <View style={{backgroundColor: 'white', height: '100%',alignItems:'center', width:'100%'}}> 
            <View style={{width: '90%', alignItems: 'flex-end', margin: 10}}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', position: 'absolute', width:'50%'}}>
                <View style={{backgroundColor: '#1E90FF', height: 150, width:150, top: '20%', borderRadius: 100, alignItems: 'center',}}>    
                    <Text style={{top: 30, color: 'white', fontWeight: '800', fontSize: 20}}>B l o c k s</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#1E90FF',height: '100%', width: '100%', marginTop: 50}}>
                <Blocks navigation={navigation}/>
            </View>
        </View>
    )
}
export default Home