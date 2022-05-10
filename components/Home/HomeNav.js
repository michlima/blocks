import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import FocusBlock from './FocusBlock/FocusBlock';
import FocusPost from './FocusBlock/FocusPost';
const HomeNav = ({navigation, route}) => {
    const Stack = createNativeStackNavigator()

    const logOut= () => {
        navigation.goBack()
    }

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
                initialParams={route.params}
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
                    presentation: 'modal',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNav