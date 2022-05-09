import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import Posts from './Posts'
const DATA = [
    {
        id: 'asdjfnal;sdkjf',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        name: 'Michael'
    },
    {
        id: 'asdflaksdf;sdkjf',
        content: 'Lorem ipsum dolor sit amet',
        name: 'Ariel'
    },
    {
        id: 'asdfjkalsdjfnl;sdkjf',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
        name: 'Lima'
    },
]
const FocusBlock = ({route, navigation}) => {

    const goBack= () => {
        navigation.goBack()
    }

    const rednderItem = ({item}) => {
        const data = {id:item.id, content:item.content, name:item.name}
        return(
            <Posts navigate={() => navigation.navigate('FocusPost', data)} id={item.id} content={item.content} name={item.name}/>
        )
    }

    return(
        <View style={{backgroundColor: 'white'}}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity onPress={goBack}><Text>Back</Text></TouchableOpacity>
                <Text style={{fontSize: 20,margin: 2, marginTop: 10}}>{route.params.title}</Text>
                <Text style={{marginBottom: 20}}>{route.params.admin}</Text>
            </View>
            <View style={{backgroundColor: '#7FFFD4', height: '100%'}}>
               <FlatList
                    data={DATA}
                    renderItem={rednderItem}
                    keyExtractor={item => item.id}
               />
            </View>
        </View>
    )
}
export default FocusBlock
