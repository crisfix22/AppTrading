export type ColorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'white' | 'muted' | 'ghost' | 'outline' | 'inputBackground';
export type ColorValues = {
    [key in ColorType]: string;
}

export const Colors: ColorValues = {
    primary: '#111827',
    secondary: '#6b7280',
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#eab308',
    white: '#ffffff',
    muted: '#9ca3af',
    ghost: '#2563eb',
    outline: '#d1d5db',
    inputBackground: '#f3f4f6',
    
};
