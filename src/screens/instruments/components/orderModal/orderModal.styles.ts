import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/styles/color.styles";
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
        marginBottom: 24,
    },
    separator: {
        marginBottom: 24,
    },
    orderType: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.groupButtonBackground,
        marginRight:24,
        borderRadius: 8,
        height: 45,
        width: '100%',
        marginVertical: 24,
        paddingHorizontal: 10,
    },
  
});