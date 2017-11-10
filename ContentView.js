import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContentView extends React.Component {
  render() {



    return (
       <View style={styles.innerContentView}>

      <View style={{flex: 1, flexDirection: 'row'}}>
         <View style={{width: 110, alignItems: 'center'}}>
           <Text style={styles.timeText}>{String(this.props.remainingMinutes).charAt(0)}</Text>
         </View>
         <View style={{width: 110, alignItems: 'center'}}>
           <Text style={styles.timeText}>{String(this.props.remainingMinutes).charAt(1)}</Text>
         </View>
         <View style={{width: 50, alignItems: 'center'}}>
           <Text style={styles.timeText}>:</Text>
         </View>         
         <View style={{width: 110, alignItems: 'center'}}>
           <Text style={styles.timeText}>{String(this.props.remainingSeconds).charAt(0)}</Text>
         </View>
         <View style={{width: 110, alignItems: 'center'}}>
           <Text style={styles.timeText}>{String(this.props.remainingSeconds).charAt(1)}</Text>
         </View>
      </View>

       <View style={styles.blindContainerView}>
         <View style={styles.blindView}>
           <Text style={styles.blindDescriptionText}>Small Blind</Text>
           <Text style={styles.blindValueText}>{this.props.smallBlind}</Text>
         </View>
         <View style={styles.blindView}>
           <Text style={styles.blindDescriptionText}>Big Blind</Text>
           <Text style={styles.blindValueText}>{this.props.bigBlind}</Text>
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
    fontSize: 170,
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