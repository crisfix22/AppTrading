import { Colors } from "./color.styles";
import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: Colors.modalOverlay,
        justifyContent: 'flex-end',
      }, 
    modalCenter: {
        flex: 1,
        backgroundColor: Colors.modalOverlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        overflow: 'hidden',
    },
    mdoalContentCenter: {
        backgroundColor: Colors.white,
        borderRadius: 24,
        padding: 24,
        overflow: 'hidden',
        width: '100%',
    },
});