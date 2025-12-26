import { StyleSheet } from "react-native";
import { Colors } from "../../styles/color.styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: Colors.groupButtonBackground,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    button: {
        flex: 1,
    },
});