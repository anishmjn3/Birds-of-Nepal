import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  BackHandler,
  ActivityIndicator,
  Alert
}
  from 'react-native';
import React from 'react';
import RadialGradient from 'react-native-radial-gradient';


export default class StartScreen extends React.Component {

  componentWillMount() {
    setInterval(() => {
      this.props.navigation.navigate('Stackk');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('./Monal.jpg')} 
          style={styles.backgroundstyle}
          resizeMode='cover'
            >
          {/* <RadialGradient style={styles.backgroundstyle}
            // colors={['#c6c3c3', '#650953']}
            stops={[0.01, .9]}
            radius={Dimensions.get('screen').width}
          > */}
            {/* <Image source={require('./logo3.png')} style={styles.image} /> */}
            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{
                fontSize: Dimensions.get('window').height * 0.05,
                fontWeight: 'bold',
                color: '#ffdead',
                textAlign: 'center'
              }}>
                Birds of Nepal
              </Text>
              <Text style={{
                fontSize: Dimensions.get('window').height * 0.02,
                fontWeight: 'bold',
                color: '#ffdead',
                textAlign: 'center'
              }}
              >
                Recognize and Explore with information</Text>
              <ActivityIndicator size='large' />
            </View>
          {/* </RadialGradient> */}
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundstyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '20%',
    width: '60%'
  },

});
