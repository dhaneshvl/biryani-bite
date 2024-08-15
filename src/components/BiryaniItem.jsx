import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const BiryaniItem = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item.id, 1, item.name, item.price); // Assuming quantity is 1
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
      <CardMedia
        component="img"
        height="300"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="div">
            Price: ₹{item.price}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BiryaniItem;
