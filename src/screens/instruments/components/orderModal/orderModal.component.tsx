import {Modal, View} from 'react-native'
import { OrderModalProps } from './interface/orderModal.interface'
import { styles } from './orderModal.styles'
import { TextCustomComponent } from '../../../../global/components/TextCustom/textCustom.component'
import { ButtonCustomComponent } from '../../../../global/components/ButtonCustom/buttonCustom.component'
import { ButtonGroupComponent } from '../../../../global/components/ButtonGroup/buttonGroup.component'
import { modalStyles } from '../../../../global/styles/modal.styles'
import { useOrderModal } from './hooks/useOrderModal.hook'
import { SeparatorComponent } from '../../../../global/components/Separator/separator.component'

export const OrderModalComponent = ({visible, onRequestClose, data}: OrderModalProps) => {
    const { getHeaderButtons, getOrderTypeButtons, selectedValue, confirmTitle, confirmButtonVariant, onValueChange, onConfirm, selectedOrderType, onOrderTypeChange } = useOrderModal();
    
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

                    <ButtonCustomComponent title={confirmTitle} variant={confirmButtonVariant} onPress={onConfirm} />
                </View>
            </View>
        </Modal>
    )
}