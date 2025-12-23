import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { Instrument } from "../services/interface/instruments.interface";
import { getInstruments } from "../services/instruments.service";
import { useState } from "react";

export const useInstruments = () => {
    const [instruments, setInstruments] = useState<Array<Instrument>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    /**
     * Load the instruments
     * @returns The instruments
     */
    const loadInstruments = async(): Promise<void> => {
        setLoading(true);
        const response = await getInstruments();
        setLoading(false);
        if (response.status === 'success') {
            setInstruments(response.data);
        } else {
            setError(response.message || 'Error al cargar los instrumentos');
        }
    };

    return {
        loadInstruments,
        instruments,
        loading,
        error,
    };
};