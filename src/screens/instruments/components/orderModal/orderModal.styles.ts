import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/styles/color.styles";

const MARGIN_DEFAULT = 24;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: MARGIN_DEFAULT,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    closeButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.inputBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        marginBottom: MARGIN_DEFAULT,
    },
    sideSelector: {
        backgroundColor: Colors.groupButtonBackground,
        borderRadius: 12,
        padding: 4,
        marginBottom: MARGIN_DEFAULT,
    },
    orderType: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.background,
        borderRadius: 12,
        height: 50,
        width: '100%',
        marginBottom: MARGIN_DEFAULT,
        paddingHorizontal: 12,
    },
    limitPrice: {
        marginBottom: MARGIN_DEFAULT,
    },
    quantityContainer: {
        marginBottom: 20,
    },
    quantityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    submitButton: {
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    submitButtonDisabled: {
        opacity: 0.5,
    },
});
