import {View, Text, StyleSheet } from 'react-native'

function Header(){

    return (

        <View style={styles.header}>

            <Text style={styles.titulo}>Log In App</Text>

        </View>

    )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#b30000',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Header;