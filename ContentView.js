import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContentView extends React.Component {
  render() {
    return (
       <View style={styles.mainx}>

<View style={styles.mainx}>
         <Text>asdf haalskdöfj aölsfdjk aöklsfdj aölksfj aöklsdfj aölskfdj asökldfj aölskfjsllo</Text>
         <Text>asfasdf</Text>
       </View>

       <View style={styles.mainx}>
         <Text>asdf hallo</Text>
         <Text>asfasdf</Text>
       </View>

       </View>
    );
  }
}

const styles = StyleSheet.create({

  mainx: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ff0000',
  },
  
  time: {
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  
  timeText: {
    color: '#77CC7B',
    fontSize: 150,
  },

  blindDescriptionText: {
    color: '#77CC7B',
    fontSize: 50,
  },

  blindValueText: {
    color: '#77CC7B',
    fontSize: 15,
  },

});