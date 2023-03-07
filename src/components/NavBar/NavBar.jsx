import { NavLink, Outlet } from 'react-router-dom';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';

import styles from './nav-bar.module.scss';

const NavBar = () => {
  return (
    <div>
      <header className={styles.header}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav" sx={{ backgroundColor: 'rgb(39, 61, 164)' }}>
            <Toolbar>
              <Box
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { sm: 'block' } }}
              >
                <div className={styles.item}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.link__current : styles.link
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </div>
              </Box>
              <NavBarUser />
              <NavBarAuth />
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
