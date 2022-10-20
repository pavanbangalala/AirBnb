import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        height: 40,
        borderRadius: 20,
        marginTop: 25,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 1,

    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8
    },
})

export default styles