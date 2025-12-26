import { Portfolio } from "../../service/interface/portfolio.interface";

export interface PortfolioContextType {
    portfolios: Array<Portfolio>;
    setPortfolios: (portfolio: Array<Portfolio>) => void;
}