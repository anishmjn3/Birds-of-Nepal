import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
  // WebView
}
  from 'react-native';
// import wikiApi from './api';
// import BirdsDetails from './data';
import HTML from 'react-native-render-html';
// import Family from "./family";
import Name from "./Database";
import image from './images/src/image';


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
          {Name[searchTerm]["name"]}
        </Text>


        <ScrollView style={{ marginLeft: 15, marginRight: 15, textAlign: 'justified' }}>
          <View>
            <Text style={[styles.boldfont, { fontSize: 15 }]}>Scientific classification</Text>
            </View>
            <View style={{ flexDirection: "row"}}>
              <View style={{width:Dimensions.get('window').width*0.2}}>
                <Text style={styles.boldfont}>Kingdom:</Text>
                <Text style={styles.boldfont}>Phylum:</Text>
                <Text style={styles.boldfont}>Class:</Text>
                <Text style={styles.boldfont}>Order:</Text>
                <Text style={styles.boldfont}>Family:</Text>
                <Text style={styles.boldfont}>Genus:</Text>
                <Text style={styles.boldfont}>Species:</Text>
              </View>
              <View style={{width:Dimensions.get('window').width*0.3}}>
                <Text style={styles.nonbold}>Animalia</Text>
                <Text style={styles.nonbold}>Chordata</Text>
                <Text style={styles.nonbold}>Aves</Text>
                <Text style={styles.nonbold}>{Name[searchTerm]["order"]}</Text>
                <Text style={styles.nonbold}>{Name[searchTerm]["family"]}</Text>
                <Text style={styles.nonbold}>{Name[searchTerm]["genus"]}</Text>
                <Text style={[styles.nonbold,{fontStyle:'italic'}]}>{Name[searchTerm]["species"]}</Text>
              </View>
              <Image 
              source={image[searchTerm]} 
              style={{width:Dimensions.get('window').width*0.4}}
              resizeMode="contain"
              />
            </View>
          
          <HTML
            html={Name[searchTerm]["details"]}
          />
          <Text>Source:Wikipedia</Text>
        </ScrollView>
        <View style={{height:Dimensions.get('window').height*0.01}} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#ffebcd'
  },
  boldfont: {
    fontWeight: 'bold',
    fontSize: 14

  },
  nonbold: {
    fontSize: 14
  }
})


export default Detailscreen;