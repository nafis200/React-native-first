import { StyleSheet } from "react-native";
import { scaleFontSize } from "./Scaling";

const style = StyleSheet.create({
     title:{
        lineHeight: scaleFontSize(15),
        fontSize:scaleFontSize(16)
     }
})

export default style