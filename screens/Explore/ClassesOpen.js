import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import BirdsAscen from '../Data/data'
import familyname from '../Data/family';
import family from '../Data/familydetail';
import Name from '../Data/Database';
import image from '../images/src/image';
import {styles} from './styles';
const Dheight = Dimensions.get('window').height;
const Dwidth = Dimensions.get('window').width;

export default class AllBirds extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('searchTerm', ""),
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        }
    });
    myloop() {
        var myloop = [];
        for (let i = this.state.loopini; i < this.state.loopfin; i++) {
            myloop.push(
                <TouchableOpacity
                    style={[styles.familystyle, styles.familystyleborder, styles.centerAlign]}
                    onPress={() => this.props.navigation.navigate("OpenClass",
                        { searchTerm: familyname[i] }
                    )}
                    onLayout={event => {
                        const layout = event.nativeEvent.layout;
                        this.arr[i] = layout.y;
                        console.log('height:', layout.height);
                        console.log('width:', layout.width);
                        console.log('x:', layout.x);
                        console.log('y:', layout.y);
                    }}
                >
                    <Text style={[styles.familytextstyle, styles.centerAlign]}>{i + 1 + ". "}{familyname[i]}</Text>
                    <Image source={image[BirdsAscen[i]]} style={{ height: 65, width: Dwidth * 0.15 }} resizeMode="contain" />

                </TouchableOpacity>
                // <Text> {familyname["A"][i]}</Text>

            );
        }
        return (
            <View>
                {myloop}
            </View>
        );
    }

    render() {
        var searchTerm = this.props.navigation.getParam('searchTerm', 'noid');

        return (
            <View style={styles.container}>
                <ScrollView>
                    {family[searchTerm].map((item, key) =>
                        <View style={[styles.familystyle, styles.centerAlign, { backgroundColor: 'grey', borderRadius: 15 }]}>
                            <TouchableOpacity
                                style={[styles.familystyle, styles.familystyleborder,
                                // styles.centerAlign
                                { justifyContent: 'center', paddingLeft: 15 }
                                ]}
                                onPress={() => this.props.navigation.navigate("Details",
                                    { searchTerm: item }
                                )}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: Dwidth * 0.1, justifyContent: 'center' }}>
                                            <Text style={[styles.familytextstyle, styles.centerAlign]}>{key + 1 + ".  "}</Text>
                                        </View>
                                        <View style={{ width: Dwidth * 0.45, justifyContent: 'center' }}>
                                            <Text style={[styles.familytextstyle, styles.centerAlign]}>{Name[item]["name"]}</Text>
                                            {/* <Text>{i}{BirdsAscen[i]}</Text> */}
                                        </View>
                                        <Image source={image[item]} style={{height:60, width: Dwidth * 0.15 }} resizeMode="contain" />
                                    </View>

                                </View>
                            </TouchableOpacity>

                        </View>
                    )}
                    {/* )} */}
                </ScrollView>

            </View>

        )
    }
}