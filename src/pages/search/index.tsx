import React from 'react'
import { Text, View, Image, TextInput, ScrollView } from "react-native";

import StarCompleted from '../../assets/svgs/starCompleted'

import Search from '../../assets/svgs/search'

import styles from './styles'

const App = () => {

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputField}>

                <Search />
                <TextInput placeholderTextColor="black" style={styles.input} placeholder="Busque por um item ou mercado" />

            </View>
            <View style={styles.top}>

                <Text style={styles.topSelected}>Lojas</Text>
                <Text style={styles.topUnselected}>Itens</Text>

            </View>
            <View style={styles.cards}>

                <View style={styles.card}>

                    <Image style={styles.cardImage} source={{ uri: 'https://media.discordapp.net/attachments/882428390274105454/884487064400318614/unknown.png' }} />
                    <View style={styles.topCard}>

                        <Text style={styles.titleCard}>Restaurante da vovó</Text>
                        <Text style={styles.timeCard}>15 a 20 min</Text>

                    </View>

                    <View style={styles.stars}>

                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />

                    </View>

                </View>
                <View style={styles.card}>

                    <Image style={styles.cardImage} source={{ uri: 'https://media.discordapp.net/attachments/882428390274105454/884487064400318614/unknown.png' }} />
                    <View style={styles.topCard}>

                        <Text style={styles.titleCard}>Restaurante da vovó</Text>
                        <Text style={styles.timeCard}>15 a 20 min</Text>

                    </View>

                    <View style={styles.stars}>

                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />

                    </View>

                </View>
                <View style={styles.card}>

                    <Image style={styles.cardImage} source={{ uri: 'https://media.discordapp.net/attachments/882428390274105454/884487064400318614/unknown.png' }} />
                    <View style={styles.topCard}>

                        <Text style={styles.titleCard}>Restaurante da vovó</Text>
                        <Text style={styles.timeCard}>15 a 20 min</Text>

                    </View>

                    <View style={styles.stars}>

                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />
                        <StarCompleted />

                    </View>

                </View>

            </View>
        </ScrollView>
    )

}

export default App;