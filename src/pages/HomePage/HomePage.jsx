import { useAuth } from 'components/hooks/useAuth';

import styles from './home-page.module.scss';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <h1 className={styles.title}>
          {' '}
          Hello,{user.name}, this is your private phonebook!
        </h1>
      )}
      {!isLoggedIn && <h1 className={styles.title}> Welcome to Phonebook!</h1>}
    </>
  );
};

export default HomePage;
