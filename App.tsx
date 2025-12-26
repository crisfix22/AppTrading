/**
 * AppTrading - Trading App
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { RootNavigation } from './src/global/navigation/root.navigation';
import { InstrumentProvider } from './src/screens/instruments/state/instrumentContext.context';
import { PortfolioProvider } from './src/screens/portfolio/state/portfolioContext.context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <InstrumentProvider>
        <PortfolioProvider>
          <RootNavigation />
        </PortfolioProvider>
      </InstrumentProvider>
    </SafeAreaProvider>
  );
}

export default App;
