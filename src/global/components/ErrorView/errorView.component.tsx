import { View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { ErrorViewProps } from './interface/errorView.interface';
import { TextCustomComponent } from '../TextCustom/textCustom.component';
import { ButtonCustomComponent } from '../ButtonCustom/buttonCustom.component';
import { Colors } from '../../styles/color.styles';
import { styles } from './errorView.styles';

export const ErrorViewComponent = ({ message, onRetry, retryText = 'Reintentar' }: ErrorViewProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="alert-circle-outline" size={48} color={Colors.danger} />
            </View>
            <TextCustomComponent 
                text={message} 
                fontSize="md" 
                color="secondary" 
                style={styles.message}
            />
            {onRetry && (
                <ButtonCustomComponent 
                    title={retryText}
                    variant="primary"
                    size="md"
                    onPress={onRetry}
                    style={styles.retryButton}
                />
            )}
        </View>
    );
};

