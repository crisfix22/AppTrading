import { View } from "react-native";
import { TextCustomComponent } from "../../../../global/components/TextCustom/textCustom.component";
import { styles } from "./portfolioHeader.styles";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../../../global/styles/color.styles";
import { PortfolioHeaderProps } from "./interface/portfolioHeader.interface";

export const PortfolioHeaderComponent = ({ summary }: PortfolioHeaderProps) => {

    if (!summary) {
        return null;
    }
    const isPositive = () => summary.totalGain >= 0;
    return (
        <View style={styles.header}>
        <View style={styles.headerTop}>
            <TextCustomComponent text="Portafolio" fontSize="4xl" color="primary" fontWeight="800" />
        </View>

        <View style={styles.summaryContainer}>
            <TextCustomComponent text="Valor Total" fontSize="sm" color="secondary" fontWeight="500" />
            <TextCustomComponent 
                text={`$${summary.totalValue.toLocaleString()}`} 
                fontSize="5xl" 
                color="primary" 
                fontWeight="900" 
            />
            <View style={styles.summaryGain}>
                <Ionicons
                    name={isPositive() ? 'arrow-up' : 'arrow-down'}
                    size={16}
                    color={isPositive() ? Colors.success : Colors.danger}
                />
                <TextCustomComponent 
                    text={`${isPositive() ? '+' : ''}$${summary.totalGain.toLocaleString()} (${summary.totalGainPercentage.toFixed(1)}%)`} 
                    fontSize="sm" 
                    color={isPositive() ? 'success' : 'danger'} 
                    fontWeight="700" 
                />
            </View>
        </View>
    </View>
    );
};