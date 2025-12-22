import { StyleProp, ViewStyle } from "react-native";

export interface ContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    addSafeAreaInsets?: boolean;
}