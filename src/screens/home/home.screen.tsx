import {View} from 'react-native';
import { TextCustomComponent } from '../../global/components/TextCustom/textCustom.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
    const { top, bottom, left, right } = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }}>
            <TextCustomComponent text="Bienvenido a la App Trading" fontSize="3xl" color="primary" fontWeight="bold" />
            <TextCustomComponent text="Esta es la pantalla de inicio" fontSize="md" color="secondary" fontWeight="regular" />
        </View>
    )
}