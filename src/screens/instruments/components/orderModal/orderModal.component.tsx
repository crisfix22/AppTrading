import {Modal, View, TouchableOpacity, Text, Alert, KeyboardAvoidingView} from 'react-native'
import { OrderModalProps, OrderModalValue, OrderTypeValue } from './interface/orderModal.interface'
import { styles } from './orderModal.styles'
import { TextCustomComponent } from '../../../../global/components/TextCustom/textCustom.component'
import { ButtonCustomComponent } from '../../../../global/components/ButtonCustom/buttonCustom.component'
import { ButtonGroupComponent } from '../../../../global/components/ButtonGroup/buttonGroup.component'
import { modalStyles } from '../../../../global/styles/modal.styles'
import { useOrderModal } from './hooks/useOrderModal.hook'
import { InputCustomComponent } from '../../../../global/components/InputCustom/inputCustom.component'
import { useEffect, useState } from 'react'
import { ButtonVariantType } from '../../../../global/components/ButtonCustom/interface/buttomCustom.interface'
import { OrderResponse } from '../../services/interface/order.interface'
import { OrderStatusModalComponent } from '../orderStatusModal/orderStatusModal.component'

export const OrderModalComponent = ({visible, onRequestClose, data}: OrderModalProps) => {
    const [selectedValue, setSelectedValue] = useState<OrderModalValue>('buy');
    const [confirmTitle, setConfirmTitle] = useState('Confirmar Compra');
    const [confirmButtonVariant, setConfirmButtonVariant] = useState<ButtonVariantType>('success');
    const [selectedOrderType, setSelectedOrderType] = useState<OrderTypeValue>('market');
    const [limitPrice, setLimitPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const { getHeaderButtons, getOrderTypeButtons, onHandleConfirm} = useOrderModal();
    const [orderResponse, setOrderResponse] = useState<OrderResponse | null>(null);
    const [showOrderStatusModal, setShowOrderStatusModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(visible);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('visible', visible);
        setShowOrderModal(visible);
    }, [visible]);

    const onValueChange = (value: OrderModalValue) => {
        setSelectedValue(value);
        setConfirmTitle(value === 'buy' ? 'Confirmar Compra' : 'Confirmar Venta');
        setConfirmButtonVariant(value === 'buy' ? 'success' : 'danger');
    }
    const onOrderTypeChange = (value: OrderTypeValue) => {
        setSelectedOrderType(value);
    }
    const onConfirm = async () => {
        setLoading(true);
        if (selectedOrderType === 'limit' && limitPrice === 0) {
            Alert.alert("Error", "Precio límite es requerido");
            setLoading(false);
            return;
        }
        if (quantity === 0) {
            Alert.alert("Error", "Cantidad de acciones es requerida");
            setLoading(false);
            return;
        }
        const response = await onHandleConfirm({selectedValue, selectedOrderType, limitPrice, data, quantity});
        setLoading(false);
        setOrderResponse(response.data);
        setShowOrderStatusModal(response.data !== null);
    }
    return (
        <Modal visible={showOrderModal} transparent animationType="slide" onRequestClose={onRequestClose}>
            <View style={modalStyles.modalOverlay}>
                <KeyboardAvoidingView behavior="padding" style={[modalStyles.modalContent]}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View>
                            <TextCustomComponent text={data.ticker} fontSize="lg" color="primary" fontWeight="bold" />
                            <TextCustomComponent text={`Precio Actual: $${data.lastPrice.toLocaleString()}`} fontSize="md" color="secondary" fontWeight="regular" />
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
                            <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Buy/Sell Selector */}
                    <ButtonGroupComponent 
                        buttons={getHeaderButtons()} 
                        onValueChange={onValueChange} 
                        selectedValue={selectedValue}
                        containerStyle={styles.sideSelector}
                    />

                    {/* Order Type */}
                    <View style={styles.orderType}>
                        <TextCustomComponent text="Tipo de Orden" fontSize="sm" color="secondary" fontWeight="bold" />
                        <ButtonGroupComponent 
                            buttons={getOrderTypeButtons()} 
                            onValueChange={onOrderTypeChange} 
                            selectedValue={selectedOrderType}
                            containerStyle={{backgroundColor: 'transparent', gap: 8}}
                        />
                    </View>

                    {/* Limit Price Input */}
                    {selectedOrderType === 'limit' && (
                        <View style={styles.limitPrice}>
                            <TextCustomComponent text="PRECIO LÍMITE" fontSize="sm" color="muted" fontWeight="bold" />
                            <InputCustomComponent 
                                placeholder="0.00" 
                                nativeTextInputProps={{ keyboardType: 'numeric' }} 
                                onChangeText={(text) => setLimitPrice(Number(text))} 
                            />
                        </View>
                    )}

                    {/* Quantity Input */}
                    <View style={styles.quantityContainer}>
                        <TextCustomComponent text="CANTIDAD DE ACCIONES" fontSize="sm" color="muted" fontWeight="bold" />
                        <InputCustomComponent 
                            placeholder="0" 
                            nativeTextInputProps={{ keyboardType: 'numeric' }} 
                            onChangeText={(text) => setQuantity(Number(text))} 
                        />
                    </View>

                    {/* Submit Button */}
                    <ButtonCustomComponent 
                        title={confirmTitle} 
                        variant={confirmButtonVariant} 
                        onPress={onConfirm}
                        loading={loading}
                        fullWidth
                    />

                    {/* Order Status Modal */}
                    {orderResponse && (
                        <OrderStatusModalComponent 
                            visible={showOrderStatusModal} 
                            onRequestClose={() => {
                                setShowOrderStatusModal(false);
                                setShowOrderModal(false);
                                onRequestClose();
                            }} 
                            order={orderResponse} 
                        />
                    )}
                </KeyboardAvoidingView>
            </View>
        </Modal>
    )
}
