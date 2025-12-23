export type ResponseStatus = 'success' | 'error';
/**
 * Base response interface
 * @param T - The type of the data
 * @returns The base response
 */
export interface BaseResponse<T> {
    data: T;
    status: ResponseStatus;
    message?: string;
    code: string;
    error?: {
        message: string;
        code: string;
        details: string;
    }
}