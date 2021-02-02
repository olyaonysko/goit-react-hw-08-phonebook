import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';

import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "homePage" */),
);

const SignUpPage = lazy(() =>
  import('./pages/SignUpPage' /* webpackChunkName: "SignUpPage" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contactsPage" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <SignUpPage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
