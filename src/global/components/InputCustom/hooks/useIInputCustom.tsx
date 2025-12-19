import { useColors } from "../../../styles/hooks/colors/useColors.hook";

export const useInputCustom = () => {
    const { getColor } = useColors(); 
    /**
     * Check if the left icon is present
     * @param {React.ReactNode} leftIcon - Left icon
     * @returns {boolean} - True if the left icon is present, false otherwise
     */
    const getPaddingLeftIcon = (leftIcon: React.ReactNode) => {
        return leftIcon ? 8 : 0;
    };
    /**
     * Check if the right icon is present
     * @param {React.ReactNode} rightIcon - Right icon
     * @returns {boolean} - True if the right icon is present, false otherwise
     */
    const getPaddingRightIcon = (rightIcon: React.ReactNode) => {
        return rightIcon ? 8 : 0;
    };
    return {
        getColor,
        getPaddingLeftIcon,
        getPaddingRightIcon,
    };
};