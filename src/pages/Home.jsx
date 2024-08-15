import React from 'react';
import BiryaniList from '../components/BiryaniList';
import { biryaniItems } from '../data/data';

const Home = () => {
  return (
    <div>
      <BiryaniList biryaniItems={biryaniItems} />
    </div>
  );
};

export default Home;
