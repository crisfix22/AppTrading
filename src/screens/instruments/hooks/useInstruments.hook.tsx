import { BaseResponse } from "../../../global/api/interface/axios.interface";
import { Instrument } from "../services/interface/instruments.interface";
import { getInstruments, searchInstruments } from "../services/instruments.service";
import { useState } from "react";
import { useInstrumentContext } from "../state/instrumentContext.context";
import { ScreenView, ScreenViewType } from "../../../global/interface/global.interface";

export const useInstruments = () => {
    const { setInstruments: setInstrumentsContext, instruments: instrumentsContext } = useInstrumentContext();
    const [instruments, setInstruments] = useState<Array<Instrument>>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [originalInstruments , setOriginalInstruments] = useState<Array<Instrument>>([]);
    const [orderModalVisible, setOrderModalVisible] = useState(false);
    const [instrument, setInstrument] = useState<Instrument>();
    const [screenViewType, setScreenViewType] = useState<ScreenViewType>('success');
    /**
     * Load the instruments
     * @returns The instruments
     */
    const loadInstruments = async(refresh = false): Promise<void> => {
        setScreenViewType('loading');
        if (instrumentsContext.length > 0 && !refresh) {
            setError(undefined);
            setInstruments(instrumentsContext);
            setOriginalInstruments(instrumentsContext);
            setScreenViewType(instrumentsContext.length > 0 ? 'success' : 'empty');
            return;
        }
        const response = await getInstruments();
        if (response.status === 'success') {
            setError(undefined);
            setInstruments(response.data);
            setOriginalInstruments(response.data);
            setInstrumentsContext(response.data);
            setScreenViewType(response.data.length > 0 ? 'success' : 'empty');
        } else {
            setError(response.message || 'Error al cargar los instrumentos');
            setScreenViewType('error');
        }
    };
    /**
     * Search the instruments
     * @param {string} search - The search term
     * @returns The instruments
     */
    const handleSearchInstruments = async(search: string): Promise<void> => {
        if (search.length > 2) {
          setScreenViewType('loading');
          const response = await searchInstruments(search.toUpperCase());
            if (response.status === 'success') {
                setError(undefined);
                setInstruments(response.data);
                setScreenViewType('success');
            } else {
                setError(response.message || 'Error al buscar los instrumentos');
                setScreenViewType('error');
            }
        } else if (search.length === 0) {
            setError(undefined);
            setInstruments(originalInstruments);
            setInstrumentsContext(originalInstruments);
            setScreenViewType(originalInstruments.length > 0 ? 'success' : 'empty');
        }

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
        error,
        screenViewType,
        handleSearchInstruments,
        handleInstrumentPress,
        orderModalVisible,
        setOrderModalVisible,
        instrument,
        refreshInstruments,
    };
};