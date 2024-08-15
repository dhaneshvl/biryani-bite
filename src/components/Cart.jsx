import React from 'react';
import { List, ListItem, ListItemText, Typography, Button, Box, Paper, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { ShoppingCart as ShoppingCartIcon, RemoveShoppingCart as RemoveShoppingCartIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

// Styled components
const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[5],
    transform: 'scale(1.02)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
}));

const EmptyCartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const Cart = ({ cartItems, removeFromCart, updateQuantity, placeOrder }) => {
  const theme = useTheme();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ShoppingCartIcon sx={{ mr: 1 }} /> Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <EmptyCartContainer>
          <RemoveShoppingCartIcon color="action" sx={{ fontSize: 80, mb: 2 }} />
          <Typography variant="h6" paragraph>
            Your cart is empty.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add some delicious biryani to your cart to enjoy a tasty meal.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/">
            Explore Menu
          </Button>
        </EmptyCartContainer>
      ) : (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <List>
            {cartItems.map((item, index) => {
              console.log(item); // Debugging item data
              return (
                <StyledListItem key={index}>
                  <ListItemText
                    primary={<Typography variant="body1">{item.name || 'Unknown Item'}</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">₹{item.price || '0'} x {item.quantity || '0'}</Typography>}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={() => updateQuantity(item.id, Math.max((item.quantity || 1) - 1, 1))}
                      sx={{ mr: 1 }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      sx={{ mr: 1 }}
                    >
                      <AddIcon />
                    </IconButton>
                    <StyledButton variant="outlined" color="error" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </StyledButton>
                  </Box>
                </StyledListItem>
              );
            })}
          </List>
          <Box sx={{ mt: 2, textAlign: 'right' }}>
            <Typography variant="h6">
              Total: ₹{totalPrice}
            </Typography>
            <StyledButton variant="contained" color="primary" onClick={placeOrder} sx={{ mt: 2 }}>
              Place Order
            </StyledButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Cart;
