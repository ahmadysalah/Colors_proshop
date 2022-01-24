import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { theme } from './theme';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export const Providers: React.FC = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </HelmetProvider>
    </Elements>
  );
};
