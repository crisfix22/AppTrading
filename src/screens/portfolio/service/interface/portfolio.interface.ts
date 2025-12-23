export interface PortfolioResponse {
    instrument_id: number;
    ticker: string;
    quantity: number;
    last_price: number;
    close_price: number;
    avg_cost_price: number;
}
export interface Portfolio extends Omit<PortfolioResponse, 'last_price' | 'close_price' | 'avg_cost_price' | 'instrument_id' > {
    ticker: string;
    quantity: number;
    lastPrice: number;
    closePrice: number;
    avgCostPrice: number;
    instrumentId: number;
}