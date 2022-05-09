import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    blockTitle: {
        margin: 10, 
        top:'10%', 
        fontWeight: 'bold',
        fontSize: 15,

    },
    blockContainer: {
        backgroundColor: '#F0F8FF', 
        width: '50%', 
        margin: 10,
        marginTop: 30,
        height: 140,
        width: 250,
        borderRadius: 20,
        alignItems: 'center'

    }
})
export default Block