import { TextCustomProps } from "./interfaces/textCustom.interface";
import { styles } from "./textCustom.styles";
import { Text } from "react-native";
import { useTextCustom } from "./hooks/useTextCustom.hook";

export const TextCustomComponent = ({ text, color, fontSize, fontWeight, nativeTextProps, style }: TextCustomProps) => {

    const { getColor, getFontSize } = useTextCustom();
   
    return (
        <Text {...nativeTextProps} style={[style, styles.text, { color: getColor(color || 'primary'),
         fontSize: getFontSize(fontSize), fontWeight: fontWeight}]}>
            {text}
        </Text>
    );
};   