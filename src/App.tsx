import { Suspense } from 'react';
import { AllRouter } from './AllRouter';
import ErrorBoundary from './components/ErrorBoundary';
import { SpinnerContainer } from './components/SpinnerContainer';
import { GlobalStyle } from './pages/Profile/style';
import { Providers } from './providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Suspense fallback={<SpinnerContainer />}>
        <GlobalStyle />
        <ErrorBoundary>
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
