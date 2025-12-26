import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { Instrument } from "../services/interface/instruments.interface";
import { getInstruments, searchInstruments } from "../services/instruments.service";
import { useState } from "react";

export const useInstruments = () => {
    const [instruments, setInstruments] = useState<Array<Instrument>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [originalInstruments , setOriginalInstruments] = useState<Array<Instrument>>([]);
    const [orderModalVisible, setOrderModalVisible] = useState(false);
    const [instrument, setInstrument] = useState<Instrument>();
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
            setOriginalInstruments(response.data);
        } else {
            setError(response.message || 'Error al cargar los instrumentos');
        }
    };
    /**
     * Search the instruments
     * @param {string} search - The search term
     * @returns The instruments
     */
    const handleSearchInstruments = async(search: string): Promise<void> => {
        setLoading(true);
        if (search.length > 2) {
          const response = await searchInstruments(search);
            if (response.status === 'success') {
                setInstruments(response.data);
            } else {
                setError(response.message || 'Error al buscar los instrumentos');
            }
        } else if (search.length === 0) {
            setInstruments(originalInstruments);
        }
        setLoading(false);

    };
    const handleInstrumentPress = (instrument: Instrument) => {
        setOrderModalVisible(true);
        setInstrument(instrument);
    }

    return {
        loadInstruments,
        instruments,
        loading,
        error,
        handleSearchInstruments,
        handleInstrumentPress,
        orderModalVisible,
        setOrderModalVisible,
        instrument,
    };
};