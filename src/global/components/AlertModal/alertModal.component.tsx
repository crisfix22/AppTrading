import { Modal, View } from "react-native";
import { modalStyles } from "../../styles/modal.styles";
import { AlertModalProps } from "./interface/alertModal.interface";

export const AlertModalComponent = ( {visible, onRequestClose, children}: AlertModalProps) => {
    return (
        <Modal visible={visible} onRequestClose={onRequestClose} transparent={true} animationType="slide">
            <View style={modalStyles.modalCenter}>
                <View style={modalStyles.mdoalContentCenter}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}