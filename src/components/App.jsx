import { ContactsPage } from 'pages/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
