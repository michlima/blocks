import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleRegistry= () => {
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.goBack()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return( 
        <View style={{alignItems: 'center', top:'30%'}}>
            <Text>Sign In</Text>
            <TextInput
                style={{borderColor: 'black', borderWidth: 0.3, width: 200, marginTop: 10, height:25,borderRadius: 10, padding: 5}}
                placeholder='username'
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                style={{borderColor: 'black', borderWidth: 0.3, width: 200, marginTop: 10, height:25,borderRadius: 10, padding: 5}}
                placeholder='email'
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={{borderColor: 'black', borderWidth: 0.3, width: 200, marginTop: 10, height:25, borderRadius: 10, padding: 5}}
                placeholder='password'            
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity onPress={handleRegistry} style={styles.singinButton}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    singinButton: {
        backgroundColor: '#6495ED', 
        padding: 5, 
        paddingLeft: 20, 
        paddingRight: 20, 
        borderRadius: 20, 
        marginTop: 10
    },
})
export default Register