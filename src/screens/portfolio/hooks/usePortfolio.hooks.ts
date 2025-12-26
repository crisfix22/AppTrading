import { useState } from "react";
import { Portfolio } from "../service/interface/portfolio.interface";
import { getPortfolio } from "../service/portfolio.service";
import { PortfolioSummary } from "../components/portfolioHeader/interface/portfolioHeader.interface";





export const usePortfolio = () => {
    const [portfolio, setPortfolio] = useState<Array<Portfolio>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [summary, setSummary] = useState<PortfolioSummary>({
        totalValue: 0,
        totalCost: 0,
        totalGain: 0,
        totalGainPercentage: 0,
    });
    /**
     * Calculate the summary of the portfolio
     * @param {Array<Portfolio>} portfolio - The portfolio
     * @returns {PortfolioSummary} - The summary of the portfolio
     */
    const calculateSummary = (portfolio: Array<Portfolio>): PortfolioSummary => {
        if (portfolio.length === 0) {
            return {
                totalValue: 0,
                totalCost: 0,
                totalGain: 0,
                totalGainPercentage: 0,
            };
        }
    
        const totalValue = portfolio.reduce((acc, item) => {
            return acc + (item.quantity * item.lastPrice);
        }, 0);
    
        const totalCost = portfolio.reduce((acc, item) => {
            return acc + (item.quantity * item.avgCostPrice);
        }, 0);
    
        const totalGain = totalValue - totalCost;
        const totalGainPercentage = totalCost > 0 ? ((totalValue - totalCost) / totalCost) * 100 : 0;
    
        return {
            totalValue,
            totalCost,
            totalGain,
            totalGainPercentage,
        };
    };
    /**
     * Load the portfolio
     * @returns The portfolio
     */
    const loadPortfolio = async () => {
        setLoading(true);
        const response = await getPortfolio();
        if (response.status === 'success') {
            setPortfolio(response.data);
            setSummary(calculateSummary(response.data));
        } else {
            setError(response.message || 'Error al cargar el portfolio');
        }
        setLoading(false);
    };

    return {
        portfolio,
        loading,
        error,
        loadPortfolio,
        summary,
    };
};
