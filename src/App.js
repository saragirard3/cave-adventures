import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Balance from './components/money/Balance';
import Purchase from './components/money/Purchase';


const App = () => {
  return(
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Cave Adventures</h1>
        <div className='row mt-3'>
          <div className='col mt-3'>
            <Balance />
          </div>
          <div className='col mt-3'>
            <Purchase item="sword" cost="5" />
          </div>
        </div>

      </div>
    </AppProvider>
  );
};

export default App;
