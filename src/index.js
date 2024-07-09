import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import firebase from './firebase/config';
import { AuthProvider } from './store/FirebaseContext'


ReactDOM.render(<FirebaseContext.Provider value={{ firebase }}>
    <AuthProvider> {/* Wrap App with AuthProvider */}
        <App />
    </AuthProvider>
</FirebaseContext.Provider >, document.getElementById('root'));
