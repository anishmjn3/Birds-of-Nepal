import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Button
}
    from 'react-native';
import Tflite from 'tflite-react-native';
import ImagePicker from 'react-native-image-picker';

import Name from './Database'
import FamilyDetail from './familydetail';
import images from './images/src/image'

import cameraicon from './cameraicon.png';
import galleryicon from './galleryicon.png';

let tflite = new Tflite();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const blue = "#ffffff";
// const mobile = "Pick an image";
var searchTerm = '';

var birdsrecognize = ['alpine swift'];
var birdsrecognizepercent = ['0']
console.disableYellowBox = true;



export default class HomeScreen extends Component {
    static navigationOptions = () => ({
        title: 'Birds of Nepal',
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        },

    });

    constructor(props) {
        super(props);
        this.state = {
            model: null,
            source: null,
            imageHeight: height,
            imageWidth: width,
            recognitions: [],
            search: false,
            article: {
                title: 'Searching...',
                content: 'Please wait',
            },
            term: props.searchTerm,
        };
        this.onSelectModel('model');
    }

    onSelectModel(model) {
        this.setState({ model });
        var modelFile = 'models/retrained_graph886at20k.lite';
        var labelsFile = 'models/retrained_labels886.txt';
        tflite.loadModel({
            model: modelFile,
            labels: labelsFile,
        },
            (err, res) => {
                if (err)
                    console.log(err);
                else
                    console.log(res);
            });

    }



    onSelectCamera() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                var path = Platform.OS === 'ios' ? response.uri : 'file://' + response.path;
                var w = response.width;
                var h = response.height;
                this.setState({
                    source: { uri: path },
                    imageHeight: h * width / w,
                    imageWidth: width
                });

                tflite.runModelOnImage({
                    path,
                    imageMean: 128.0,
                    imageStd: 128.0,
                    numResults: 3,
                    threshold: 0.05
                },
                    (err, res) => {
                        if (err)
                            console.log(err);
                        else
                            this.setState({ recognitions: res });
                    });

            }
        });
    }

    onSelectGallery() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                var path = Platform.OS === 'ios' ? response.uri : 'file://' + response.path;
                var w = response.width;
                var h = response.height;
                this.setState({
                    source: { uri: path },
                    imageHeight: 350,
                    imageWidth: 350
                });

                tflite.runModelOnImage({
                    path,
                    imageMean: 128.0,
                    imageStd: 128.0,
                    numResults: 3,
                    threshold: 0.05
                },
                    (err, res) => {
                        if (err)
                            console.log(err);
                        else
                            this.setState({ recognitions: res });
                    });

            }
        });
    }

    renderBoxes() {
        const { model, recognitions, imageHeight, imageWidth } = this.state;
        var i = 0;
        return recognitions.map((res, id) => {
            birdsrecognize[i] = res["label"];
            birdsrecognizepercent[i] = (res["confidence"] * 100).toFixed(0)
            i++;
        });



    }


    render() {
        var { model, source, imageHeight, imageWidth } = this.state;

        var resultScreen = () => {
            return (
                <View >
                    <View style={[styles.galleryinbutton]}>
                        <TouchableOpacity
                            onPress={this.onSelectCamera.bind(this)}
                            style={[styles.gallertbutton, styles.styleborder]}
                        >
                            <Image source={cameraicon} style={styles.icon} />
                            <Text style={styles.textcgs}>Scan a Bird</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.galleryinbutton}>
                        <TouchableOpacity
                            onPress={this.onSelectGallery.bind(this)}
                            style={[styles.gallertbutton, styles.styleborder]}
                        >
                            <Image source={galleryicon} style={styles.icon} />

                            <Text style={styles.textcgs}> Pick from Gallery</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.galleryinbutton}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Explore')}
                            style={[styles.gallertbutton, styles.centerAlign, styles.styleborder]}
                        >
                            {/* <Image source={galleryicon} style={styles.icon} /> */}

                            <Text style={styles.textcgs}>Explore Birds</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }


        return (
            <View style={styles.container}>
                {source ?
                    <View style={styles.centerAlign}>

                        <View style={{ height: height * 0.04, width: 300 }}>

                        </View>
                        <View style={[styles.centerAlign, styles.imagecontainer]}>

                            <Image source={source} style={{
                                height: height * 0.39,
                                width: imageWidth
                            }}
                                resizeMode="contain"
                            />
                        </View>
                        {this.renderBoxes()}
                        <View style={[styles.resultstyle, styles.centerAlign]}>
                            <Text style={styles.textresult}>
                                {Name[birdsrecognize[0]]["name"]}
                            </Text>
                            <Text style={styles.textresult}>
                                {birdsrecognizepercent[0] + "%"}
                            </Text>
                        </View>

                        <View style={[styles.buttonstyles, styles.centerAlign]}>
                            <View style={[styles.button, { backgroundColor: 'grey', borderRadius: 7, margin: height * 0.005 }]}>
                                <TouchableOpacity
                                    style={[styles.button, styles.styleborder2, styles.centerAlign]}
                                    onPress={() =>
                                        this.props.navigation.navigate('Details', {
                                            searchTerm: birdsrecognize[0],
                                        })
                                    }
                                >
                                    <Text style={[styles.textresult, { color: '#fff' }]}>Details</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.button, { backgroundColor: 'grey', borderRadius: 7, margin: height * 0.005 }]}>
                                <TouchableOpacity
                                    style={[styles.button, styles.styleborder2, styles.centerAlign]}
                                    onPress={() => { this.setState({ source: null }) }}>
                                    <Text style={[styles.textresult, { color: '#fff' }]}>Back</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View style={{ marginTop: height * 0.004, width: width * 0.95, flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left' }}>
                                Other Birds of family:
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>
                                {" " + Name[birdsrecognize[0]]["family"]}
                            </Text>
                        </View>
                        <ScrollView horizontal style={{ flexDirection: 'row', width: width * 0.96 }}>
                            {FamilyDetail[Name[birdsrecognize[0]]["family"]].map((item, key) =>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate('Details', {
                                            searchTerm: item,
                                        })
                                    }
                                >
                                    <View key={key} style={[styles.recommendstyle]}>
                                        <Image  
                                        source={images[item]} 
                                        style={{
                                            height: height * 0.129,
                                            width: height * 0.126,}}
                                        resizeMode='contain' 
                                        />

                                        {/* <Text>{Name[item]["name"]}</Text> */}

                                    </View>
                                </TouchableOpacity>
                            )}

                        </ScrollView>
                    </View>

                    :

                    <View>
                        {resultScreen()}
                    </View>

                }
            </View>
        );
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDEAD'
    },
    centerAlign: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        // padding: 7,
        width: width * 0.4,
        height: height * 0.06,

    },
    imagecontainer: {
        height: height * 0.43,
        width: width * 0.9,
        // backgroundColor:'red'
    },
    resultstyle: {
        height: height * 0.135,
        width: width * 0.8,
    },
    icon: {
        height: 60,
        width: 60,
        alignSelf: 'center',
    },
    buttonstyles: {
        // padding: 25
        // backgroundColor: 'red',
        height: height * 0.13,
        width: width * 0.5
    },
    textcgs: {
        marginTop: 10,
        // marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textresult: {
        fontSize: height * 0.023,
        fontWeight: 'bold',

        margin: 3
    },
    gallertbutton: {
        flexDirection: "row",
        height: height * 0.1,
        width: width * 0.6,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        // bot
    },
    galleryinbutton: {
        // padding:10,
        height: height * 0.1,
        margin: 10,
        backgroundColor: 'grey',
        borderRadius: 15
    },
    styleborder: {
        borderBottomColor: 'grey',
        borderRadius: 15,
        borderBottomWidth: 3,
        borderRightColor: 'grey',
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: 'white'
    },
    styleborder2: {
        borderBottomColor: 'grey',
        borderRadius: 7,
        borderBottomWidth: 2,
        borderRightColor: 'grey',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: 'blue'
    },
    recommendstyle: {
        flexDirection: 'row',
        height: height * 0.13,
        width: height * 0.13,
        // backgroundColor: 'white',
        // borderColor: 'grey',
        // borderWidth: 1,
        marginTop: height * 0.004,
        margin: height * 0.005,
        // opacity:0.65

    }
});
