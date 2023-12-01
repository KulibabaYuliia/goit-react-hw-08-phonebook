// import { ContactsList } from './components/ContactsList/ContactsList';
// import { ContactForm } from './components/ContactForm/ContactForm';
// import { Loader } from './components/Loader/Loader';
// import { Filter } from './components/Filter/Filter';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts.reducer';
// import { useSelector } from 'react-redux';
// import {
//   selectIsLoading,
//   selectError,
// } from 'redux/contacts/contacts.selectors';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/Layout/Layout';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/Home'));
const ContactsPage = lazy(() => import('./pages/Contacts'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const errorMassege = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    // <div
    //   style={{
    //     padding: '20px',
    //     color: '#010101',
    //   }}
    // >
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   {isLoading && <Loader />}
    //   {errorMassege && (
    //     <div>Something went wrong. Error messege: {errorMassege}</div>
    //   )}
    //   <ContactsList />
    // </div>

    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
