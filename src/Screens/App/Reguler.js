import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

class Income extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          scrollEventThrottle={16}
          style={{backgroundColor: '#F5F5F5'}}>
          <View style={styles.container}>
            <Text style={styles.income}>Empty</Text>
            <Text style={styles.income}>Empty</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Income;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  income: {
    fontSize: 25,
    textAlignVertical: 'center',
  },
});
