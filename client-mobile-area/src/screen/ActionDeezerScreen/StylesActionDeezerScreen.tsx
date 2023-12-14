import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        zIndex: -1,
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 13,
        width: width * 0.9,
        height: height * 0.7,
        padding: 20,
    },
    blurFilter: {
        flex: 1,
    },
    headerLoginText: {
        fontSize: 33,
        fontWeight: '500',
        color: 'white',
        marginTop: 60,
        marginBottom: 50,
    },
    centeredContainer: {
        flex: 1,
    },
    buttonLogin: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 55,
        marginBottom: 30,
    },
    buttonDisco: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 55,
        marginTop: 360,
    },
    buttonOnOff: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 55,
        marginTop: 100,
    },
    pressableArea: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
    },
    input: {
        width: '100%',
        height: 55,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: 'white',
        padding: 10,
        marginBottom: 15,
        fontSize: 18,
        marginTop: 10,
        color: 'white',
    },
    forgotPassword: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: '500',
    },
    containerOr: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
        justifyContent: 'center'
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: '#4D4D4D',
        width: 96,
        marginRight: 3,
    },
    textOr: {
        color: '#4D4D4D',
        paddingHorizontal: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 5,
        alignSelf: 'center',
    },
    imageButtonLeft: {
        width: 42,
        height: 42,
        marginRight: 10,
    },
    imageButtonCenter: {
        width: 42,
        height: 42,
        marginHorizontal: 10,
    },
    imageButtonRight: {
        width: 42,
        height: 42,
        marginLeft: 10,
    },
});

export default { styles };
