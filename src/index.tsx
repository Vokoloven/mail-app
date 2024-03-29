import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="mail-app">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
);
