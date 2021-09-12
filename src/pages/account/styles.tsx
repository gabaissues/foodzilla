import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '15%',
        paddingBottom: '15%'
    },
    top: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    topText: {
        marginLeft: '1rem',
        fontSize: 24,
        fontFamily: 'Poppins-Medium'
    },
    list: {
        marginTop: '10%',
        paddingBottom: '30%'
    },
    item: {
        flexDirection: 'row',
        width: '100%',
        padding: '1rem',
        borderBottomWidth: 1,
        borderColor: '#D3D3D3'
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        marginLeft: '1rem',
    }
})