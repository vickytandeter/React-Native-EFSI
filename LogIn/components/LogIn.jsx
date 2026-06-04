import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

import FormularioLi from './FormularioLi';
import Header from './Header';

function LogIn() {
    return (
        <View style={styles.container}>

            <View style={styles.contenido}>

                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />

                <FormularioLi />

                <TouchableOpacity>
                    <Text style={styles.link}>
                        Olvidé mi contraseña
                    </Text>
                </TouchableOpacity>

                <View>

                    <TouchableOpacity>
                        <Text style={styles.link}>¿No tienes una cuenta?</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },

    contenido: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 40,
    },

    logo: {
        width: 220,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },

    link: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 14,
    },
});

export default LogIn;