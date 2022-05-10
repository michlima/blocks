import React, {useState, useRef} from 'react'
import {View, Text, TouchableOpacity, FlatList, TextInput, Animated} from 'react-native'
import Posts from './Posts'
const FocusBlock = ({route, navigation}) => {
    const [post, setPost] = useState('')
    const [trackY, setY] = useState(-1)
    const fadeAnim = useRef(new Animated.Value(150)).current;
    const fadeOpa = useRef(new Animated.Value(1)).current;
    const goBack= () => {
        navigation.goBack()
    }
    

    const rednderItem = ({item}) => {
        const data = {id:item.id, content:item.content, name:item.name}
        return(
            <Posts navigate={() => navigation.navigate('FocusPost', data)} id={item.id} content={item.content} name={item.name}/>
        )
    }
    const handleScroll= (y) => {
    
        if(y < trackY - 20) {
            setY(y)
            console.log('up', y)
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500
              }).start();
              Animated.timing(fadeOpa, {
                toValue: 0,
                duration: 500
              }).start();
        } 
        if(y > trackY + 20) {
            if(y < 50){
                setY(y)
                console.log('down', y)
                Animated.timing(fadeAnim, {
                    toValue: 150,
                    duration: 500
                }).start();
                Animated.timing(fadeOpa, {
                    toValue: 1,
                    duration: 500
                  }).start();
            }
        }
        
    }
    return(
        <View style={{backgroundColor: 'white'}}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity onPress={goBack}><Text>Back</Text></TouchableOpacity>
                <Text style={{fontSize: 20,margin: 2, marginTop: 10}}>{route.params.title}</Text>
                <Text style={{marginBottom: 20}}>{route.params.admin}</Text>
            </View>
            <Animated.View useNativeDriver={true} style={{borderWidth: 0.3, margin: 4, borderRadius: 20, padding: 3, height: fadeAnim, opacity: fadeOpa}}>
                <TextInput
                    style={{height: '70%', margin: 10}}
                    onChange={setPost}
                    value={post}
                    multiline={true}
                />
                <TouchableOpacity alignItems='right' style={{position: 'absolute', right: 10, bottom: 10,backgroundColor: 'black',width:30, height: 30, borderRadius: 15}}>
                </TouchableOpacity>
            </Animated.View>
            <View style={{backgroundColor: '#7FFFD4', height: '100%'}}>
               <FlatList
                    data={DATA}
                    onScroll={((e) => handleScroll(e.nativeEvent.contentOffset.y))}
                    renderItem={rednderItem}
                    keyExtractor={item => item.id}
               />
            </View>
        </View>
    )
}
export default FocusBlock
