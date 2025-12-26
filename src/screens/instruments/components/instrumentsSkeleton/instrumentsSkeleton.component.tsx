import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { styles } from "./instrumentsSkeleton.styles";

const COUNT = 8;
export const InstrumentsSkeleton = () => {
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
                <View key={index}>
                    <Animated.View style={[styles.container, { opacity: animatedValue }]}>
                        <View style={styles.leftSection}>
                            <View style={styles.icon} />
                            <View style={styles.textContainer}>
                                <View style={styles.tickerPlaceholder} />
                                <View style={styles.namePlaceholder} />
                            </View>
                        </View>
                        <View style={styles.rightSection}>
                            <View style={styles.pricePlaceholder} />
                            <View style={styles.percentagePlaceholder} />
                        </View>
                    </Animated.View>
                    {index < COUNT - 1 && <View style={styles.separator} />}
                </View>
            ))}
        </View>
    );
};

