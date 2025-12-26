import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PortfolioScreen } from "../../portfolio/portfolio.screen";
import { InstrumentsScreen } from "../../instruments/instruments.screen";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { ProfileScreen } from "../../profile/profile.screen";

type TabBarIconType = 'Portfolio' | 'Instruments' | 'Profile';

type TabBarIconComponentType = {
    [key in TabBarIconType]:  (focused: boolean, color: string, size: number) => React.ReactNode;
};

const TabBarIconComponent: TabBarIconComponentType = {
    Portfolio: (focused: boolean, color: string, size: number) => <Ionicons name={'wallet'} size={size} color={color} />,
    Instruments: (focused: boolean, color: string, size: number) => <Ionicons name={'trending-up'} size={size} color={color} />,
    Profile: (focused: boolean, color: string, size: number) => <Ionicons name={'person'} size={size} color={color} />,
}

export const HomeTabs = createBottomTabNavigator({
    screenOptions: ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return TabBarIconComponent[route.name as TabBarIconType](focused, color, size);
        },
    }),
    screens: {
      Instruments: {
        screen: InstrumentsScreen,
        options: {
          headerShown: false,
          tabBarLabel: 'Instrumentos',
        },
       },
      Portfolio: {
        screen: PortfolioScreen, 
        options: {
          headerShown: false,
          tabBarLabel: 'Portafolio',
        },
       },
      Profile: {
        screen: ProfileScreen,
        options: {
          headerShown: false,
          tabBarLabel: 'Perfil',
        },
       },
    },
  });
