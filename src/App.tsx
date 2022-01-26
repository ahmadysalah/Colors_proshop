import { Suspense, useState } from 'react';
import { AllRouter } from './AllRouter';
import { Navbar } from './components';
import ErrorBoundary from './components/ErrorBoundary';
import Burger from './components/Navbar/Burger';
import { SpinnerContainer } from './components/SpinnerContainer';
import { Providers } from './providers';

const App: React.FC = () => {
  const [open, setstate] = useState(true);
  return (
    <Providers>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <Burger open={open} setOpen={setstate} />
          <Navbar open={open} />
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
