import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/styles/color.styles";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 16,
    },
    summaryContainer: {
        marginTop: 8,
    },  
    summaryGain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        gap: 4,
    },
});