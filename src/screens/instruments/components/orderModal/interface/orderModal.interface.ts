import { Instrument } from "../../../services/interface/instruments.interface";
import { OrderResponse } from "../../../services/interface/order.interface";


export interface OrderModalProps {
    visible: boolean;
    onRequestClose: () => void;
    data: Instrument;
    onOrderSuccess: (order: OrderResponse) => void;
}

export type OrderModalValue = 'buy' | 'sell';
export type OrderTypeValue = 'market' | 'limit';

export interface CreateOrderRequest {
    selectedValue: OrderModalValue, 
    selectedOrderType: OrderTypeValue, 
    limitPrice: number, 
    data: Instrument,
    quantity: number,
}