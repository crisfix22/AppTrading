export type OrderType = 'MARKET' | 'LIMIT';
export type OrderSide = 'BUY' | 'SELL';
export type OrderStatus = 'PENDING' | 'REJECTED' | 'FILLED';

export interface Order {
    instrument_id: string;
    quantity: number;
    price: number;
    type: OrderType;
    side: OrderSide;
}

export interface OrderResponse extends Order {
    id: string;
    status: OrderStatus;
}