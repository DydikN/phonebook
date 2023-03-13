import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);

  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
