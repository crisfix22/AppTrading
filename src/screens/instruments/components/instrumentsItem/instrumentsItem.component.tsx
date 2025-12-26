import { TouchableOpacity, View } from "react-native";
import { styles } from "./instrumentsItem.styles";
import { InstrumentItemProps } from "./interface/instrumentItem.interface";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { TextCustomComponent } from "../../../../global/components/TextCustom/textCustom.component";
import { Colors } from "../../../../global/styles/color.styles";
import { isPositive } from "../../../../global/utils/utils";
import { useEffect, useState } from "react";



export const InstrumentsItem = ({ instrument, onPress }: InstrumentItemProps) => {
    const [priceChangePercentage, setPriceChangePercentage] = useState(0);

    const calculateReturn = (lastPrice: number, closePrice: number): number => {
        return ((lastPrice - closePrice) / closePrice) * 100;
    };

    useEffect(() => {
        setPriceChangePercentage(calculateReturn(instrument.lastPrice, instrument.closePrice));
    }, [instrument]);
    const handlePress = () => {
        onPress(instrument);
    };
    

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.7}>
            <View style={styles.leftSection}>
                <View style={[styles.icon, isPositive(priceChangePercentage) ? styles.iconPositive : styles.iconNegative]}>
                    <TextCustomComponent 
                        text={instrument.ticker.substring(0, 2)} 
                        fontSize="sm" 
                        color="white" 
                        fontWeight="700" 
                    />
                </View>
                <View style={styles.textContainer}>
                    <TextCustomComponent 
                        text={instrument.ticker} 
                        fontSize="md" 
                        color="primary" 
                        fontWeight="700" 
                    />
                    <TextCustomComponent 
                        text={instrument.name} 
                        fontSize="xs" 
                        color="secondary" 
                        nativeTextProps={{ numberOfLines: 1 }}
                        style={styles.name}
                    />
                </View>
            </View>
            <View style={styles.rightSection}>
                <TextCustomComponent 
                    text={`$${instrument.lastPrice.toLocaleString()}`} 
                    fontSize="md" 
                    color="primary" 
                    fontWeight="700" 
                />
                <View style={styles.returnContainer}>
                    <Ionicons
                        name={isPositive(priceChangePercentage) ? 'arrow-up' : 'arrow-down'}
                        size={14}
                        color={isPositive(priceChangePercentage) ? Colors.success : Colors.danger}
                    />
                    <TextCustomComponent 
                        text={`${Math.abs(priceChangePercentage).toFixed(2)}%`} 
                        fontSize="xs" 
                        color={isPositive(priceChangePercentage) ? 'success' : 'danger'} 
                        fontWeight="700" 
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
