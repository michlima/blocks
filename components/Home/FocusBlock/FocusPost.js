import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
const FocusPost = ({route}) => {
    return(
        <Text>{route.params.content}</Text>
    )
}
export default FocusPost