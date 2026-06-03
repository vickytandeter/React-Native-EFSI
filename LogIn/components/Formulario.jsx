import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Feather } from "@expo/vector-icons";

function FormularioIS() {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    return (

        <View>

            <Text>Usuario</Text>

            <TextInput
                value={usuario}
                onChangeText={setUsuario}
                placeholder="Introduce tu usuario"
                keyboardType="default"
                autoCapitalize="none"
                accessibilityLabel="Campo usuario"
            />

            <Text>Contraseña</Text>

            <View>

                <TextInput
                    value={contrasena}
                    onChangeText={setContrasena}
                    placeholder="••••••••"
                    secureTextEntry={!mostrarContrasena}
                    accessibilityLabel="Campo contraseña"
                />

                <TouchableOpacity
                    onPress={() =>
                        setMostrarContrasena(!mostrarContrasena)
                    }
                    accessibilityLabel={
                        mostrarContrasena
                            ? 'Ocultar contraseña'
                            : 'Mostrar contraseña'
                    }
                >

                    <Feather
                        name={mostrarContrasena ? "eye-off" : "eye"}
                        size={22}
                        color="black"
                    />

                </TouchableOpacity>

            </View>

            <TouchableOpacity
                onPress={() => {}}
                accessibilityLabel="Continuar"
            >

                <Text>Ingresar</Text>

            </TouchableOpacity>

        </View>

    );
}

export default FormularioLI;