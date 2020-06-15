import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  // WebView
}
  from 'react-native';
// import wikiApi from './api';
// import BirdsDetails from './data';
import HTML from 'react-native-render-html';
// import Family from "./family";
// import Name from "./Name";



class Detailscreen extends Component {

  static navigationOptions = () => ({
    title: 'Details',
    headerStyle: {
      backgroundColor: '#00008b',
    },
    headerTitleStyle: {
      color: 'white'
    }
  });



  render() {

    var searchTerm = this.props.navigation.getParam('searchTerm', 'noid');

    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, marginBottom: 15, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
          {/* {Name[searchTerm]["name"]} */}
        </Text>
        <ScrollView style={{ marginLeft: 15, marginRight: 15, textAlign: 'justified' }}>
          <HTML
            // html={BirdsDetails[searchTerm]}
          />

        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#d9f0fa'
  }
})


export default Detailscreen;