import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
const Signin = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showSignInError, setShowSignInError] = useState(false)

    const handleSingin =  (props) => {
    //     console.log('handleing Sign in....')
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     console.log('all is FINE')
    //     console.log(userCredential)
    //     const user = userCredential.user;
    //     navigation.navigate('Home')
    //     setShowSignInError(false)
    //     console.log(user.email)
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setShowSignInError(true)
    // });
    navigation.navigate('Home')
    }

    return( 
        <View style={{alignItems: 'center', top:'30%'}}>
            <Text>Sign In</Text>
            <TextInput
                style={{borderColor: 'black', borderWidth: 0.3, width: 200, marginTop: 10, height:25,borderRadius: 10, padding: 5}}
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={{borderColor: 'black', borderWidth: 0.3, width: 200, marginTop: 10, height:25, borderRadius: 10, padding: 5}}
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity onPress={handleSingin} style={styles.singinButton}>
                <Text>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.singinButton}>
                <Text>Register</Text>
            </TouchableOpacity>
            <Text style={!showSignInError ? {opacity: 0} : {color: 'red'}}>wrong email or password'</Text>
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
export default Signin