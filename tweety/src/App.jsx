import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { USERS_ROUTE, TWEETS_ROUTE } from './constants/routes';
import { HomePage, NotFoundPage } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={USERS_ROUTE} element={<div />} />
          <Route path={`${USERS_ROUTE}/:userId${TWEETS_ROUTE}`} element={<div />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
