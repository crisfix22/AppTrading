import { StyleProp, ViewStyle } from "react-native";

export interface InputIconProps {
    icon: React.ReactNode;
    onPress: () => void;
    style: StyleProp<ViewStyle>;
}