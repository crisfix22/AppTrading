import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface CardProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    disabled?: boolean;
}

