import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const NavBarUser = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <p>{user.email}</p>
        <Button
          onClick={onLogout}
          variant="outlined"
          sx={{
            marginLeft: '20px',
            backgroundColor: 'red',
            color: 'black',
            borderColor: 'transparent',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'rgb(91, 5, 5)',
              color: 'white',
              borderColor: 'transparent',
            },
          }}
        >
          LogOut
        </Button>
      </Box>
    </div>
  );
};

export default NavBarUser;
