import { View } from 'react-native';
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component"

export const InstrumentsScreen = () => {
    return (
        <View>
            <TextCustomComponent text="Instruments" fontSize="3xl" color="primary" fontWeight="bold" />
            <TextCustomComponent text="Esta es la pantalla de instruments" fontSize="md" color="secondary" fontWeight="regular" />
        </View>
    )
}