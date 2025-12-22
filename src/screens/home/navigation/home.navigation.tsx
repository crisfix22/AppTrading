import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PortfolioScreen } from "../../portfolio/portfolio.screen";
import { InstrumentsScreen } from "../../instruments/instruments.screen";
import MaterialIcons from "@react-native-vector-icons/material-icons";

type TabBarIconType = 'Portfolio' | 'Instruments';

type TabBarIconComponentType = {
    [key in TabBarIconType]:  (focused: boolean, color: string, size: number) => React.ReactNode;
};

const TabBarIconComponent: TabBarIconComponentType = {
    Portfolio: (focused: boolean, color: string, size: number) => <MaterialIcons name={'account-balance-wallet'} size={size} color={color} />,
    Instruments: (focused: boolean, color: string, size: number) => <MaterialIcons name={'trending-up'} size={size} color={color} />,
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
        },
       },
      Portfolio: {
        screen: PortfolioScreen, 
        options: {
          headerShown: false,
        },
       },
      
    },
  });
