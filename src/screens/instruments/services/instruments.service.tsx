import { get } from "../../../global/api/axios.instance";
import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { Instrument, InstrumentResponse } from "./interface/instruments.interface";

const INSTRUMENTS_URL = 'https://dummy-api-topaz.vercel.app';

/**
 * Build the instrument
 * @param instrument - The instrument
 * @returns The instrument
 */
const buildInstrument = (instrument: InstrumentResponse): Instrument => {
    return {
        id: instrument.id,
        ticker: instrument.ticker,
        name: instrument.name,
        type: instrument.type,
        lastPrice: instrument.last_price,
        closePrice: instrument.close_price,
    };
};
/**
 * Get the instruments
 * @returns The instruments
 */
export const getInstruments = async (): Promise<BaseResponse<Array<Instrument>>> => {
    try {
        const response = await get<Array<InstrumentResponse>>(`${INSTRUMENTS_URL}/instruments`);
        if (response.status === 'success') {
            const result: Array<Instrument> = response.data.map((instrument: InstrumentResponse) => (   
                buildInstrument(instrument)
            ));
            return {
                data: result,
                status: 'success',
                code: response.code,
                message: response.message,
            };
        } else {
            return {
                data: [],
                status: 'error',
                code: response.code,
                    message: response.message,
                };
        }
    } catch (error) {
        return {
            data: [],
            status: 'error',
            code: '500',
            message: 'Error al obtener los instrumentos',
        };
    }
};
/**
 * Search the instruments
 * @param {string} search - The search term
 * @returns The instruments
 */
export const searchInstruments = async (search: string): Promise<BaseResponse<Array<Instrument>>> => {
    try {
        const response = await get<Array<InstrumentResponse>>(`${INSTRUMENTS_URL}/search?query=${search}`);
        if (response.status === 'success') {
            const result: Array<Instrument> = response.data.map((instrument: InstrumentResponse) => (   
                buildInstrument(instrument)
            ));
            return {
                data: result,
                status: 'success',
                code: response.code,
                message: response.message,
            };
        } else {
            return {
                data: [],
                status: 'error',
                code: response.code,
                message: response.message,
            };
        }
    } catch (error) {
        return {
            data: [],
            status: 'error',
            code: '500',
            message: 'Error al buscar los instrumentos',
        };
    }
};