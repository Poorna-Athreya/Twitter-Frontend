import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { USERS_ROUTE, TWEETS_ROUTE } from './constants/routes';
import { HomePage, NotFoundPage, AllUsersPage } from './pages';
import { Header, Footer } from './components';
import UserTweetsPage from './pages/UserTweetsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={USERS_ROUTE} element={<AllUsersPage />} />
          <Route path={`${USERS_ROUTE}/:userId${TWEETS_ROUTE}`} element={<UserTweetsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
