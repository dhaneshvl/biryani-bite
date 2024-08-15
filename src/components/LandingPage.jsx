import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        height: '100vh', 
        backgroundImage: `url('path/to/your/landing-image.jpg')`, 
        backgroundSize: 'cover', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'white'
      }}>
      <Typography variant="h3" gutterBottom>
        Welcome to BiryaniBite!
      </Typography>
      <Button 
        variant="contained" 
        color="secondary"
        onClick={() => navigate('/home')}>
        Explore Our Biryani Varieties
      </Button>
    </Box>
  );
};

export default LandingPage;
