
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView, RefreshControl, NativeModules} from 'react-native';

export default App = () => {
  let buildInfo = NativeModules.RNConfig.env;
  let info = NativeModules.RNConfig.getConstants();

  console.log("Natives Output", NativeModules.RNConfig.getConstants())

    const [Items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 44, item: 'Item 9' },
        { key: 68, item: 'Item 27' },
        { key: 0, item: 'Item 78' },
      ]);
      const [Refreshing, setRefreshing] = useState(false);
    
      const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { key: 69, item: 'Item 69' }]);
        setRefreshing(false);
      }
    
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>ENV URL: {info.BASE_URL} </Text>
      <Text>ENV URL: {info.BUILD_ENV} </Text>
    </View>
    // <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.body} refreshControl={
    //       <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['#ff00ff']}/>
    //     }>
    //     {
    //       Items.map((object) => {
    //         return (
    //           <View style={styles.item} key={object.key}>
    //             <Text style={styles.text}>{object.item}</Text>
    //           </View>
    //         )
    //       })
    //     }
    //   </ScrollView>
    // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
      },
      item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#000000',
        fontSize: 45,
        fontStyle: 'italic',
        margin: 10,
      },
})