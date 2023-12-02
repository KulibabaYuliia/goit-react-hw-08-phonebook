import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { refreshThunk } from 'redux/auth/auth.operations';
import * as ROUTES from 'constants/routes.js';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const UserMenuPage = lazy(() => import('../pages/UserMenu'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME_ROUTE} element={<HomePage />} />

          <Route
            path={ROUTES.CONTACTS_ROUTE}
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path={ROUTES.USERMENU_ROUTE}
            element={
              <PrivateRoute>
                <UserMenuPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path={ROUTES.LOGIN_ROUTE}
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          ></Route>

          <Route
            path={ROUTES.REGISTER_ROUTE}
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          ></Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
