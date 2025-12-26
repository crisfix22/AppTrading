
export interface PortfolioHeaderProps {
    summary: PortfolioSummary | null;
}
export interface PortfolioSummary {
    totalValue: number;
    totalCost: number;
    totalGain: number;
    totalGainPercentage: number;
}