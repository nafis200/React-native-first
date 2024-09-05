
import { StyleSheet } from 'react-native';

const Userpoststyle = StyleSheet.create({
    name: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
    },
    location: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: '#79869F',
    },
    information:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',

    },
    userPostInformation:{
        marginLeft: 10,
    }
});

export default Userpoststyle;
