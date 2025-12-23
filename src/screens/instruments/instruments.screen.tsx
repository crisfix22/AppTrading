import { ActivityIndicator, FlatList, View } from 'react-native';
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component"
import { ContainerComponent } from '../../global/components/Container/container.component';
import { useInstruments } from './hooks/useInstruments.hook';
import { useEffect } from 'react';
import { Colors } from '../../global/styles/color.styles';

export const InstrumentsScreen = () => {
    const { instruments, loading, error, loadInstruments } = useInstruments();
    useEffect(() => {
        loadInstruments();
    }, []);
    return (
        <ContainerComponent addSafeAreaInsets={true}>
            {loading && <ActivityIndicator size="large" color={Colors.primary} />}
            <TextCustomComponent text="Instruments" fontSize="3xl" color="primary" fontWeight="bold" />
            <FlatList data={instruments} 
            renderItem={({ item }) => <TextCustomComponent text={item.name} fontSize="md" color="secondary" fontWeight="regular" />}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<TextCustomComponent text="No hay instrumentos" fontSize="md" color="secondary" fontWeight="regular" />}
            ListFooterComponentStyle={{ marginTop: 20 }}
            />
        </ContainerComponent>
    )
}