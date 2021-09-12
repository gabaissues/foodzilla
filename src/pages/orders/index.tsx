import React from 'react'
import { ScrollView, Text, View } from "react-native";

import Order from '../../assets/svgs/order'

import styles from './styles'

const App = () => {
    return(
        <ScrollView style={styles.container}>
            
            <View style={styles.order}>

                <Order />
                <View style={styles.orderDetails}>

                    <Text style={styles.orderTitle}>Pedido #1</Text>
                    <Text style={styles.orderTime}>Previsão de entrega é as <Text style={styles.orange}>21:03</Text></Text>

                </View>

            </View>

        </ScrollView>
    )
}

export default App;