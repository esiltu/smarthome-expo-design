import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import React from 'react'

import { useFonts } from 'expo-font'

const Home = () => {

    const [loaded, error] = useFonts({
        'MonumentExtended-Regular': require('assets/fonts/MonumentExtended-Regular.otf'),
    });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.containerEnergy}>
                    <Text style={styles.containerEnergyTitle}>Energy Consumption</Text>
                    <Text style={styles.containerEnergyDescription}>64kWh</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerEnergy: {
        backgroundColor: '#F4C7FF',
        top: 10,
        width: 350,
        height: 300,
        alignSelf: 'center',
        borderRadius: 40,
    },
    containerEnergyTitle: {
        left: 30,
        top: 30,
        fontSize: 18,
        fontWeight: '500'
    },
    containerEnergyDescription: {
        top: 40,
        textAlign: 'left',
        left: 30,
        fontSize: 43,
        fontWeight: 'ultralight',
        fontFamily: 'MonumentExtended-Regular'
    }
})