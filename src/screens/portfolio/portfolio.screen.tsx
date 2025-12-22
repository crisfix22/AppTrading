import { View } from "react-native";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";

export const PortfolioScreen = () => {
    return (
        <View>
            <TextCustomComponent text="Portfolio" fontSize="3xl" color="primary" fontWeight="bold" />
            <TextCustomComponent text="Esta es la pantalla de portfolio" fontSize="md" color="secondary" fontWeight="regular" />
        </View>
    )
}