import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

const App = () => {
  return(
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Cave Adventures</h1>

      </div>
    </AppProvider>
  );
};

export default App;
