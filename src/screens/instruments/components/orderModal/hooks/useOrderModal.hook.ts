import { useState } from "react";
import { OrderModalValue, OrderTypeValue } from "../interface/orderModal.interface";
import { ButtonVariantType } from "../../../../../global/components/ButtonCustom/interface/buttomCustom.interface";
import { ButtonGroupButton } from "../../../../../global/components/ButtonGroup/interface/buttonGroup.interface";

export const useOrderModal = () => {
    const [selectedValue, setSelectedValue] = useState<OrderModalValue>('buy');
    const [confirmTitle, setConfirmTitle] = useState('Confirmar Compra');
    const [confirmButtonVariant, setConfirmButtonVariant] = useState<ButtonVariantType>('success');
    const [selectedOrderType, setSelectedOrderType] = useState<OrderTypeValue>('market');
    /**
     * On value change
     * @param {OrderModalValue} value - Value
     */
    const onValueChange = (value: OrderModalValue) => {
        setSelectedValue(value);
        setConfirmTitle(value === 'buy' ? 'Confirmar Compra' : 'Confirmar Venta');
        setConfirmButtonVariant(value === 'buy' ? 'success' : 'danger');
    }
    /**
     * On confirm
     */
    const onConfirm = () => {
        console.log(selectedValue);
    }
    /**
     * Get header buttons
     * @returns {ButtonGroupButton<OrderModalValue>[]} - Header buttons
     */
    const getHeaderButtons = (): ButtonGroupButton<OrderModalValue>[] => {
        return [
            {value: 'buy', buttonProps: {title: 'Compra', variant: 'success', size: 'sm'}, style: {flex: 1}},
            {value: 'sell', buttonProps: {title: 'Venta', variant: 'danger', size: 'sm'}, style: {flex: 1}},
        ]
    }
    /**
     * Get order type buttons
     * @returns {ButtonGroupButton<OrderTypeValue>[]} - Order type buttons
     */
    const getOrderTypeButtons = (): ButtonGroupButton<OrderTypeValue>[] => {
        return [
            {value: 'market', buttonProps: {title: 'Market', variant: 'primary', size: 'xs'}},
            {value: 'limit', buttonProps: {title: 'Limit', variant: 'primary', size: 'xs'}},
        ]
    }
    /**
     * On order type change
     * @param {OrderTypeValue} value - Value
     */
    const onOrderTypeChange = (value: OrderTypeValue) => {
        setSelectedOrderType(value);
    }

    return {
        getOrderTypeButtons,
        getHeaderButtons,
        selectedValue,
        confirmTitle,
        confirmButtonVariant,
        onValueChange,
        onConfirm,
        selectedOrderType,
        onOrderTypeChange,
    }
}