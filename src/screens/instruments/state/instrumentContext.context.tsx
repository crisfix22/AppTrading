import { createContext, useContext, useState } from "react";
import { InstrumentsContextType } from "./interface/instrumentsContext.interface";
import { Instrument } from "../services/interface/instruments.interface";

export const InstrumentContext = createContext<InstrumentsContextType>({
    instruments: [],
    setInstruments: () => {},
});

export const InstrumentProvider = ({ children }: { children: React.ReactNode }) => {
    const [instruments, setInstruments] = useState<Array<Instrument>>([]);
    return (
        <InstrumentContext.Provider value={{ instruments, setInstruments }}>
            {children}
        </InstrumentContext.Provider>
    );
};

export const useInstrumentContext = () => {
    const context = useContext(InstrumentContext);
    if (!context) {
        throw new Error('useInstrumentContext must be used within a InstrumentProvider');
    }
    return context;
};