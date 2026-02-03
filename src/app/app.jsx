import { AppProvider } from './provider';
import Preloader from '@components/ui/preloader';

function App() {
  return (
    <Preloader>
      <AppProvider />
    </Preloader>
  );
}

export default App;