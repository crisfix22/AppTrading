import { Alert, KeyboardAvoidingView, Platform, View } from "react-native";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { InputCustomComponent } from "../../global/components/InputCustom/inputCustom.component";
import { ButtonCustomComponent } from "../../global/components/ButtonCustom/buttonCustom.component";
import { styles } from "./login.styles";
import { Colors } from "../../global/styles/color.styles";
import { useState } from "react";
import { useLogin } from "./hooks/useLogin.hook";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@react-native-vector-icons/ionicons";

export const LoginScreen = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);
  const { validateEmailAndPassword } = useLogin();
  const navigation = useNavigation(); 
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log("email", email);
    console.log("password", password);
    if (validateEmailAndPassword(email, password)) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Email o contraseña incorrectos");
    } 
  };

  
  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TextCustomComponent text="Bienvenido a la App Trading" fontSize="3xl" color="primary"  fontWeight="bold"/>
      <TextCustomComponent text="Ingresa tus datos para continuar" fontSize="md" color="secondary"  fontWeight="regular"/>
      <View  style={styles.inputContainer}>
        <InputCustomComponent
          label="Email"
          placeholder="Email"
          placeholderTextColor="secondary"
          onChangeText={(text) => setEmail(text)}
          nativeTextInputProps={{
            value: email,
          }}
          rightIcon={<Ionicons name="mail" size={24} color={Colors.outline} />}
        />
        <InputCustomComponent
          label="Password"
          placeholder="Password"
          placeholderTextColor="secondary"
          rightIcon={<Ionicons name={showPassword ? "eye" : "eye-off"} size={24}  color={Colors.outline}/>}
          onRightIconPress={handleShowPassword}
          onChangeText={(text) => setPassword(text)}
          nativeTextInputProps={{
            secureTextEntry: !showPassword,
            value: password,
          }}
        />
      </View>
      <ButtonCustomComponent style={styles.button}  title="Login" variant="primary" size="lg" 
                            fullWidth={true} onPress={handleLogin} />
    </KeyboardAvoidingView>
  );
};