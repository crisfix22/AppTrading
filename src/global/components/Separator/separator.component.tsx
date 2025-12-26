import { StyleProp, View, ViewStyle } from "react-native"
import { styles } from "./separator.styles"
export const SeparatorComponent = ({ style }: { style?: StyleProp<ViewStyle> }) => {
    return (
        <View style={[styles.separator, style]} />
    )
}