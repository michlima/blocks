import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
const Signin = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return( 
        <View>
            <Text>Sign In</Text>
        </View>
    )
}
export default Signin