import { Instrument } from "../../services/interface/instruments.interface";

export interface InstrumentsContextType {
    instruments: Array<Instrument>;
    setInstruments: (instruments: Array<Instrument>) => void;
   
}