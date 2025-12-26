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
    },
    separator: {
        marginBottom: MARGIN_DEFAULT,
    },
    orderType: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.groupButtonBackground,
        marginRight: MARGIN_DEFAULT,
        borderRadius: 8,
        height: 45,
        width: '100%',
        marginVertical: MARGIN_DEFAULT,
        paddingHorizontal: 10,
    },
    limitPrice: {
        marginBottom: MARGIN_DEFAULT,
    }
  
});