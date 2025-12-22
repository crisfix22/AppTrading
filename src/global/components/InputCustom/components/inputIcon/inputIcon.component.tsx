import { TouchableOpacity } from "react-native";
import { InputIconProps } from "./interface/inputIcon.interface";

export const InputIcon = ({icon, onPress, style}: InputIconProps) => {
    return (
      <TouchableOpacity style={style} 
      disabled={onPress === undefined} 
      onPress={onPress} activeOpacity={0.7}>{icon}</TouchableOpacity>
    );
  };