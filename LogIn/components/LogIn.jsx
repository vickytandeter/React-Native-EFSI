import { View, Text, TouchableOpacity, Image } from 'react-native';
import FormularioLI from './FormularioLI';
import Header from "../Header";

function LogIn() {

    return (

        <View>

            <View>

                <Image
                    source={require('../../../img/logo.png')}
                    style={{ width: 80, height: 80 }}
                    accessibilityLabel="Logo Rember"
                />

            </View>

            <FormularioLI/>

            <View>

                <TouchableOpacity
                    onPress={() => {}}
                    accessibilityLabel="cambiar contraseña"
                >
                    <Text>Olvidé mi contraseña</Text>
                </TouchableOpacity>

            </View>

            <View>

                <Text>¿No tienes una cuenta?</Text>

                <TouchableOpacity
                    onPress={() => {}}
                    accessibilityLabel="Registrate"
                >
                    <Text>Registrate</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default LogIn;