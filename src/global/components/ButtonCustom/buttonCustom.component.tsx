import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle} from 'react-native';
import { styles } from './buttonCustom.styles';
import { ButtonCustomProps } from './interface/buttomCustom.interface';
import { TextCustomComponent } from '../TextCustom/textCustom.component';
import { useButtonCustom } from './hooks/useButtonCustom.hook';


export const ButtonCustomComponent = ({ title, variant = 'primary', size = 'md',loading = false,fullWidth = false,
  disabled = false,leftIcon,rightIcon,style,nativeButtonProps } : ButtonCustomProps) => {
  const { getColorByVariant, getActivityIndicatorColor } = useButtonCustom();

  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style as ViewStyle,
      ]}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...nativeButtonProps}
    >
      {loading ? (
        <ActivityIndicator
          color={getActivityIndicatorColor(variant)}
        />
      ) : (
        <>
          {leftIcon}
          <TextCustomComponent text={title} fontSize="md" color={getColorByVariant(variant)} />
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};