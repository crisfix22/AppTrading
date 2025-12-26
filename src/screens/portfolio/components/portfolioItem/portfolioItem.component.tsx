import { View } from "react-native";
import { PortfolioItemProps } from "./interface/portfolioItem.interface";
import { TextCustomComponent } from "../../../../global/components/TextCustom/textCustom.component";
import { CardComponent } from "../../../../global/components/Card/card.component";
import { styles } from "./portfolioItem.styles";
import { isPositive } from "../../../../global/utils/utils";
import { useEffect, useState } from "react";

export const PortfolioItem = ({ item }: PortfolioItemProps) => {
    const [marketValue, setMarketValue] = useState(0);
    const [gain, setGain] = useState(0);
    const [gainPercentage, setGainPercentage] = useState(0);
    useEffect(() => {
        setMarketValue(item.quantity * item.lastPrice);
        setGain((item.lastPrice - item.avgCostPrice) * item.quantity);
        setGainPercentage(((item.lastPrice - item.avgCostPrice) / item.avgCostPrice) * 100);
    }, [item]);

    return (
        <CardComponent disabled={true}>
            <View style={styles.cardTop}>
                <View style={styles.cardLeft}>
                    <View style={styles.tickerBadge}>
                        <TextCustomComponent 
                            text={item.ticker} 
                            fontSize="sm" 
                            color="primary" 
                            fontWeight="900" 
                        />
                    </View>
                    <TextCustomComponent 
                        text={`${item.quantity} unidades`} 
                        fontSize="sm" 
                        color="muted" 
                        fontWeight="700" 
                    />
                </View>
                <View style={styles.cardRight}>
                    <TextCustomComponent 
                        text="VALOR MERCADO" 
                        fontSize="xs" 
                        color="muted" 
                        fontWeight="700" 
                    />
                    <TextCustomComponent 
                        text={`$${marketValue.toLocaleString()}`} 
                        fontSize="xl" 
                        color="primary" 
                        fontWeight="900" 
                    />
                </View>
            </View>
            <View style={styles.cardBottom}>
                <View>
                    <TextCustomComponent 
                        text="COSTO PROMEDIO" 
                        fontSize="xs" 
                        color="muted" 
                        fontWeight="700" 
                    />
                    <TextCustomComponent 
                        text={`$${item.avgCostPrice.toLocaleString()}`} 
                        fontSize="sm" 
                        color="secondary" 
                        fontWeight="700" 
                    />
                </View>
                <View style={styles.gainContainer}>
                    <TextCustomComponent 
                        text="GANANCIA TOTAL" 
                        fontSize="xs" 
                        color="muted" 
                        fontWeight="700" 
                    />
                    <TextCustomComponent 
                        text={`${isPositive(gain) ? '+' : ''}$${gain.toLocaleString()} (${gainPercentage.toFixed(2)}%)`} 
                        fontSize="sm" 
                        color={isPositive(gain) ? 'success' : 'danger'} 
                        fontWeight="900" 
                    />
                </View>
            </View>
        </CardComponent>
    );
};
