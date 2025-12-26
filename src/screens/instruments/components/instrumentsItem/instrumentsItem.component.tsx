import { TouchableOpacity } from "react-native";
import { styles } from "./instrumentsItem.styles";
import { TextCustomComponent } from "../../../../global/components/TextCustom/textCustom.component";
import { Instrument } from "../../services/interface/instruments.interface";

export const InstrumentsItemComponent = ({ instrument }: { instrument: Instrument }) => {
    const handlePress = () => {
        console.log("Instruments Item pressed", instrument);
    };
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <TextCustomComponent text={instrument.ticker} fontSize="lg" color="primary" fontWeight="bold" />
            <TextCustomComponent text={instrument.name} fontSize="md" color="secondary" fontWeight="regular" />
            <TextCustomComponent text={instrument.type} fontSize="md" color="secondary" fontWeight="regular" />
        </TouchableOpacity>
    );
};