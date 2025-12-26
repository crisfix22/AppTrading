import { TouchableOpacity } from "react-native";
import { styles } from "./instrumentsItem.styles";
import { TextCustomComponent } from "../../../../global/components/TextCustom/textCustom.component";
import { InstrumentItemProps } from "./interface/instrumentItem.interface";

export const InstrumentsItemComponent = ({ instrument, onPress }: InstrumentItemProps) => {
    const handlePress = () => {
        console.log("Instruments Item pressed", instrument);
        onPress(instrument);
    };
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <TextCustomComponent text={instrument.ticker} fontSize="lg" color="primary" fontWeight="bold" />
            <TextCustomComponent text={instrument.name} fontSize="md" color="secondary" fontWeight="regular" />
            <TextCustomComponent text={instrument.type} fontSize="md" color="secondary" fontWeight="regular" />
        </TouchableOpacity>
    );
};