import { KeyboardAvoidingView, View } from "react-native";
import { TextCustomComponent } from "../../global/components/TextCustom/textCustom.component";
import { InputCustomComponent } from "../../global/components/InputCustom/inputCustom.component";
import { ButtonCustomComponent } from "../../global/components/ButtonCustom/buttonCustom.component";
import { styles } from "./login.styles";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Colors } from "../../global/styles/color.styles";
import { useState } from "react";
export const LoginScreen = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    console.log("show password", showPassword);
    setShowPassword(!showPassword);
  };
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
          rightIcon={<MaterialIcons name="email" size={24} color={Colors.outline} />}
        />
        <InputCustomComponent
          label="Password"
          placeholder="Password"
          placeholderTextColor="secondary"
          rightIcon={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24}  color={Colors.outline}/>}
          onRightIconPress={handleShowPassword}
          onChangeText={(text) => console.log(text)}
          nativeTextInputProps={{
            secureTextEntry: !showPassword,
          }}
        />
      </KeyboardAvoidingView>
      <ButtonCustomComponent style={styles.button} title="Login" variant="primary" size="lg" fullWidth={true} />
    </View>
  );
};