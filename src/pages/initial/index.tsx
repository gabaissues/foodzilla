import React from "react"
import { Image, ScrollView, Text, View } from "react-native"

import styles from './styles'

import Hamburguer from '../../assets/svgs/hamburguer'
import Pizza from '../../assets/svgs/pizza'
import StarCompleted from '../../assets/svgs/starCompleted'

const App = () => {

    return(
        <ScrollView style={styles.container}>

            <View style={styles.top}>

                <Text style={styles.topSelected}>Restaurantes</Text>
                <Text style={styles.topUnselected}>Mercados</Text>

            </View>
            <View style={styles.lanches}>

                <View style={styles.box}>
                    <Hamburguer />
                    <Text style={styles.boxTitle}>Lanches</Text>
                </View>
                <View style={styles.box}>
                    <Pizza />
                    <Text style={styles.boxTitle}>Pizzas</Text>
                </View>

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