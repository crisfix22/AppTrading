import { OrderStatus } from "../../../services/interface/order.interface";

export type ColorIconByStatusType = {
    [key in OrderStatus]: string;
}

export const useOrderStatusModal = () => {

    const colorIconByStatus: ColorIconByStatusType = {
        'FILLED': 'green',
        'PENDING': 'yellow',
        'REJECTED': 'red',
    }
    const getColorIconByStatus = (status: OrderStatus) => {
        return colorIconByStatus[status];
    }
    return {
        getColorIconByStatus,
    }
}