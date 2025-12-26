import { useEffect } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { usePortfolio } from "./hooks/usePortfolio.hooks";
import { PortfolioItem } from "./components/portfolioItem/portfolioItem.component";
import { PortfolioSkeleton } from "./components/portfolioSkeleton/portfolioSkeleton.component";
import { styles } from "./portfolio.styles";
import { Colors } from "../../global/styles/color.styles";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { ContainerComponent } from "../../global/components/Container/container.component";
import { PortfolioHeaderComponent } from "./components/portfolioHeader/portfolioHeader.component";
import { ErrorViewComponent } from "../../global/components/ErrorView/errorView.component";

export const PortfolioScreen = () => {
    const { portfolio, loading, error, loadPortfolio, summary, refreshPortfolio } = usePortfolio();

    useEffect(() => {
        loadPortfolio();
    }, []);


    return (
        <ContainerComponent>    
            <View style={styles.container}>
                <PortfolioHeaderComponent summary={summary} />

                <View style={styles.mainContent}>
                    <TextCustomComponent 
                        text="TUS ACTIVOS" 
                        fontSize="xs" 
                        color="muted" 
                        fontWeight="700" 
                        style={styles.sectionTitle}
                    />
                    
                    {error ? (
                        <ErrorViewComponent message={error} onRetry={refreshPortfolio} />
                    ) : loading ? (
                        <PortfolioSkeleton />
                    ) : (
                        <FlatList
                            data={portfolio}
                            refreshing={loading}
                            refreshControl={
                                <RefreshControl
                                    refreshing={loading}
                                    onRefresh={refreshPortfolio}
                                    colors={[Colors.primary]}
                                    tintColor={Colors.primary}
                                />
                            }
                            keyExtractor={(item) => `${Math.random()}-${item.ticker}`}
                            renderItem={({ item }) => <PortfolioItem item={item} />}
                            ListEmptyComponent={
                                <View style={styles.emptyContainer}>
                                    <TextCustomComponent 
                                        text="No tienes activos en tu portafolio" 
                                        fontSize="sm" 
                                        color="secondary" 
                                    />
                                </View>
                            }
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 100 }}
                        />
                    )}
                </View>
            </View>
        </ContainerComponent>
    );
};
