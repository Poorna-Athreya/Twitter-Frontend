import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { USERS_ROUTE, TWEETS_ROUTE } from './components/constants/routes';
import { HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={USERS_ROUTE} element={<div />} />
          <Route path={`${USERS_ROUTE}/:userId${TWEETS_ROUTE}`} element={<div />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
