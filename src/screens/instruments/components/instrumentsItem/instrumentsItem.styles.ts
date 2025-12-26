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
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPositive: {
        backgroundColor: Colors.success,
    },
    iconNegative: {
        backgroundColor: Colors.danger,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        maxWidth: 150,
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    returnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        gap: 2,
    },
});
