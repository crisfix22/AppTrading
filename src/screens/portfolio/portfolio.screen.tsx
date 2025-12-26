import { useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { usePortfolio } from "./hooks/usePortfolio.hooks";
import { PortfolioItem } from "./components/portfolioItem/portfolioItem.component";
import { styles } from "./portfolio.styles";
import { Colors } from "../../global/styles/color.styles";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { ContainerComponent } from "../../global/components/Container/container.component";
import { PortfolioHeaderComponent } from "./components/portfolioHeader/portfolioHeader.component";

export const PortfolioScreen = () => {
    const { portfolio, loading, loadPortfolio, summary } = usePortfolio();

    useEffect(() => {
        loadPortfolio();
    }, []);


    return (
        <ContainerComponent>    
            <View style={styles.container}>
             {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={Colors.primary} />
                    </View>
                )}
                <PortfolioHeaderComponent summary={summary} />

                <View style={styles.mainContent}>
                    <TextCustomComponent 
                        text="TUS ACTIVOS" 
                        fontSize="xs" 
                        color="muted" 
                        fontWeight="700" 
                        style={styles.sectionTitle}
                    />
                    
                    <FlatList
                        data={portfolio}
                        keyExtractor={(item) => `${Math.random()}-${item.ticker}`}
                        renderItem={({ item }) => <PortfolioItem item={item} />}
                        ListEmptyComponent={
                            !loading ? (
                                <View style={styles.emptyContainer}>
                                    <TextCustomComponent 
                                        text="No tienes activos en tu portafolio" 
                                        fontSize="sm" 
                                        color="secondary" 
                                    />
                                </View>
                            ) : null
                        }
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />
                </View>
            </View>
        </ContainerComponent>
    );
};
