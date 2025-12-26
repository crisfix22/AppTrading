import {Modal, View} from 'react-native'
import { OrderModalProps, OrderModalValue, OrderTypeValue } from './interface/orderModal.interface'
import { styles } from './orderModal.styles'
import { TextCustomComponent } from '../../../../global/components/TextCustom/textCustom.component'
import { ButtonCustomComponent } from '../../../../global/components/ButtonCustom/buttonCustom.component'
import { ButtonGroupComponent } from '../../../../global/components/ButtonGroup/buttonGroup.component'
import { modalStyles } from '../../../../global/styles/modal.styles'
import { useOrderModal } from './hooks/useOrderModal.hook'
import { SeparatorComponent } from '../../../../global/components/Separator/separator.component'
import { InputCustomComponent } from '../../../../global/components/InputCustom/inputCustom.component'
import { useState } from 'react'
import { ButtonVariantType } from '../../../../global/components/ButtonCustom/interface/buttomCustom.interface'

export const OrderModalComponent = ({visible, onRequestClose, data}: OrderModalProps) => {
    const [selectedValue, setSelectedValue] = useState<OrderModalValue>('buy');
    const [confirmTitle, setConfirmTitle] = useState('Confirmar Compra');
    const [confirmButtonVariant, setConfirmButtonVariant] = useState<ButtonVariantType>('success');
    const [selectedOrderType, setSelectedOrderType] = useState<OrderTypeValue>('market');
    const [limitPrice, setLimitPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const { getHeaderButtons, getOrderTypeButtons, onHandleConfirm} = useOrderModal();

    const onValueChange = (value: OrderModalValue) => {
        setSelectedValue(value);
        setConfirmTitle(value === 'buy' ? 'Confirmar Compra' : 'Confirmar Venta');
        setConfirmButtonVariant(value === 'buy' ? 'success' : 'danger');
    }
    const onOrderTypeChange = (value: OrderTypeValue) => {
        setSelectedOrderType(value);
    }
    const onConfirm = () => {
        onHandleConfirm(selectedValue, selectedOrderType, limitPrice);
    }
    return (
        <Modal visible={visible} transparent animationType="slide" onRequestClose={onRequestClose}>
            <View style={modalStyles.modalOverlay}>
                <View style={[modalStyles.modalContent]}>
                    <View style={styles.header}>
                        <View>
                            <TextCustomComponent text={data.ticker} fontSize="lg" color="primary" fontWeight="bold" />
                            <TextCustomComponent text={data.name} fontSize="md" color="secondary" fontWeight="regular" />
                            <TextCustomComponent text={`Last price: $${data.lastPrice.toString()}`} fontSize="md" color="secondary" fontWeight="regular" />
                        </View>
                        <ButtonCustomComponent title="X" variant="outline"  onPress={onRequestClose} />
                    </View>
                    <SeparatorComponent style={styles.separator} />
                    <ButtonGroupComponent  buttons={getHeaderButtons()} onValueChange={onValueChange} selectedValue={selectedValue} />
                    <View style={styles.orderType}>
                        <TextCustomComponent text="Tipo de orden" fontSize="sm" color="secondary" fontWeight="bold" />
                        <ButtonGroupComponent   buttons={getOrderTypeButtons()} onValueChange={onOrderTypeChange} selectedValue={selectedOrderType} />
                    </View>
                    {
                        selectedOrderType === 'limit' && (
                            <View style={styles.limitPrice}>
                                    <TextCustomComponent text="Precio Limite" fontSize="sm" color="secondary" fontWeight="bold" />
                                    <InputCustomComponent placeholder="Precio" 
                                    nativeTextInputProps={{ keyboardType: 'numeric' }} 
                                    onChangeText={(text) => setLimitPrice(Number(text))} />
                            </View>
                        )
                    }
                    <View style={styles.limitPrice}>
                                    <TextCustomComponent text="Cantidad de acciones" fontSize="sm" color="secondary" fontWeight="bold" />
                                    <InputCustomComponent placeholder="Acciones" 
                                    nativeTextInputProps={{ keyboardType: 'numeric' }} 
                                    onChangeText={(text) => setQuantity(Number(text))} />
                    </View>
                    <ButtonCustomComponent title={confirmTitle} variant={confirmButtonVariant} onPress={onConfirm} />
                </View>
            </View>
        </Modal>
    )
}