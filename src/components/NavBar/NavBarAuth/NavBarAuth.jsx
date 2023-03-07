import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';

import styles from './nav-bar-auth.module.scss';

const NavBarAuth = () => {
  return (
    <Box sx={{ display: { sm: 'block' } }}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.link__current : styles.link
            }
            to="/register"
          >
            Sign Up
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.link__current : styles.link
            }
            to="/login"
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </Box>
  );
};

export default NavBarAuth;
