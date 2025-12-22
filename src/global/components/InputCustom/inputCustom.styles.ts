import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/color.styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputBackground,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: Colors.primary,
  },
  // States
  focused: {
    borderColor: Colors.primary,
  },
  error: {
    borderColor: Colors.danger,
  },
  disabled: {
    opacity: 0.5,
  },
  leftIcon: {
    paddingLeft: 16,
  },
  rightIcon: {
    paddingRight: 16,
  },

  sm: {
    paddingVertical: 12,
    fontSize: 14,
  },
  md: {
    paddingVertical: 16,
    fontSize: 16,
  },
  lg: {
    paddingVertical: 20,
    fontSize: 18,
  },
});