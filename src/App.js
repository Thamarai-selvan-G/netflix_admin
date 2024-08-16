import logo from './logo.svg';
import './App.css';
import RouterPage from './RouterParent/RouterPage';
import { Provider } from 'react-redux';
import Store from './Store/Store';


function App() {
  return (
    <div className="App">
     <Provider store={Store}>

      <RouterPage/>

     </Provider>

     
    </div>
  );
}


export default App;
