import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const Posts = (props) => {
    const [viewSize, setViewSize] = useState(
        {height: 180}
    )
    

    
    
    return(
        <TouchableOpacity onPress={props.navigate} style={{flexDirection: 'column', borderRadius: 20, backgroundColor: 'white', margin: 10}}>
            <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 20, padding: 5, maxHeight: 180}}>
                <View style={{backgroundColor: '#7FFFD4', width:100, height: 100, alignItems: 'center', borderRadius: 50, }}>
                    <Text style={{top: '40%'}}>picture</Text>
                </View>
                    <Text 
                        onLayout={(event) => {
                            setViewSize(event.nativeEvent.layout)
                        }}
                        style={{marginTop: 2, marginLeft: 5, flex: 1, 
                        flexWrap: 'wrap',}}>
                    {props.content}   
                    </Text>
            </View>
            {viewSize.height > 160
            ? <Text style={{ marginBottom: 10, marginLeft: 110, color: 'grey'}}>read more...</Text>
            : <></>
            }
        </TouchableOpacity>
    )
}
export default Posts