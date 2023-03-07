// import { useSelector } from 'react-redux';

// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import { getContacts, getError, getLoadig } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NavBar = lazy(() => import('./NavBar/NavBar'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFounPage'));

// import styles from './app.module.scss';
// import Notiflix from 'notiflix';

function App() {
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getLoadig);
  // const error = useSelector(getError);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LogInPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

/* <h1>Phonebook</h1>
      <ContactForm />

      <div>
        <h2>Constacts</h2>
        {isLoading && <Loader />}
        {error && Notiflix.Notify.failure(error.message)}
        <Filter />

        {contacts.length > 0 ? <ContactList /> : <p>No contacts</p>}
      </div> */
