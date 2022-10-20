import { ImageBackground, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisio from "react-native-vector-icons/Fontisto"

const HomeScreen = () => {
    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn("Search btn clicked")}
            >
                <Fontisio name='search' size={25} color={'#F15454'} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground source={require('../../assets/images/wallpaper.jpeg')} style={styles.image} >
                <Text style={styles.title}>Go Near</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => console.warn("Explore btn clicked")}
                >
                    <Text style={styles.buttonText}>Explore nearby states</Text>
                </Pressable>
            </ImageBackground>

        </View>
    )
}

export default HomeScreen

