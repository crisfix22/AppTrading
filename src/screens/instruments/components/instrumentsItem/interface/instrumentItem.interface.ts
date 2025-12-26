import { Instrument } from "../../../services/interface/instruments.interface";

export interface InstrumentItemProps {
    instrument: Instrument;
    onPress: (instrument: Instrument) => void;
}