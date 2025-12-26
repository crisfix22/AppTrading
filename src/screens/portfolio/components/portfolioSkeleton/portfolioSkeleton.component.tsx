import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { styles } from "./portfolioSkeleton.styles";

const COUNT = 4;

export const PortfolioSkeleton = () => {
    const animatedValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 0.4,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        );

        animation.start();

        return () => animation.stop();
    }, [animatedValue]);

    return (
        <View>
            {Array.from({ length: COUNT }).map((_, index) => (
                <Animated.View 
                    key={index} 
                    style={[styles.card, { opacity: animatedValue }]}
                >
                    <View style={styles.cardTop}>
                        <View style={styles.cardLeft}>
                            <View style={styles.tickerBadgePlaceholder} />
                            <View style={styles.unitsPlaceholder} />
                        </View>
                        <View style={styles.cardRight}>
                            <View style={styles.labelPlaceholder} />
                            <View style={styles.valuePlaceholder} />
                        </View>
                    </View>

                    <View style={styles.cardBottom}>
                        <View>
                            <View style={styles.labelPlaceholder} />
                            <View style={styles.smallValuePlaceholder} />
                        </View>
                        <View style={styles.gainContainer}>
                            <View style={styles.labelPlaceholder} />
                            <View style={styles.gainPlaceholder} />
                        </View>
                    </View>
                </Animated.View>
            ))}
        </View>
    );
};

