import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/styles/color.styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: Colors.white,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: Colors.inputBackground,
    },
    textContainer: {
        gap: 6,
    },
    tickerPlaceholder: {
        width: 60,
        height: 16,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    namePlaceholder: {
        width: 120,
        height: 12,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    rightSection: {
        alignItems: 'flex-end',
        gap: 6,
    },
    pricePlaceholder: {
        width: 80,
        height: 16,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    percentagePlaceholder: {
        width: 50,
        height: 12,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    separator: {
        height: 1,
        backgroundColor: Colors.border,
    },
});

