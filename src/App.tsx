import { Suspense } from 'react';
import { AllRouter } from './AllRouter';
import ErrorBoundary from './components/ErrorBoundary';
import { SpinnerContainer } from './components/SpinnerContainer';
import DashBoard from './pages/DashBoard';
import { Providers } from './providers';

const App: React.FC = () => {
  return (
    <Providers>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
