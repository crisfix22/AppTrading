import { createContext, useContext, useState } from "react";
import { PortfolioContextType } from "./interface/portfolioContext.interface";
import { Portfolio } from "../service/interface/portfolio.interface";

export const PortfolioContext = createContext<PortfolioContextType>({
    portfolios: [],
    setPortfolios: () => {},
}); 

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
    const [portfolios, setPortfolios] = useState<Array<Portfolio>>([]);
    return (
        <PortfolioContext.Provider value={{ portfolios, setPortfolios }}>
            {children}
        </PortfolioContext.Provider>
    );
};  

export const usePortfolioContext = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolioContext must be used within a PortfolioProvider');
    }
    return context;
};