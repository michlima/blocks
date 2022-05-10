import React, {useState,useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Blocks from './Dashboard/Blocks'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
const Home = ({navigation, route}) => {
    const [userData, setUserData] = useState(
        {
        coms: {},
        email: '',
        isOnline: true, 
        messageIds: {},
        }
    )

    useEffect(() => {
        if(init){
            let user = fetchUserData()
            setInit(false)
        }
    })

    const fetchUserData =async  (props) => {
        const docRef = doc(db, "users", route.params.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let data = {
                    coms: docSnap.data().coms,
                    email: docSnap.data().email, 
                    isOnline: true, 
                    messageIds: docSnap.data().messageIds, 
                    username: docSnap.data().username
            }
            setUserData(data)
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    const logOut = () => {
        setInit(true)
        navigation.goBack()
    }

    return(
        <View style={{backgroundColor: 'white', height: '100%',alignItems:'center', width:'100%'}}> 
            <View style={{width: '90%', alignItems: 'flex-end', margin: 10}}>
                <TouchableOpacity onPress={() =>logOut()}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', position: 'absolute', width:'50%'}}>
                <View style={{backgroundColor: '#1E90FF', height: 150, width:150, top: '20%', borderRadius: 100, alignItems: 'center',}}>    
                    <Text style={{top: 30, color: 'white', fontWeight: '800', fontSize: 20}}>{userData.username}</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#1E90FF',height: '100%', width: '100%', marginTop: 50}}>
                <Blocks navigation={navigation}/>
            </View>
        </View>
    )
}
export default Home