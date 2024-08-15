import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import LogoAndName from './LogoAndName';
import LocationCard from './LocationCard';
import CartButton from './CartButton';

const Navbar = () => {
  const handleLocationChange = (newLocation) => {
    console.log('Selected Location:', newLocation);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <LogoAndName />
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginLeft: 'auto',
          }}
        >
          <LocationCard onLocationChange={handleLocationChange} />
          <CartButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
