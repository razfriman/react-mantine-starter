import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ROUTES } from './Routes';

export const App = () => {
  const defaultColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useEffect(() => {
    toggleColorScheme(defaultColorScheme);
  }, [defaultColorScheme]);
  const theme: MantineThemeOverride = {
    colorScheme: colorScheme,
    primaryColor: 'blue',
    defaultRadius: 0,
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <BrowserRouter>{ROUTES}</BrowserRouter>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
