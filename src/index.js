import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = lazy(() => import('./App'));

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);
