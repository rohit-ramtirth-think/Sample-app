import { StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import { FontType } from "../../../constants/FontType";


export const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    image1: {
        flex: 1,
        justifyContent: 'center',
    },
    image2: {
        top: '29%',
        right: '3%',
        width: responsiveWidth(43),
        height: responsiveHeight(27),
    },
    imageBgContainer: {
        height: responsiveHeight(38),
    },
    greetContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    greetTxtContainer: {
        width: '60%'
    },
    welcomeTxt: {
        color: 'white',
        fontSize: responsiveFontSize(4),
        fontWeight: 'bold',
        top: 80,
        textAlign: 'center',
    },
    signInFormContainer: {
        marginHorizontal: '7%',
        marginTop: '2%',
        // flex:1,
        zIndex: -1,
    },
    signInTxt: {
        color: colors.black,
        alignSelf: 'center',
        marginVertical: 15,
        fontSize: 20,
        fontWeight: '700'
    },
    forgotPassRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: responsiveHeight(3),
        justifyContent: 'space-between',
        marginBottom: 15
    },
    remMeTxt: {
        color: colors.black,
        marginHorizontal: 8,
        fontWeight: '500'
    },
    forgPassTxt: {
        color: '#1A1A1A66'
    },
    error: {
        color: 'red',
        marginBottom: 5,
        marginLeft:5,
        marginTop:-5
      },
    
  
})