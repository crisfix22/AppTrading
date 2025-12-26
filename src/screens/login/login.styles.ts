import { StyleSheet } from "react-native";
import { Colors } from "../../global/styles/color.styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        backgroundColor: Colors.white,
    },
    inputContainer: {
        width: '100%',
        gap: 20,
    },
    button: {
        marginTop: 40,
    },
    logo: {
        width: 200,
        height: 200,
    }
});