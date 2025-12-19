import { StyleProp, TextProps, TextStyle } from "react-native";
import { ColorType } from "../../../styles/color.styles";

export type FontSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type FontSize = {
    [key in FontSizeType]: number;
}
export type FontWeightType = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold' | 'black';
export type FontWeight = {
    [key in FontWeightType]: string;
}

export const FontSizes: FontSize = {
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 22,
    '3xl': 24,
    '4xl': 26,
};

export interface TextCustomProps {
  text: string;
  style?: StyleProp<TextStyle>;
  fontSize: FontSizeType;
  fontWeight?: TextStyle['fontWeight'];
  color?: ColorType;
  align?: 'left' | 'center' | 'right' | 'justify';
  nativeTextProps?: Omit<TextProps, 'style' | 'children' | 'color' | 'fontSize' | 'fontWeight' | 'align'>;

}