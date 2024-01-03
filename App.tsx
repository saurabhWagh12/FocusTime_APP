/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Color } from './Colors';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform
} from 'react-native';
import ListProvider from './Context/ListProvider';
import CompleteApp from './CompleteApp';


type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  

  return (
    <SafeAreaView style={[{flex:1,paddingTop:Platform.OS === 'android'?10:0,backgroundColor:`#${Color.purple}`}]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ListProvider>

          <CompleteApp/>

        </ListProvider>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
