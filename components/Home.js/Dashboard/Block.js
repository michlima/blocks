import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
const Block = (props) => {
    return(
        <TouchableOpacity style={styles.blockContainer}>
            <Text style={{margin: 10, top:'37%'}}>Hello</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    blockContainer: {
        backgroundColor: '#F0F8FF', 
        width: '50%', 
        margin: 10,
        marginTop: 30,
        height: 140,
        width: 170,
        borderRadius: 20,
        alignItems: 'center'

    }
})
export default Block