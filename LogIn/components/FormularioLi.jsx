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
    
    const USUARIO_CORRECTO = "admin";
    const CONTRASENA_CORRECTA = "1234";

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [esError, setEsError] = useState(false);

    function validarLogin() {
        if (
            usuario === USUARIO_CORRECTO &&
            contrasena === CONTRASENA_CORRECTA
        ) {
            setMensaje("Inicio de sesión exitoso");
            setEsError(false);
        } else {
            setMensaje("Usuario o contraseña incorrectos");
            setEsError(true);
        }
    }

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

            {mensaje !== "" && (
                <Text
                    style={[
                        styles.mensaje,
                        {
                            color: esError ? "red" : "green",
                            backgroundColor: esError
                                ? "rgba(255, 0, 0, 0.25)"
                                : "rgba(128, 255, 128, 0.32)",
                            borderColor: esError ? "red" : "green"
                        }
                    ]}
                >
                    {mensaje}
                </Text>
            )}

            <TouchableOpacity
                style={styles.boton}
                onPress={validarLogin}
            >
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
        borderColor: '#b30000',
        borderRadius: 3,
        paddingHorizontal: 12,
        height: 45,
        marginBottom: 10,
        backgroundColor: 'white',
    },

    passwordContainer: {
        borderWidth: 1,
        borderColor: '#b30000',
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
        backgroundColor: '#b30000',
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

    mensaje: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1
    },
});

export default FormularioLi;