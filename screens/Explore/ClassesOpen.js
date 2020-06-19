import React from 'react';
import { View, ScrollView, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'

import BirdsAscen from '../data'
import familyname from '../family';
import family from '../familydetail';
import Name from '../Database';

export default class AllBirds extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('searchTerm',""),
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
                        <View style={[ styles.familystyle,styles.centerAlign,{backgroundColor:'grey',borderRadius:15}]}>
                        <TouchableOpacity
                            style={[styles.familystyle,styles.familystyleborder, 
                                // styles.centerAlign
                                {justifyContent:'center',paddingLeft:15}
                            ]}
                            onPress={() => this.props.navigation.navigate("Details",
                                { searchTerm: item }
                            )}
                        >
                            <Text style={[styles.familytextstyle]}>{key+1 + ".  "}{Name[item]["name"]}</Text>
                        </TouchableOpacity>

                    </View>
                    )}
                    {/* )} */}
                </ScrollView>

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
    familystyleborder:{
        borderBottomColor:'grey',
        borderRadius:15,
        borderBottomWidth:3,
        borderRightColor:'grey',
        borderRightWidth:3,
        borderLeftWidth:3,
        borderLeftColor:'white'
    },
    familytextstyle: {
        fontSize: 20,
        textAlign:'left'
    }
})