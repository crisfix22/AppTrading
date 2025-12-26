import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { Instrument } from "../services/interface/instruments.interface";
import { getInstruments, searchInstruments } from "../services/instruments.service";
import { useState } from "react";
import { useInstrumentContext } from "../state/instrumentContext.context";

export const useInstruments = () => {
    const { setInstruments: setInstrumentsContext, instruments: instrumentsContext } = useInstrumentContext();
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
    const loadInstruments = async(refresh = false): Promise<void> => {
        setLoading(true);
        if (instrumentsContext.length > 0 && !refresh) {
            setError(undefined);
            setInstruments(instrumentsContext);
            setOriginalInstruments(instrumentsContext);
            setLoading(false);
            return;
        }
        const response = await getInstruments();
        setLoading(false);
        if (response.status === 'success') {
            setError(undefined);
            setInstruments(response.data);
            setOriginalInstruments(response.data);
            setInstrumentsContext(response.data);
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
          const response = await searchInstruments(search.toUpperCase());
            if (response.status === 'success') {
                setError(undefined);
                setInstruments(response.data);
            } else {
                setError(response.message || 'Error al buscar los instrumentos');
            }
        } else if (search.length === 0) {
            setError(undefined);
            setInstruments(originalInstruments);
        }
        setLoading(false);

    };
    const handleInstrumentPress = (instrument: Instrument) => {
        setOrderModalVisible(true);
        setInstrument(instrument);
    }
    const refreshInstruments = async () => {
        await loadInstruments(true);
    };

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
        refreshInstruments,
    };
};