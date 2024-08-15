import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../../Constants'; // Adjust import path accordingly

const LogoAndName = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <img
        src={ASSETS.LOGO}
        alt="BiryaniBite Logo"
        style={{ width: 40, height: 40, marginRight: 10 }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        BiryaniBite
      </Typography>
    </Box>
  );
};

export default LogoAndName;
