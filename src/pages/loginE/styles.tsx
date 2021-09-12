import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    background: {
        flex: 1,
        position: 'absolute'
    },
    content: {
        marginTop: '10%',
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 36,
        zIndex: 99
    },
    top: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orange: {
        fontSize: 20,
        color: '#FF7A00',
        fontFamily: 'Poppins-Medium'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginBottom: 36
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    inputPlaceholder: {
        fontFamily: 'Poppins-Medium'
    },
    input: {
        padding: 12,
        borderRadius: 4,
        backgroundColor: '#F3F3F3',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        marginBottom: 24,
    },
    img: {
        marginTop: '13%',
        width: 138,
        height: 180
    },
    button: {
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: '#FF7A00',
        padding: 20
    },
    textButton: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-SemiBold'
    }
})