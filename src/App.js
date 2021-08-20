import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './compontents/CakeContainer';
import HooksCakeContainer from './compontents/HooksCakeContainer';
import IceCreamReducer from './compontents/IceCreamContainer';
import NewCakeContainer from './compontents/NewCakeContainer';
import ItemContainer from './compontents/ItemContainer';
import UserContainer from './compontents/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <div>
          <ItemContainer cake />
          <ItemContainer />
        </div>
        {/* <HooksCakeContainer /> */}
        {/* <CakeContainer /> */}
        {/* <IceCreamReducer /> */}
        {/* <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;