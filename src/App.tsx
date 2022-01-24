import { Suspense } from 'react';
import { AllRouter } from './AllRouter';
import { Navbar } from './components';
import ErrorBoundary from './components/ErrorBoundary';
import { SpinnerContainer } from './components/SpinnerContainer';
import { Providers } from './providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <Navbar />
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
