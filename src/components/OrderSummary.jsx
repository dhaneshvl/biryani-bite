import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Order Placed Successfully!
      </Typography>
      <Typography variant="h6">
        Thank you for ordering from BiryaniBite. Your delicious biryani will be delivered soon!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/home')} sx={{ mt: 2 }}>
        Back to Home
      </Button>
    </Box>
  );
};

export default OrderSummary;
