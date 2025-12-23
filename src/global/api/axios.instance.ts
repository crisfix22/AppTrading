import axios, { AxiosError, AxiosResponse } from "axios";
import { BaseResponse } from "./interface/axios.interface";

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Handle the response from the API
 * @param response - The response from the API
 * @returns The response data
 */
const handleResponse = <T>(response: AxiosResponse<T>): BaseResponse<T> => {
    // Check if the response is successful
    const isSuccess = response.status === 200 && response.status < 300;
    return {
        data: response.data,
        status: isSuccess ? 'success' : 'error',
        code: response.status.toString(),
        message: response.statusText,
    };
};
/**
 * Get request
 * @param url - The url to get
 * @param headers - The headers to send
 * @returns The response data
 */
export const get = async <T>(url: string, headers?: Record<string, string>): Promise<BaseResponse<T>> => {
    const headersConfig = headers || {};
    const response = await axiosInstance.get(url, { headers: headersConfig });
    return handleResponse(response);
};

/**
 * Post request 
 * @param url - The url to post
 * @param data - The data to send
 * @param headers - The headers to send
 * @returns The response data
 */
export const post = async <T>(url: string, data: any, headers?: Record<string, string>): Promise<BaseResponse<T>> => {
    const headersConfig = headers || {};
    const response = await axiosInstance.post(url, data, { headers: headersConfig });
    return handleResponse(response);
};

