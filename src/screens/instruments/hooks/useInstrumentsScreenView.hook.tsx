import { View, FlatList, RefreshControl } from "react-native"
import { ScreenView, ScreenViewType } from "../../../global/interface/global.interface"
import { Colors } from "../../../global/styles/color.styles"
import { styles } from "../instruments.styles"
import { ErrorViewComponent } from "../../../global/components/ErrorView/errorView.component";
import { InstrumentsSkeleton } from "../components/instrumentsSkeleton/instrumentsSkeleton.component";
import { TextCustomComponent } from "../../../global/components/TextCustom/textCustom.component";
import { Instrument } from "../services/interface/instruments.interface";
import { InstrumentsItem } from "../components/instrumentsItem/instrumentsItem.component";


export const useInstrumentsScreenView = (screenViewType: ScreenViewType, 
    error: string, refreshInstruments: () => void, instruments: Instrument[], handleInstrumentPress: (instrument: Instrument) => void) => {
    const screenView: ScreenView = {
        error: () => <ErrorViewComponent message={error ?? 'Error al cargar los instrumentos'} onRetry={refreshInstruments} />,
        loading: () => <InstrumentsSkeleton />,
        empty: () => <View style={styles.emptyContainer}>
            <TextCustomComponent text="No hay instrumentos" fontSize="sm" color="secondary" />
        </View>,
        success: () => <FlatList data={instruments}  keyExtractor={(item) => `${item.id}-${item.name}`}  renderItem={({ item }) => (<InstrumentsItem instrument={item} onPress={handleInstrumentPress} /> )} 
        contentContainerStyle={styles.listContainer} refreshing={screenViewType === 'loading'}onRefresh={refreshInstruments}
        refreshControl={
            <RefreshControl
                refreshing={screenViewType === 'loading'}
                onRefresh={refreshInstruments}
                colors={[Colors.primary]}
                tintColor={Colors.primary}
            />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
    />
    };
    return {
        screenView,
    };
};