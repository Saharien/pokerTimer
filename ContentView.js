import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContentView extends React.Component {
  render() {
    return (
       <View style={styles.innerContentView}>

      <View>
         <Text style={styles.timeText}>10:15</Text>
      </View>

       <View style={styles.blindContainerView}>
         <View style={styles.blindView}>
           <Text style={styles.blindDescriptionText}>Small Blind</Text>
           <Text style={styles.blindValueText}>10</Text>
         </View>
         <View style={styles.blindView}>
           <Text style={styles.blindDescriptionText}>Big Blind</Text>
           <Text style={styles.blindValueText}>20</Text>
         </View>         
       </View>

       </View>
    );
  }
}

const styles = StyleSheet.create({

  innerContentView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
 
  timeText: {
    color: '#77CC7B',
    fontSize: 180,
  },

  blindContainerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  blindView: {
    alignItems: 'center',
    padding: 30,
  },

  blindDescriptionText: {
    color: '#77CC7B',
    fontSize: 15,
  },

  blindValueText: {
    color: '#77CC7B',
    fontSize: 70,
  },

});