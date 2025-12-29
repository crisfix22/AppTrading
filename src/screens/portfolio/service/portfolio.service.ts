import { get } from "../../../global/api/axios.instance";
import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { Portfolio } from "./interface/portfolio.interface";
import { PortfolioResponse } from "./interface/portfolio.interface";


const PORTFOLIO_URL = 'https://dummy-api-topaz.vercel.app';

const buildPortfolio = (portfolio: PortfolioResponse): Portfolio => {
    return {
        avgCostPrice: portfolio.avg_cost_price,
        ticker: portfolio.ticker,
        quantity: portfolio.quantity,
        lastPrice: portfolio.last_price,
        closePrice: portfolio.close_price,
        instrumentId: portfolio.instrument_id,
    };
};
/**
 * Get the portfolio
 * @returns The portfolio
 */
export const getPortfolio = async (): Promise<BaseResponse<Array<Portfolio>>> => {
    try {
        const response = await get<Array<PortfolioResponse>>(`${PORTFOLIO_URL}/portfolio`, {
            'Content-Type': 'application/json',
        });
        if (response.status === 'success') {
            const result =  response.data.map((portfolio: PortfolioResponse) => {
                return buildPortfolio(portfolio);
            });
            return {
                data: result,
                status: response.status,
                code: response.code,
                message: response.message,
            };  
        } else {
            return {
                data: [],
                status: response.status,
                code: response.code,
                message: response.message,
            };
        }
    } catch (error) {
        return {
            data: [],
            status: 'error',
            code: '500',
            message: 'Error al obtener el portfolio',
        };
    }
};