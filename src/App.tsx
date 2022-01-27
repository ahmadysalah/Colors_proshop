import { Suspense, useEffect, useState } from 'react';
import { AllRouter } from './AllRouter';
import { Container, Navbar } from './components';
import ErrorBoundary from './components/ErrorBoundary';
import Burger from './components/Navbar/Burger';
import { SpinnerContainer } from './components/SpinnerContainer';
import { Providers } from './providers';

interface IState {
  theme: string;
}
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<IState>({
    theme: '',
  });

  useEffect(() => {
    setState({
      theme: localStorage.theme || (localStorage.theme = 'light'),
    });
  }, []);
  return (
    <Providers>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} />
          <Container height="3rem" hideAtMobile />
          <AllRouter />
        </ErrorBoundary>
      </Suspense>
    </Providers>
  );
};

export default App;
