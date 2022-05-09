import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import FocusBlock from './FocusBlock/FocusBlock';
import FocusPost from './FocusBlock/FocusPost';
const HomeNav = ({navigation}) => {
    const Stack = createNativeStackNavigator()

    const logOut= () => {
        navigation.goBack()
    }

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
            />
            <Stack.Screen 
                name={"FocusBlock" }
                component={FocusBlock}
                initialParams={{ itemId: 42 }}        
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name='FocusPost'
                component={FocusPost}
                options={{
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNav