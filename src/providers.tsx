import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { theme } from './theme';
import { GlobalStyle } from './pages/NewProduct/style';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export const Providers: React.FC = ({ children }) => {
  const [state, setState] = useState(theme);

  useEffect(() => {
    setState(theme);
  }, []);
  return (
    <Elements stripe={stripePromise}>
      <HelmetProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </HelmetProvider>
    </Elements>
  );
};
