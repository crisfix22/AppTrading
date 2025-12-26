import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/styles/color.styles";

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
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    tickerBadgePlaceholder: {
        width: 50,
        height: 36,
        borderRadius: 12,
        backgroundColor: Colors.inputBackground,
    },
    unitsPlaceholder: {
        width: 80,
        height: 14,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    cardRight: {
        alignItems: 'flex-end',
        gap: 6,
    },
    labelPlaceholder: {
        width: 90,
        height: 10,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    valuePlaceholder: {
        width: 100,
        height: 22,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.background,
    },
    smallValuePlaceholder: {
        width: 70,
        height: 14,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
        marginTop: 6,
    },
    gainContainer: {
        alignItems: 'flex-end',
        gap: 6,
    },
    gainPlaceholder: {
        width: 120,
        height: 14,
        borderRadius: 4,
        backgroundColor: Colors.inputBackground,
    },
});

