import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const Providers: React.FC = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </HelmetProvider>
    </>
  );
};
