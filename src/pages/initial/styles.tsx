import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 56,
    },
    topSelected: {
        fontSize: 16,
        color: '#FF7A00',
        fontFamily: 'Poppins-Medium',
        borderBottomWidth: 2,
        borderColor: '#FF7A00'
    },
    topUnselected: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins-Medium',
    },
    lanches: {
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: '15%',
        marginRight: '15%',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: 'black',
        borderRadius: 5,
        marginRight: 16,
        shadowOpacity: 1,
        padding: 16,
        minWidth: 90,
        minHeight: 90,
        shadowRadius: 30,
        shadowOffset: {
	        width: 0,
	        height: 3,
        },

        elevation: 10,
    },
    cards: {
        marginTop: '10%',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginRight: '15%',
        shadowOpacity: 1,
        shadowRadius: 30,
        marginBottom: 24,
        marginLeft: '15%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 10,
        },

        elevation: 15,
    },
    cardImage: {
        marginRight: '15%',
        width: '100%',
        height: 100,
    },
    topCard: {
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 5
    },
    titleCard: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    timeCard: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    },
    boxTitle: {
        marginTop: 6,
        color: '#FF7A00',
        fontFamily: 'Poppins-Medium'
    },
    stars: {
        flexDirection: 'row',
        marginBottom: 16,
        paddingLeft: 10,
    }
})