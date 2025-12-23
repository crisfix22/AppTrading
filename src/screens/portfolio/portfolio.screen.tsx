import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { ContainerComponent } from "../../global/components/Container/container.component";
import { usePortfolio } from "./hooks/usePortfolio.hooks";
import { useEffect } from "react";
import { Colors } from "../../global/styles/color.styles";
import { ActivityIndicator, FlatList } from "react-native";

export const PortfolioScreen = () => {
    const { portfolio, loading, error, loadPortfolio } = usePortfolio();
    useEffect(() => {
        loadPortfolio();
    }, []);
    return (
        <ContainerComponent addSafeAreaInsets={true}>
            {loading && <ActivityIndicator size="large" color={Colors.primary} />}
            <TextCustomComponent text="Portfolio" fontSize="3xl" color="primary" fontWeight="bold" />
            <FlatList keyExtractor={(item) => `${item.instrumentId}-${Math.random().toString()}`} 
            data={portfolio} renderItem={({ item }) => <TextCustomComponent text={item.ticker} fontSize="md" color="secondary" fontWeight="regular" />} />
            <TextCustomComponent text={error || ''} fontSize="md" color="danger" fontWeight="regular" />
        </ContainerComponent>
    )
}