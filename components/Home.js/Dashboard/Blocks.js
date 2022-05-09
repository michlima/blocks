import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity,FlatList,SafeAreaView, StyleSheet, StatusBar} from 'react-native'
import Block from './Block'

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

const Blocks = (props) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      return (
        <Block/>
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });
export default Blocks