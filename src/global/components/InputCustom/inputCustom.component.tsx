import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './inputCustom.styles';
import { InputCustomProps } from './interface/inputCustom.interface';
import { TextCustomComponent } from '../TextCustom/textCustom.component';
import { useInputCustom } from './hooks/useIInputCustom';
import { InputIcon } from './components/inputIcon/inputIcon.component';

export const InputCustomComponent = ({ label,error,helperText,size = 'md',
    leftIcon,rightIcon,editable = true,containerStyle,style, placeholder, placeholderTextColor, 
    onFocus, onBlur, onChangeText, onLeftIconPress, onRightIconPress, nativeTextInputProps }: InputCustomProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { getColor, getPaddingLeftIcon, 
    getPaddingRightIcon, handleLeftIconPress, handleRightIconPress } = useInputCustom(onLeftIconPress, onRightIconPress);

  

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <TextCustomComponent text={label} fontSize="sm" color="secondary" />}
      
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.focused,
          error && styles.error,
          !editable && styles.disabled,
        ]}
      >
        {leftIcon && <InputIcon icon={leftIcon} onPress={handleLeftIconPress} style={styles.leftIcon} />}
        
        <TextInput
          style={[
            styles.input,
            styles[size],
            { paddingLeft: getPaddingLeftIcon(leftIcon) },
            { paddingRight: getPaddingRightIcon(rightIcon) },
            style,
          ]}
          placeholder={placeholder}
          placeholderTextColor={getColor(placeholderTextColor ||  'secondary')}
          editable={editable}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={(e) => {
            console.log('onBlur', e);
            setIsFocused(false);
            onBlur?.();
          }}
          onChangeText={(text) => onChangeText?.(text)}
          {...nativeTextInputProps}
        />
        
        {rightIcon && <InputIcon icon={rightIcon} onPress={handleRightIconPress} style={styles.rightIcon} />}
      </View>
      
      {error && <TextCustomComponent text={error} fontSize="sm" color="danger" />}
      {!error && helperText && <TextCustomComponent text={helperText} fontSize="sm" color="secondary" />}
    </View>
  );
};