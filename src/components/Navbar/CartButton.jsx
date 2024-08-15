import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton color="inherit" onClick={() => navigate('/cart')}>
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default CartButton;
