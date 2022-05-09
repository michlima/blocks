import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import Signin from './components/Signin/Signin';
import HomeNav from './components/Home.js/HomeNav';
import Register from './components/Signin/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const [isLoggedIn, setStatus] = useState(false)
  const Stack = createNativeStackNavigator()

  const login = () => {
    console.log('this')
    setView(<Home logout={() => logout()}/>)
  }

  const logout= () => {
    setView(<Signin login={() => login()}/>)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="signin" 
              component={Signin} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="HomeNav" 
              component={HomeNav} 
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="Register" 
              component={Register} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
