import { FontSize, FontSizeType, FontSizes, FontWeightType } from "../interfaces/textCustom.interface";
import { useColors } from "../../../styles/hooks/colors/useColors.hook";

export const useTextCustom = () => {
    const { getColor } = useColors();

    /**
     * Get the font size by type
     * @param {FontSizeType} fontSize - Font size type
     * @returns {number} - Font size by type
     */
    const getFontSize = (fontSize: FontSizeType): number => {
        return FontSizes[fontSize];
    };

    return {
        getFontSize,
        getColor,
    };
}