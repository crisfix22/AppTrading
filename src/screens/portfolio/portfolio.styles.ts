import { StyleSheet } from "react-native";
import { Colors } from "../../global/styles/color.styles";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.background,
    },
   
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    mainContent: {
        flex: 1,
        padding: 16,
    },
    sectionTitle: {
        letterSpacing: 1.5,
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    loadingContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    errorText: {
        textAlign: 'center',
        marginTop: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
});
