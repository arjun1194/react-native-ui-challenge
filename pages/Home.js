import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';

import NavBar from "../components/mainNavBar/mainNavBar";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native";


export default function Home() {


    return (
        <>
            <StatusBar style="auto"/>
            <SafeAreaView>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width:'100%',
                        height:'100%'
                    }}
                >

                    <View
                        style={{
                            position: 'absolute',



                        }}
                    >
                        <Text>Hello world</Text>
                    </View>
                </View>
            </SafeAreaView>

        </>


    );
}

const styles = StyleSheet.create({
    scaffoldBody: {
        marginTop:StatusBar.currentHeight,
        padding:0,
        height:200,
        backgroundColor:'#fab',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{


        backgroundColor:'green'
    }
})



