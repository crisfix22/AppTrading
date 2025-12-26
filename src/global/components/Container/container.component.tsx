import { View } from "react-native";
import { ContainerProps } from "./interface/container.interface";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ContainerComponent = ({ children, addSafeAreaInsets = true, backgroundColor = 'white' }: ContainerProps) => {
    const { top, bottom, left, right } = useSafeAreaInsets();
    const [padding, setPadding] = useState({
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
    });
    useEffect(() => {
        if (addSafeAreaInsets) {
            setPadding({
                paddingTop: top,
                paddingBottom: bottom,
                paddingLeft: left,
                paddingRight: right,
            });
        }
    }, [addSafeAreaInsets]);
    return (
        <View style={[padding, { backgroundColor }]}>
            {children}
        </View>
    )
}