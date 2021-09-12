import React from 'react'
import { ScrollView, Text, View } from "react-native"

import User from '../../assets/svgs/user'
import Notification from '../../assets/svgs/notification'
import Cupom from '../../assets/svgs/cupom'
import Message from '../../assets/svgs/message'

import styles from './styles'

const App = () => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.top}>

                <User />
                <Text style={styles.topText}>Gabriel Jesus</Text>

            </View>
            <View style={styles.list}>
                <View style={styles.item}>

                    <Notification />
                    <Text style={styles.itemText}>Notificações</Text>

                </View>
                <View style={styles.item}>

                    <Message />
                    <Text style={styles.itemText}>Mensagens</Text>

                </View>
                <View style={styles.item}>

                    <Cupom />
                    <Text style={styles.itemText}>Cupons</Text>

                </View>
                <View style={styles.item}>

                    <Notification />
                    <Text style={styles.itemText}>Notificações</Text>

                </View>
                <View style={styles.item}>

                    <Message />
                    <Text style={styles.itemText}>Mensagens</Text>

                </View>
                <View style={styles.item}>

                    <Cupom />
                    <Text style={styles.itemText}>Cupons</Text>

                </View>
                <View style={styles.item}>

                    <Notification />
                    <Text style={styles.itemText}>Notificações</Text>

                </View>
                <View style={styles.item}>

                    <Message />
                    <Text style={styles.itemText}>Mensagens</Text>

                </View>
                <View style={styles.item}>

                    <Cupom />
                    <Text style={styles.itemText}>Cupons</Text>

                </View>

            </View>
        </ScrollView>
    )
}

export default App;