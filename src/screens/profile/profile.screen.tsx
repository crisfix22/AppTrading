import { ActivityIndicator, View } from "react-native";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { useProfile } from "./hooks/useProfile.hooks";
import { ButtonCustomComponent } from "../../global/components/ButtonCustom/buttonCustom.component";
import { ContainerComponent } from "../../global/components/Container/container.component";
import { Colors } from "../../global/styles/color.styles";
import { StackActions, useNavigation } from "@react-navigation/native";
import { styles } from "./profile.style";

export const ProfileScreen = () => {
    const { user, loading, logout } = useProfile();
    const navigation = useNavigation();

    const handleLogout = async () => {
        const response = await logout();
        if (response.status === 'success') {
            navigation.dispatch(StackActions.replace('Login'));
        }
    };

    const getInitial = () => {
        return user.name ? user.name.charAt(0).toUpperCase() : 'U';
    };

    return (
        <ContainerComponent>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <TextCustomComponent text="Perfil" fontSize="4xl" color="primary" fontWeight="800" />
                    </View>
                </View>

                <View style={styles.mainContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.avatar}>
                            <TextCustomComponent 
                                text={getInitial()} 
                                fontSize="4xl" 
                                color="white" 
                                fontWeight="800" 
                            />
                        </View>
                        <View style={styles.userDetails}>
                            <TextCustomComponent 
                                text={user.name} 
                                fontSize="xl" 
                                color="primary" 
                                fontWeight="700" 
                            />
                            <TextCustomComponent 
                                text={user.email} 
                                fontSize="sm" 
                                color="secondary" 
                                fontWeight="500" 
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.logoutSection}>
                    <ButtonCustomComponent 
                        title="Cerrar sesión" 
                        variant="danger" 
                        onPress={handleLogout} 
                        fullWidth 
                    />
                </View>

                {loading && (
                    <View style={styles.loadingOverlay}>
                        <ActivityIndicator size="large" color={Colors.primary} />
                    </View>
                )}
            </View>
        </ContainerComponent>
    );
};
