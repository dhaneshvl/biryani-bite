// pages/BiryaniList.jsx
import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const BiryaniList = ({ biryaniItems, addToCart }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState({});

  const handleAddToCart = (itemId) => {
    if (typeof addToCart === 'function') {
      const item = biryaniItems.find(item => item.id === itemId);
      addToCart(itemId, quantity[itemId] || 1, item.name, item.price);
    } else {
      console.error('addToCart is not a function');
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    setQuantity(prev => ({ ...prev, [itemId]: (prev[itemId] || 1) + 1 }));
  };

  const handleDecreaseQuantity = (itemId) => {
    setQuantity(prev => ({ ...prev, [itemId]: Math.max((prev[itemId] || 1) - 1, 1) }));
  };

  const handleCardClick = (itemId) => {
    navigate(`/biryani/${itemId}`);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {biryaniItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: 3, 
                transition: 'transform 0.3s', 
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
                position: 'relative'
              }}
              onClick={() => handleCardClick(item.id)}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" color="green" gutterBottom>
                  {`₹${item.price}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents click event from bubbling up
                      handleDecreaseQuantity(item.id);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="body2" sx={{ mx: 1 }}>
                    {quantity[item.id] || 1}
                  </Typography>
                  <IconButton 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents click event from bubbling up
                      handleIncreaseQuantity(item.id);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button 
                  size="small" 
                  variant="contained" 
                  color="primary" 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents click event from bubbling up
                    handleAddToCart(item.id);
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BiryaniList;
