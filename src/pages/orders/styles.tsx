import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    container: {
        paddingTop: '10%',
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    order: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '.3rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
    },
    orderDetails: {
        marginLeft: '1rem'
    },
    orderTitle: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    orderTime: {
        marginTop: 0,
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    orange: {
        color: '#FF7A00'
    }
})