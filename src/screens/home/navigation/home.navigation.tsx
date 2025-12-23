import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PortfolioScreen } from "../../portfolio/portfolio.screen";
import { InstrumentsScreen } from "../../instruments/instruments.screen";
import { Ionicons } from "@react-native-vector-icons/ionicons";

type TabBarIconType = 'Portfolio' | 'Instruments';

type TabBarIconComponentType = {
    [key in TabBarIconType]:  (focused: boolean, color: string, size: number) => React.ReactNode;
};

const TabBarIconComponent: TabBarIconComponentType = {
    Portfolio: (focused: boolean, color: string, size: number) => <Ionicons name={'wallet'} size={size} color={color} />,
    Instruments: (focused: boolean, color: string, size: number) => <Ionicons name={'trending-up'} size={size} color={color} />,
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
