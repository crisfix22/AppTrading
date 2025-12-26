import { ButtonCustomProps } from "../../ButtonCustom/interface/buttomCustom.interface";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonGroupButton<Value>  {
    value: Value;
    buttonProps: ButtonCustomProps;
    style?: StyleProp<ViewStyle>;
}

export interface ButtonGroupProps<Value> {
    buttons: Array<ButtonGroupButton<Value>>;
    onValueChange: (value: Value) => void;
    selectedValue: Value;
    containerStyle?: StyleProp<ViewStyle>;
}