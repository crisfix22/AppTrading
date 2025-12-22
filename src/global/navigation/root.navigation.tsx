import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../../screens/login/login.screen";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import { HomeTabs } from "../../screens/home/navigation/home.navigation";

const RootStack = createNativeStackNavigator({
    initialRouteName: "Login",
    screens: {
        Login: {
            screen: LoginScreen,
            options: {
                headerShown: false,
            },
        },
        Home: {
            screen: HomeTabs,
            options: {
                headerShown: false,
            },
        },
    },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const RootNavigation = createStaticNavigation(RootStack);
