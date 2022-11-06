//react
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//react-router-dom
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from 'react-redux';
import { store } from './redux/app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

