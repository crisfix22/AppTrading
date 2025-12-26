import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useUserContext } from "../../../global/state/user/userContext.context";
import { loginService } from "../services/login.service";

export const useLogin = () => {
    const { setUser } = useUserContext();
    /**
     * Validate email
     * @param {string} email - Email to validate
     * @returns {boolean} - True if email is valid, false otherwise
     */
    const validateEmail = (email: string) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };
    /**
     * Validate empty fields
     * @param {string} email - Email to validate
     * @param {string} password - Password to validate
     * @returns {boolean} - True if email and password are valid, false otherwise
     */
    const validateEmptyFields = (email: string, password: string) => {
        return email.length > 0 && password.length > 0;
    };
   
  /**
   * Validate email and password
   * @param {string} email - Email to validate
   * @param {string} password - Password to validate
   * @returns {boolean} - True if email and password are valid, false otherwise
   */
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
   /**
   * Login
   * @param {string} email - Email to validate
   * @param {string} password - Password to validate
   * @returns {boolean} - True if login is successful, false otherwise
   */
   const login = async (email: string, password: string): Promise<boolean> => {
    if (!validateEmailAndPassword(email, password)) {
      return false;
    }
    const response = await loginService(email, password);
    if (response.status === 'success' && response.data) {
      setUser(response.data);
      return true;
    }
    return false;
  }
 
    return { validateEmail, validateEmptyFields, validateEmailAndPassword, login };
};