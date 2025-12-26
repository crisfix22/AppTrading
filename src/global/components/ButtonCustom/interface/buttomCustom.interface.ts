import { ButtonProps, StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { styles } from "../buttonCustom.styles";
import { ColorType } from "../../../styles/color.styles";

export type ButtonVariantType = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost' ;
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';
export type ColorByVariantType = {
    [key in ButtonVariantType]: ColorType;
}


export interface ButtonCustomProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariantType;
    size?: ButtonSizeType;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    nativeButtonProps?: Omit<ButtonProps, 'style' | 'children' | 'variant' | 'size' | 'loading' | 'fullWidth' | 'leftIcon' | 'rightIcon'>;
  }