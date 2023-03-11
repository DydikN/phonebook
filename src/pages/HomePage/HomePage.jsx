import { useAuth } from 'components/hooks/useAuth';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      {isLoggedIn && <h1>Hello, {user.name}</h1>}
      {!isLoggedIn && <h1> Hello, this is your private phonebook</h1>}
    </>
  );
};

export default HomePage;
