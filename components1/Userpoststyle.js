
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
    },
    userInformationContainer:{
         flex :1,
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center'
    },
    containers:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        marginVertical:16
    },
    userpost:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        
    },
    userbutton:{
          marginRight:27,
          flex:1,
          flexDirection:'row'

    }
});

export default Userpoststyle;
