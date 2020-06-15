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

// import Family from "./family";
import Name from "./Name";
// import FamilyDetailValue from './familydetailvalue';
import FamilyDetail from './familydetail';
// import images from './images/image';

import cameraicon from './cameraicon.png';
import galleryicon from './galleryicon.png';

let tflite = new Tflite();

const height = Dimensions.get('window').height * 0.5;
const width = Dimensions.get('window').width * 0.1;
const blue = "#ffffff";
// const mobile = "Pick an image";
var searchTerm = '';

var birdsrecognize = ['alpine swift'];
var birdsrecognizepercent = ['0']
var birdfamily = [];
console.disableYellowBox = true;



export default class HomeScreen extends Component {
    static navigationOptions = () => ({
        title: 'Home',
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        }
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
        var modelFile = 'models/retrained_graphbirds886classes.lite';
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
            // searchTerm = this.titleCase(res["label"]);
            i++;
            // return (
            //     <View>
            //         <Text key={id} style={{ color: 'black' }}>
            //             {/* {res["label"] + "-" + (res["confidence"] * 100).toFixed(0) + "%"} */}
            //             {/* {Name[res["label"]]} */}
            //             {/* {Name[birdsrecognize[i-1]]} */}
            //         </Text>
            //     </View>
            // )
        });



    }


    render() {
        var { model, source, imageHeight, imageWidth } = this.state;

        var renderButton = () => {
            return (
                <View >
                    <View >
                        <TouchableOpacity onPress={this.onSelectCamera.bind(this)}>
                            <Image source={cameraicon} style={styles.icon} />
                            <Text style={styles.textcgs}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 15, }}>
                        <TouchableOpacity
                            onPress={this.onSelectGallery.bind(this)}
                        >
                            <Image source={galleryicon} style={styles.icon} />

                            <Text style={styles.textcgs}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }


        return (
            <View style={styles.container}>
                {/* <Text>sdfsf</Text> */}
                {source ?
                    <View style={styles.centerAlign}>

                        <View style={{ height: Dimensions.get('window').height * 0.01 }}>
                            {/* <Text>as</Text> */}
                        </View>
                        <View style={
                            [styles.imageContainer,
                            styles.centerAlign,
                            {
                                height: imageHeight,
                                width: imageWidth,
                                borderWidth: source ? 0 : 2
                            }]}>

                            <Image source={source} style={{
                                height: imageHeight, width: imageWidth
                            }} resizeMode="contain" />
                        </View>

                        <View style={styles.boxes}>
                            {this.renderBoxes()}
                        </View>

                        <View>
                            <Text style={styles.textcgs}>
                                {/* Name: {FamilyDetailValue[birdsrecognize[0]]} */}
                                {birdsrecognize[0]}
                                {/* {Name[birdsrecognize[0]][0]} */}
                                {" " + birdsrecognizepercent[0] + "%"}
                                {/* {Name["alexandrine parakeet"]} */}
                            </Text>
                            <Text style={{ fontFamily: "preeti" }}>{Name["alexandrine parakeet"]["nepali"]}</Text>
                            <Text style={styles.textcgs}>
                                {/* Family:{Family[birdsrecognize[0]]} */}
                                {/* {Name["alexandrine parakeet"]["name"]} */}
                            </Text>
                        </View>

                        <View style={styles.detailbutton}>



                            <Button
                                style={styles.button}
                                title="More Info"
                                onPress={() =>
                                    /* 1. Navigate to the Details route with params */
                                    this.props.navigation.navigate('Details', {
                                        // id: 'ResultsView',
                                        // name: 'Results',
                                        searchTerm: birdsrecognize[0],
                                    })
                                }
                            />

                            <View style={{ padding: 15 }}>
                                <Button
                                    style={styles.button}
                                    title="Back"
                                    onPress={() => { this.setState({ source: null }) }}
                                />
                            </View>
                        </View>
                        {/* <Text>Similar Family:{Family[birdsrecognize[0]]}</Text> */}
                        <ScrollView horizontal style={{ flexDirection: 'row' }}>
                                {/* <Text>{FamilyDetail[Name[birdsrecognize[0]]["family"]]+" "}</Text> */}
                            {FamilyDetail[Name[birdsrecognize[0]]["family"]].map((item, key) =>
                                <View key={key} style={{ flexDirection: 'row', padding: 10 }}>
                                    {/* <Image  source={images[item]} style={{ height: 75, width: 75 }} /> */}
                                   <Text>{item}</Text>
                                </View>
                            )}
                            
                        </ScrollView>
                    </View>

                    :

                    <View>
                        {renderButton()}
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
        backgroundColor: '#d9f0fa'
    },
    centerAlign: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 10,
        width: 350,
        textAlign: 'center',
    },

    icon: {
        height: 60,
        width: 60,
        alignSelf: 'center',
    },
    detailbutton: {
        padding: 25
    },
    textcgs: {
        marginTop: 10,
        // marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
