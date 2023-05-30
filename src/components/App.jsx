import { ContactsPage } from 'pages/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { WelcomePage } from 'pages/WelcomePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<WelcomePage />} />
        <Route
          index
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
