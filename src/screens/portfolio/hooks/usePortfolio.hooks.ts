import { useState } from "react";
import { Portfolio } from "../service/interface/portfolio.interface";
import { getPortfolio } from "../service/portfolio.service";

export const usePortfolio = () => {
    const [portfolio, setPortfolio] = useState<Array<Portfolio>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Load the portfolio
     * @returns The portfolio
     */
    const loadPortfolio = async () => {
        setLoading(true);
        const response = await getPortfolio();
        setLoading(false);
        if (response.status === 'success') {
            setPortfolio(response.data);
        } else {
            setError(response.message || 'Error al cargar el portfolio');
        }
    };
    return {
        portfolio,
        loading,
        error,
        loadPortfolio,
    };
};