import { TouchableOpacity } from "react-native";
import { CardProps } from "./interface/card.interface";
import { styles } from "./card.styles";

export const CardComponent = ({ children, style, onPress, disabled }: CardProps) => {
    return (
        <TouchableOpacity style={[styles.card, style]} onPress={onPress} disabled={disabled} activeOpacity={0.7}>
            {children}
        </TouchableOpacity>
    );
};

