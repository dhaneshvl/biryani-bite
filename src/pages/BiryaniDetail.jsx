import React from 'react';
import { useParams } from 'react-router-dom';
import BiryaniItem from '../components/BiryaniItem';
import { biryaniItems } from '../data/data';
import { Typography} from '@mui/material';


const BiryaniDetail = ({ addToCart }) => {
  const { id } = useParams();
  const item = biryaniItems.find(biryani => biryani.id === Number(id));

  if (!item) {
    return <Typography variant="h6">Item not found</Typography>;
  }

  return (
    <div>
      <BiryaniItem item={item} addToCart={addToCart} />
    </div>
  );
};

export default BiryaniDetail;
