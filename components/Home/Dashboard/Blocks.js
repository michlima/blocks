import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity,FlatList,SafeAreaView, StyleSheet, StatusBar} from 'react-native'

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      admin: 'Michael'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      admin: 'Ariel'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      admin: 'Lima'
    },
  ];

const Blocks = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);

    const navi = (item) => {
        navigation.navigate('FocusBlock', {title: item.title, admin: item.admin})
    }
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.blockContainer} onPress={()=>navi(item)}>
            <Text style={styles.blockTitle}>{item.title}</Text>
        </TouchableOpacity>
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
        flex: 1
    },
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
export default Blocks