import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/color.styles';

export const styles = StyleSheet.create({
  base: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
   // Variants
   primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  success: {
    backgroundColor: Colors.success,
  },
  danger: {
    backgroundColor: Colors.danger,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.outline,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  textPrimary: {
    color: Colors.white,
  },
  textSecondary: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  textSuccess: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  textDanger: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  textOutline: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  textGhost: {
    color: Colors.ghost,
    fontSize: 16,
    fontWeight: '700',
  },
  sm: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  xs: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  md: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  lg: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 18,
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
});