import {  OrderResponse } from "../../../services/interface/order.interface";

export interface OrderStatusModalProps {
    visible: boolean;
    onRequestClose: () => void;
    order: OrderResponse;
}