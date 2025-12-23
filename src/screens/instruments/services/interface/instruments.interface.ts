export interface InstrumentResponse {
    id: number;
    ticker: string;
    name: string;
    type: string;
    last_price: number;
    close_price: number;
}

export interface Instrument extends Omit<InstrumentResponse, 'last_price' | 'close_price'> {
    lastPrice: number;
    closePrice: number;
}
