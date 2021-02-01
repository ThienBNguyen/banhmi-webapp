import React from 'react';
import Item from './Item/Item';
import FoodMenu from '../../../public/menu/menu';

export default function menu() {
  return (
    <div>
      <Item menu={FoodMenu} />
    </div>
  );
}
