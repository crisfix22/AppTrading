import { CreateOrderRequest, OrderModalValue, OrderTypeValue } from "../interface/orderModal.interface";
import { ButtonGroupButton } from "../../../../../global/components/ButtonGroup/interface/buttonGroup.interface";
import { createOrder } from "../../../services/orderService";
import { Instrument } from "../../../services/interface/instruments.interface";

export const useOrderModal = () => {
   
   
    /**
     * On confirm
     */
    const onHandleConfirm = async ( request: CreateOrderRequest ) => {
        const response = await createOrder({
            instrument_id: request.data.id.toString(),
            type: request.selectedOrderType === 'market' ? 'MARKET' : 'LIMIT',
            price: request.limitPrice,
            quantity: request.quantity,
            side: request.selectedValue === 'buy' ? 'BUY' : 'SELL',
        });
        return response;
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
  

    return {
        getOrderTypeButtons,
        getHeaderButtons,
        onHandleConfirm,
    }
}