import { StyleProp, ViewStyle } from "react-native";
import { ColorType } from "../../../styles/color.styles";

export interface ContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    addSafeAreaInsets?: boolean;
    backgroundColor?: ColorType;
}