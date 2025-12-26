import { FlatList, View, TextInput, RefreshControl } from 'react-native';
import { useInstruments } from './hooks/useInstruments.hook';
import { useEffect } from 'react';
import { Colors } from '../../global/styles/color.styles';
import { InstrumentsItem } from './components/instrumentsItem/instrumentsItem.component';
import { styles } from './instruments.styles';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { OrderModalComponent } from './components/orderModal/orderModal.component';
import { TextCustomComponent } from '../../global/components/TextCustom/textCustom.component';
import { ContainerComponent } from '../../global/components/Container/container.component';
import { useInstrumentsScreenView } from './hooks/useInstrumentsScreenView.hook';

export const InstrumentsScreen = () => {
    const { instruments, error, loadInstruments, handleSearchInstruments, 
        handleInstrumentPress, orderModalVisible, setOrderModalVisible, instrument, refreshInstruments, screenViewType} = useInstruments();
    const { screenView } = useInstrumentsScreenView(screenViewType, error ?? 'Error al cargar los instrumentos', refreshInstruments, instruments, handleInstrumentPress);

    useEffect(() => {
        loadInstruments();
    }, []);

    return (
        <ContainerComponent>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TextCustomComponent text="Instrumentos" fontSize="4xl" color="primary" fontWeight="800" />
                </View>                
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={18} color={Colors.muted} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar ticker..."
                        placeholderTextColor={Colors.muted}
                        onChangeText={(text) => handleSearchInstruments(text)}
                    />
                </View>
            </View>

            {screenView[screenViewType]?.()}
            {instrument && (
                <OrderModalComponent 
                    visible={orderModalVisible} 
                    onRequestClose={() => setOrderModalVisible(false)} 
                    data={instrument} 
                />
            )}
        </View>
        </ContainerComponent>
    );
};
