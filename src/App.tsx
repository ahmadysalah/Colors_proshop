
import { Suspense } from 'react';
import { AllRouter } from './AllRouter';
import ErrorBoundary from './components/ErrorBoundary';
import { SpinnerContainer } from './components/SpinnerContainer';
import { Providers } from './providers';

const App: React.FC = () => {
  return (
    <Providers>
      sss
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
