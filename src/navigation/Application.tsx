import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { UnauthenticatedScreens } from './UnAuthStack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AuthenticatedScreens } from './AuthStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MainStack() {
  const isDarkMode = useColorScheme() === 'dark';
  const isAuthenticated = useSelector((state: RootState) => state.auth.authenticated);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigationTheme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaProvider style={[styles.container, { backgroundColor: backgroundStyle.backgroundColor }]}>
      <GestureHandlerRootView>
        <NavigationContainer
          fallback={<ActivityIndicator animating />}
          theme={navigationTheme}
        >
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            translucent
            backgroundColor={'transparent'}
          />
          {isAuthenticated ? <AuthenticatedScreens /> : <UnauthenticatedScreens />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
