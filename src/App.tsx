import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Suspense, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { AllRouter } from './AllRouter';
import { Navbar } from './components';
import ErrorBoundary from './components/ErrorBoundary';
import Burger from './components/Navbar/Burger';
import { SpinnerContainer } from './components/SpinnerContainer';
import useTheme from './Hoc/UseTheme';
import { Providers } from './providers';
import { darkTheme, GlobalStyle, lightTheme } from './theme';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const App: React.FC = () => {
  const [open, setstate] = useState(true);
  const { theme, setToggle } = useTheme();
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <Elements stripe={stripePromise}>
      <HelmetProvider>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle {...currentTheme} />
          <Suspense fallback={<SpinnerContainer />}>
            <ErrorBoundary>
              <Burger open={open} setOpen={setstate} />
              <Navbar open={open} setToggle={setToggle} />
              <AllRouter />
            </ErrorBoundary>
          </Suspense>{' '}
        </ThemeProvider>
      </HelmetProvider>
    </Elements>
  );
};

export default App;
