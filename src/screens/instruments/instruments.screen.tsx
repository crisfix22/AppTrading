import { ActivityIndicator, FlatList, View } from 'react-native';
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component"
import { ContainerComponent } from '../../global/components/Container/container.component';
import { useInstruments } from './hooks/useInstruments.hook';
import { useEffect } from 'react';
import { Colors } from '../../global/styles/color.styles';
import { InstrumentsItemComponent } from './components/instrumentsItem/instrumentsItem.component';
import { styles } from './instruments.styles';
import { InputCustomComponent } from '../../global/components/InputCustom/inputCustom.component';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { OrderModalComponent } from './components/orderModal/orderModal.component';

export const InstrumentsScreen = () => {
    const { instruments, loading, error, loadInstruments, handleSearchInstruments, 
        handleInstrumentPress, orderModalVisible, setOrderModalVisible, instrument} = useInstruments();

    useEffect(() => {
        loadInstruments();
    }, []);
    return (
        <ContainerComponent addSafeAreaInsets={true}>
            {loading && <ActivityIndicator size="large" color={Colors.primary} />}
            <TextCustomComponent text="Instruments" fontSize="3xl" color="primary" fontWeight="bold" />
            <InputCustomComponent
                placeholder="Buscar ticker"
                rightIcon={<Ionicons name="search" size={24} color={Colors.primary} />}
                onChangeText={(text) => handleSearchInstruments(text)}
            />
            <View style={styles.separator}/>
            <FlatList 
            data={instruments} 
            renderItem={({ item }) => <InstrumentsItemComponent instrument={item} onPress={handleInstrumentPress} />}
            keyExtractor={(item) => `${item.id}-${item.name}`}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListEmptyComponent={<TextCustomComponent text="No hay instrumentos" fontSize="md" color="secondary" fontWeight="regular" />}
            ListFooterComponentStyle={{ marginTop: 20 }}
            />
            <TextCustomComponent text={error || ''} fontSize="md" color="danger" fontWeight="regular" />
            {instrument && (
                <OrderModalComponent visible={orderModalVisible} onRequestClose={() => setOrderModalVisible(false)} data={instrument } />
            )}
        </ContainerComponent>
    )
}