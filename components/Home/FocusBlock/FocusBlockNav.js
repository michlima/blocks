import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FocusBlock from './FocusBlock'
import FocusPost from './FocusPost'
const FocusBlockNav = (props) => {
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Screen>
            <Stack.Navigator
                name='FocusBlock'
                component={FocusBlock}
            />
            <Stack.Navigator
                name='FocusPost'
                component={FocusPost}
                options={{
                    presentation: 'modal'
                }}
            />
        </Stack.Screen>
    )
}
export default FocusBlockNav