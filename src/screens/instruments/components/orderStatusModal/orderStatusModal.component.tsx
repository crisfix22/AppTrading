import { AlertModalComponent } from "../../../../global/components/AlertModal/alertModal.component"
import { TextCustomComponent } from "../../../../global/components/TextCustom/textCustom.component"
import { OrderStatusModalProps } from "./interface/orderStatusModal.interface"
import { ButtonCustomComponent } from "../../../../global/components/ButtonCustom/buttonCustom.component";
import { styles } from "./orderStatusModal.styles";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useOrderStatusModal } from "./hooks/useOrderStatusModal.hook";
import { View } from "react-native";

export const OrderStatusModalComponent = ({visible, onRequestClose, order}: OrderStatusModalProps) => {

    const { getColorIconByStatus } = useOrderStatusModal();
  
    return (
        <AlertModalComponent visible={visible} onRequestClose={onRequestClose}>
            <View style={styles.container}>
                <Ionicons name="checkmark-circle-outline" size={100} color={getColorIconByStatus(order.status)} />
                <TextCustomComponent text={`Orden ${order.status}`} fontSize="3xl" color="primary" fontWeight="bold" />
                <TextCustomComponent text={`ID de Transacción: ${order.id}`} fontSize="lg" color="primary" />
                <ButtonCustomComponent style={styles.buttonContainer} title="Entendido" variant="primary" onPress={onRequestClose}  />
            </View>
        </AlertModalComponent>
    )
}