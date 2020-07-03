import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions,Image} from 'react-native'

import BirdsAscen from '../data'
import familyname from '../family';
import family from '../familydetail';
import Name from '../Database';
import image from '../images/src/image'

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y']
const alphabetswvalue = {
    'A': ['A', 0],
    'B': ['B', 32],
    'C': ['C', 158],
    'D': ['D', 240],
    'E': ['E', 252],
    'F': ['F', 276],
    'G': ['G', 289],
    'H': ['H', 375],
    'I': ['I', 405],
    'J': ['J', 434],
    'K': ['K', 444],
    'L': ['L', 449],
    'M': ['M', 499],
    'N': ['N', 517],
    'O': ['O', 528],
    'P': ['P', 546],
    'R': ['R', 591],
    'S': ['S', 675],
    'T': ['T', 762],
    'U': ['U', 786],
    'V': ['V', 789],
    'W': ['W', 795],
    'Y': ['Y', 864]
    // 'Z':['Z',885]
}
const Dheight = Dimensions.get('window').height;
const Dwidth = Dimensions.get('window').width;
export default class AllBirds extends React.Component {
    static navigationOptions = () => ({
        title: 'All Birds',
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
            loopfin: 25,
            dynamicIndex: 0
        }
    }

    myloop1() {
        var myloop = [];
        for (let i = this.state.loopini; i < this.state.loopfin; i++) {
            myloop.push(
                <TouchableOpacity
                    style={[styles.familystyle, styles.familystyleborder,
                    // styles.centerAlign
                    { justifyContent: 'center' }
                    ]}
                    onPress={() => this.props.navigation.navigate("Details",
                        { searchTerm: BirdsAscen[i] }
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
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:Dwidth*0.1,justifyContent:'center'}}>
                    <Text style={[styles.familytextstyle, styles.centerAlign]}>{i + 1 + ".  "}</Text>
                    </View>
                        <View style={{width:Dwidth*0.5,justifyContent:'center'}}>
                    <Text style={[styles.familytextstyle, styles.centerAlign]}>{Name[BirdsAscen[i]]["name"]}</Text>
                    {/* <Text>{i}{BirdsAscen[i]}</Text> */}
                    </View>
                    <Image source={image[BirdsAscen[i]]} style={{height:65,width:Dwidth*0.15}} resizeMode="contain"/>
                    </View>
                </TouchableOpacity>

            );
            if (i == 885) break;
        }
        return (
            <View>
                {myloop}
            </View>
        );
    }

    myloop2() {
        var myloop = [];
        for (let i = 0; i < 23; i++) {
            myloop.push(
                <TouchableOpacity
                    // style={[styles.familystyle, styles.familystyleborder, 
                    //     // styles.centerAlign
                    //     {justifyContent:'center',paddingLeft:15}
                    // ]}
                    // style={{flexDirection:'row'}}
                    // onPress={() => this.props.navigation.navigate("OpenClass")}
                    onPress={() => {

                        this.scrollview_ref.scrollTo({
                            x: this.state.loopini,
                            y: this.arr[this.state.loopini]
                        })
                        this.setState({ loopini: alphabetswvalue[alphabets[i]][1] })

                        if (this.state.loopini > 870)
                            this.setState({ loopfin: 886 })
                        else
                            this.setState({ loopfin: alphabetswvalue[alphabets[i]][1] + 25 })

                    }
                    }
                    onLayout={event => {
                        const layout = event.nativeEvent.layout;
                        this.arr[i] = layout.y;
                        console.log('height:', layout.height);
                        console.log('width:', layout.width);
                        console.log('x:', layout.x);
                        console.log('y:', layout.y);
                    }}
                >
                    <Text style={{fontSize:Dheight*0.022}}>
                        {alphabetswvalue[alphabets[i]][0] + "  "}
                    </Text>
                </TouchableOpacity>

            );
        }
        return (
            <View
            // style={{flexDirection:'row'}}
            >
                {myloop}
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: Dheight * 0.1 }} />
                <View style={{ flexDirection: 'row',height:Dheight*0.9 }}>
                    <View style={{ width: Dwidth * 0.07 }}>

                    </View>
                    <ScrollView
                        style={{
                            height: Dheight * 0.8
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

                                        if (this.state.loopfin == 886)
                                            this.setState({ loopfin: 876 })
                                        else
                                            this.setState({ loopfin: this.state.loopfin - 25 })


                                        if (this.state.loopfin < 25)
                                            this.setState({ loopini: 0 })
                                        else
                                            this.setState({ loopini: this.state.loopini - 25 })

                                    }
                                    }
                                >
                                    <Text style={[styles.familytextstyle, styles.centerAlign]}>Previous</Text>
                                </TouchableOpacity>
                            </View>
                        }

                        {this.myloop1()}
                        {this.state.loopfin > 886 ?
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
                                        this.setState({ loopini: this.state.loopini + 25 })

                                        if (this.state.loopfin > 870)
                                            this.setState({ loopfin: 886 })
                                        else
                                            this.setState({ loopfin: this.state.loopfin + 25 })

                                    }
                                    }
                                >
                                    <Text style={[styles.familytextstyle, styles.centerAlign]}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </ScrollView>
                    <View style={{ width: Dwidth * 0.07,height:Dheight*0.9 }}>
                        {this.myloop2()}
                    </View>
                </View>
                {/* <View style={{ height: Dheight * 0.002 }} />
                 */}
                
            </View>

        )
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
    familystyle: {
        width: Dimensions.get('window').width * 0.8,
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
    },
    familystyleborder: {
        borderBottomColor: 'grey',
        borderRadius: 15,
        borderBottomWidth: 3,
        borderRightColor: 'grey',
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: 'white'
    },
    familytextstyle: {
        fontSize: 20
    },
    nextprev: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.05,
        borderBottomColor: 'grey',
        borderRadius: 10,
        borderBottomWidth: 2,
        borderRightColor: 'grey',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: 'white'

    }
})