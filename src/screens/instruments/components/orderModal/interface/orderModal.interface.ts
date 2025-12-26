import { Instrument } from "../../../services/interface/instruments.interface";


export interface OrderModalProps {
    visible: boolean;
    onRequestClose: () => void;
    data: Instrument;
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