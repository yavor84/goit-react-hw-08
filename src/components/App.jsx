import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Box, CircularProgress } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 20 }}>
      {' '}
      <CircularProgress color="primary" size={40} />
    </Box>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
          />
        </Routes>
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          marginTop: '12px',
        }}
        toastOptions={{
          duration: 4000,

          success: {
            style: {
              background: '#0e7c7b',
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#0e7c7b',
            },
          },
          error: {
            style: {
              background: '#8f3985',
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#8f3985',
            },
          },
        }}
      />
    </Layout>
  );
}
