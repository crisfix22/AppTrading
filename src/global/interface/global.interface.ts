
export type ScreenViewType = 'error' | 'loading' | 'empty' | 'success';
export type ScreenView = {
    [key in ScreenViewType]?: () => React.ReactNode;
}
