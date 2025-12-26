import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { post } from "../../../global/api/axios.instance";
import { Order, OrderResponse } from "./interface/order.interface";
const ORDER_URL = 'https://dummy-api-topaz.vercel.app';


/**
 * Create an order
 * @param order - The order
 * @returns The order
 */
export const createOrder = async (order: Order): Promise<BaseResponse<OrderResponse | null>> => {
    try {
        const response = await post<OrderResponse>(`${ORDER_URL}/orders`, order);
        if (response.status === 'success') {
            return {
                data: response.data,
                status: 'success',
                code: response.code,
                message: response.message,
            }
        }
        return {
            data: null,
            status: 'error',
            code: response.code,
            message: response.message,
        }
    } catch (error : any) {
        return {
            data: null,
            status: 'error',
            code: error.code,
            message: error.message,
        }
    }
}