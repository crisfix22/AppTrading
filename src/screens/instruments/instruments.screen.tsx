import { View, TextInput } from 'react-native';
import { useInstruments } from './hooks/useInstruments.hook';
import { useEffect, useState } from 'react';
import { Colors } from '../../global/styles/color.styles';
import { styles } from './instruments.styles';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { OrderModalComponent } from './components/orderModal/orderModal.component';
import { TextCustomComponent } from '../../global/components/TextCustom/textCustom.component';
import { ContainerComponent } from '../../global/components/Container/container.component';
import { useInstrumentsScreenView } from './hooks/useInstrumentsScreenView.hook';
import { OrderStatusModalComponent } from './components/orderStatusModal/orderStatusModal.component';
import { OrderResponse } from './services/interface/order.interface';

export const InstrumentsScreen = () => {
    const { instruments, error, loadInstruments, handleSearchInstruments, 
        handleInstrumentPress, orderModalVisible, setOrderModalVisible, instrument, refreshInstruments, screenViewType} = useInstruments();
    const [showOrderStatusModal, setShowOrderStatusModal] = useState(false);
    const [orderResponse, setOrderResponse] = useState<OrderResponse | null>(null);
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
                    onOrderSuccess={(order) => {
                        setTimeout(() => {
                            setOrderResponse(order);
                            setShowOrderStatusModal(true);
                        }, 500);
                    }}
                />
            )}
            {orderResponse && (
                <OrderStatusModalComponent 
                    visible={showOrderStatusModal} 
                    onRequestClose={() => {
                        setOrderModalVisible(false);
                        setShowOrderStatusModal(false);
                        setOrderResponse(null)
                    }} 
                    order={orderResponse} 
                />
            )}
        </View>
        </ContainerComponent>
    );
};
