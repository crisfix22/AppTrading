import { Colors, ColorType } from "../../color.styles";

export const useColors = () => {
    /**
     * Get the color by type
     * @param {ColorType} color -  Color type
     * @returns {string} - Color by type
     */
    const getColor = (color: ColorType): string => {
        if (!Colors[color]) {
            throw new Error(`Color ${color} not found`);
        }
        return Colors[color];
    };
    
    return {
        getColor,
    }; 
};