export interface AlertModalProps {
    visible: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
}