import { View } from "react-native"
import { ButtonCustomComponent } from "../ButtonCustom/buttonCustom.component"
import { ButtonGroupButton, ButtonGroupProps } from "./interface/buttonGroup.interface"
import { styles } from "./buttonGroup.style"
import { useEffect } from "react"

export const ButtonGroupComponent = <Value,>({ buttons, onValueChange, selectedValue, containerStyle }: ButtonGroupProps<Value>) => {

    const handleVariant = (button: ButtonGroupButton<Value>) => {
        const result = selectedValue === button.value ? button.buttonProps.variant : 'outline'
        return result;
    }

    return (
        <View style={[styles.container, containerStyle]}>
            {buttons.map((button) => (
                <ButtonCustomComponent {...button.buttonProps} style={button.style}  variant={handleVariant(button)} key={button.buttonProps.title}  onPress={() => onValueChange(button.value)} />
            ))}
        </View>
    )
}
