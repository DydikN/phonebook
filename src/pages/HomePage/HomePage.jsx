import { useAuth } from 'components/hooks/useAuth';

import styles from './home-page.module.scss';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn && <h1 className={styles.title}> Welcome to Phonebook!</h1>}
    </>
  );
};

export default HomePage;
