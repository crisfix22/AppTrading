import { useColors } from "../../../styles/hooks/colors/useColors.hook";
import { styles } from "../buttonCustom.styles";
import { ButtonVariantType, ColorByVariantType } from "../interface/buttomCustom.interface";

export const useButtonCustom = () => {
    const { getColor } = useColors();
    const colorByVariant: ColorByVariantType = {
        primary: 'white',
        secondary: 'primary',
        success: 'white',
        danger: 'white',
        outline: 'primary',
        ghost: 'ghost',
    }
    const getVariant = (variant: ButtonVariantType) => {
        return styles[variant];
    }
    const getColorByVariant = (variant: ButtonVariantType) => {
        return colorByVariant[variant];
    }
    const getActivityIndicatorColor = (variant: ButtonVariantType) => {
        return getColor(variant === 'secondary' || variant === 'outline' ? 'primary' : 'white');
    }

    return {
        getVariant,
        getColorByVariant,
        getActivityIndicatorColor,
    }
}