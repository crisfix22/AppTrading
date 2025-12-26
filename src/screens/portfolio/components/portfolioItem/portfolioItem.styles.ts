import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/styles/color.styles";

export const styles = StyleSheet.create({
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
    tickerBadge: {
        backgroundColor: Colors.inputBackground,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 12,
    },
    cardRight: {
        alignItems: 'flex-end',
    },
    cardBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: Colors.background,
    },
    gainContainer: {
        alignItems: 'flex-end',
    },
});
