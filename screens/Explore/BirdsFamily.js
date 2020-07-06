import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'

import BirdsAscen from '../data'
import familyname from '../family';
import family from '../familydetail';
import image from '../images/src/image';
import {styles} from './styles';
const Dheight = Dimensions.get('window').height;
const Dwidth = Dimensions.get('window').width;

export default class AllBirds extends React.Component {
    static navigationOptions = () => ({
        title: "Bird's Family",
        headerStyle: {
            backgroundColor: '#00008b',
        },
        headerTitleStyle: {
            color: 'white'
        }
    });
    constructor(props) {
        super(props)
        this.arr = []
        this.state = {
            value: "A",
            loopini: 0,
            loopfin: 23,
            dynamicIndex: 0
        }
    }

    myloop() {
        var myloop = [];
        for (let i = this.state.loopini; i < this.state.loopfin; i++) {
            myloop.push(
                <TouchableOpacity
                    style={[styles.familystyle, styles.familystyleborder,
                    // styles.centerAlign
                    { justifyContent: 'center', paddingLeft: 15 }
                    ]}
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
                    <View style={{ flexDirection: 'row' }}>
                    <View style={{width:Dwidth*0.1,justifyContent:'center'}}>
                    <Text style={[styles.familytextstyle, styles.centerAlign]}>{i + 1 + ".  "}</Text>
                    </View>
                        <View style={{width:Dwidth*0.45,justifyContent:'center'}}>
                    <Text style={[styles.familytextstyle, styles.centerAlign]}>{familyname[i]}</Text>
                    {/* <Text>{i}{BirdsAscen[i]}</Text> */}
                    </View>
                    <Image source={image[family[familyname[i]][0]]} style={{height:60,width:Dwidth*0.15}} resizeMode="contain"/>
                    </View>
                </TouchableOpacity>

            );
            // if(i==886)break;
        }
        return (
            <View>
                {myloop}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: Dimensions.get('window').height * 0.02 }} />
                <ScrollView
                    style={{
                        height: Dimensions.get('window').height * 0.7
                    }}
                    ref={ref => {
                        this.scrollview_ref = ref;
                    }}
                >
                    {this.state.loopini == 0 ?
                        <View></View>
                        :
                        <View style={styles.centerAlign}>
                            <TouchableOpacity
                                style={[
                                    styles.centerAlign,
                                    styles.nextprev,
                                ]}
                                onPress={() => {
                                    var a = this.state.loopini

                                    // this.scrollview_ref.scrollTo({
                                    //     x: this.state.loopini,
                                    //     y: this.arr[this.state.loopini]
                                    // })
                                    if (this.state.loopfin == 97)
                                        this.setState({ loopfin: 92 })
                                    else
                                        this.setState({ loopfin: this.state.loopfin - 23 })

                                    if (this.state.loopfin < 25)
                                        this.setState({ loopini: 0 })
                                    else
                                        this.setState({ loopini: this.state.loopini - 23 })

                                }
                                }
                            >
                                <Text style={[styles.familytextstyle, styles.centerAlign]}>Previous</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {this.myloop()}
                    {this.state.loopfin == 97 ?
                        <View></View>
                        :
                        <View
                            style={styles.centerAlign}
                        >
                            <TouchableOpacity
                                style={[styles.centerAlign, styles.nextprev]}
                                onPress={() => {
                                    var a = this.state.loopini

                                    this.scrollview_ref.scrollTo({
                                        x: this.state.loopini,
                                        y: this.arr[this.state.loopini]
                                    })
                                    this.setState({ loopini: this.state.loopini + 23 })

                                    if (this.state.loopfin > 80)
                                        this.setState({ loopfin: 97 })
                                    else
                                        this.setState({ loopfin: this.state.loopfin + 23 })

                                }
                                }
                            >
                                <Text style={[styles.familytextstyle, styles.centerAlign]}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </ScrollView>

                <View style={{ height: Dimensions.get('window').height * 0.02 }} />
                <View></View>
            </View>

        )
    }
}

