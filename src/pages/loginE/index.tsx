import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";

import AppLoading from 'expo-app-loading'

import { useFonts } from 'expo-font'
import styles from './styles'

const App = ({ navigation }: { navigation: any }) => {

    let [fontsLoaded] = useFonts({
        'Poppins-Black': require('../../fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('../../fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../../fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Medium': require('../../fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../fonts/Poppins-SemiBold.ttf')
    })

    if(!fontsLoaded) return <AppLoading />

    return (
            <ImageBackground resizeMode="cover" source={{ uri: 'https://media.discordapp.net/attachments/882428390274105454/884472564699770981/unknown.png?width=307&height=664' }} style={styles.container}>
            <Image style={styles.img} source={{ uri: 'https://media.discordapp.net/attachments/426139292264562708/884239595171106886/unknown.png' }} />

            <View style={styles.content}>

                <Text style={styles.title}>Peça comida e mercado com o <Text style={styles.orange}>FoodZilla!</Text></Text>
                
                <Text style={styles.label}>E-mail:</Text>
                <TextInput style={styles.input} placeholder="Insira seu e-mail..." />

                <Text style={styles.label}>Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Insira sua senha..." />

                <TouchableOpacity onPress={() => navigation.navigate('initial')} style={styles.button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default App