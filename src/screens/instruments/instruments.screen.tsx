import { FlatList, View, TextInput, RefreshControl } from 'react-native';
import { useInstruments } from './hooks/useInstruments.hook';
import { useEffect } from 'react';
import { Colors } from '../../global/styles/color.styles';
import { InstrumentsItem } from './components/instrumentsItem/instrumentsItem.component';
import { styles } from './instruments.styles';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { OrderModalComponent } from './components/orderModal/orderModal.component';
import { TextCustomComponent } from '../../global/components/TextCustom/textCustom.component';
import { ContainerComponent } from '../../global/components/Container/container.component';
import { InstrumentsSkeleton } from './components/instrumentsSkeleton/instrumentsSkeleton.component';

export const InstrumentsScreen = () => {
    const { instruments, loading, loadInstruments, handleSearchInstruments, 
        handleInstrumentPress, orderModalVisible, setOrderModalVisible, instrument, refreshInstruments} = useInstruments();

    useEffect(() => {
        loadInstruments();
    }, []);

    return (
        <ContainerComponent>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TextCustomComponent text="Mercado" fontSize="4xl" color="primary" fontWeight="800" />
                </View>                
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={18} color={Colors.muted} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar ticker..."
                        placeholderTextColor={Colors.muted}
                        onChangeText={(text) => handleSearchInstruments(text)}
                    />
                </View>
            </View>

            {loading && instruments.length === 0 ? (
                <InstrumentsSkeleton />
            ) : (
                <FlatList 
                    data={instruments} 
                    contentContainerStyle={styles.listContainer}
                    refreshing={loading}
                    onRefresh={refreshInstruments}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={refreshInstruments}
                            colors={[Colors.primary]}
                            tintColor={Colors.primary}
                        />
                    }
                    renderItem={({ item }) => (
                        <InstrumentsItem instrument={item} onPress={handleInstrumentPress} />
                    )}
                    keyExtractor={(item) => `${item.id}-${item.name}`}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListEmptyComponent={
                        !loading ? (
                            <View style={styles.emptyContainer}>
                                <TextCustomComponent text="No hay instrumentos" fontSize="sm" color="secondary" />
                            </View>
                        ) : null
                    }
                    showsVerticalScrollIndicator={false}
                />
            )}
            {instrument && (
                <OrderModalComponent 
                    visible={orderModalVisible} 
                    onRequestClose={() => setOrderModalVisible(false)} 
                    data={instrument} 
                />
            )}
        </View>
        </ContainerComponent>
    );
};
