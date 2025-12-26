import { StyleSheet } from "react-native";
import { Colors } from "../../styles/color.styles";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: Colors.border,
        marginBottom: 16,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
});

