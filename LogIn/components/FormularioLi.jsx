import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Feather } from "@expo/vector-icons";

function FormularioLi() {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
                placeholder="Usuario"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    value={contrasena}
                    onChangeText={setContrasena}
                    placeholder="Contraseña"
                    secureTextEntry={!mostrarContrasena}
                />

                <TouchableOpacity
                    onPress={() => setMostrarContrasena(!mostrarContrasena)}
                >
                    <Feather
                        name={mostrarContrasena ? "eye-off" : "eye"}
                        size={22}
                        color="gray"
                    />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.boton}>
                <Text style={styles.textoBoton}>
                    INGRESAR
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#8B5CF6',
        borderRadius: 3,
        paddingHorizontal: 12,
        height: 45,
        marginBottom: 10,
        backgroundColor: 'white',
    },

    passwordContainer: {
        borderWidth: 1,
        borderColor: '#8B5CF6',
        borderRadius: 3,
        height: 45,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },

    passwordInput: {
        flex: 1,
    },

    boton: {
        backgroundColor: '#8B5CF6',
        height: 45,
        marginTop: 25,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default FormularioLi;