import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export const useLogin = () => {
    const validateEmail = (email: string) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };
    const validateEmptyFields = (email: string, password: string) => {
        return email.length > 0 && password.length > 0;
    };
   
  const validateEmailAndPassword = (email: string, password: string) => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "Email inválido");
      return false;
    }
    if (!validateEmptyFields(email, password)) {
      Alert.alert("Error", "Email y contraseña son requeridos");
      return false;
    }
    return true;
  };
    return { validateEmail, validateEmptyFields, validateEmailAndPassword };
};