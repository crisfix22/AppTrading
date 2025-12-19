import { KeyboardAvoidingView, View } from "react-native";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { InputCustomComponent } from "../../global/components/InputCustom/inputCustom.component";
import { ButtonCustomComponent } from "../../global/components/ButtonCustom/buttonCustom.component";
import { styles } from "./login.styles";
export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextCustomComponent text="Bienvenido a la App Trading" fontSize="3xl" color="primary"  fontWeight="bold"/>
      <TextCustomComponent text="Ingresa tus datos para continuar" fontSize="md" color="secondary"  fontWeight="regular"/>
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <InputCustomComponent
          label="Email"
          placeholder="Email"
          placeholderTextColor="secondary"
          onChangeText={(text) => console.log(text)}
        />
        <InputCustomComponent
          label="Password"
          placeholder="Password"
          placeholderTextColor="secondary"
          onChangeText={(text) => console.log(text)}
        />
      </KeyboardAvoidingView>
      <ButtonCustomComponent style={styles.button} title="Login" variant="primary" size="lg" fullWidth={true} />
    </View>
  );
};