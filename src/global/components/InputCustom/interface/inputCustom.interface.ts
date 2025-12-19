import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { ColorType } from "../../../styles/color.styles";

export type InputSize = 'sm' | 'md' | 'lg';


export interface InputCustomProps {
    label?: string;
    error?: string;
    helperText?: string;
    size?: InputSize;
    editable?: boolean;
    style?: StyleProp<ViewStyle>;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    containerStyle?: ViewStyle;
    placeholder?: string;
    placeholderTextColor?: ColorType;
    onFocus?: () => void;
    onBlur?: () => void;
    onChangeText: (text: string) => void;
    nativeTextInputProps?: Omit<TextInputProps, 'style' | 'children' | 'placeholderTextColor' | 'editable' | 'onFocus' | 'onBlur' | 'onChangeText'>;
  }