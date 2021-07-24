import React from 'react';

import choithramsPepsiProductOne from '../../../assets/images/product-assets/choithramsPepsiProductOne/choithramsPepsiProductOne.jpg';
import Product from '../Product/Product';

export default {
  title: 'Molecules/Product',
  component: Product
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  'id': 1,
  'productTitle': 'Pepsi, Carbonated Soft Drink, Cans',
  'productImage': choithramsPepsiProductOne,
  'productCurrency': 'AED',
  'productPrice': '13.50',
  'productMarketPrice': 'Was 18.50',
  'productMyLists': [
    {
      title: 'Default',
      count: 'My First List'
    },{
      title: 'Kids Party List',
      count: 15
    },{
      title: `Saturday's BBQ`,
      count: 22
    },{
      title: `Thanks Giving`,
      count: 8
    },{
      title: 'Kids Party List',
      count: 15
    },{
      title: `Saturday's BBQ`,
      count: 22
    },{
      title: `Thanks Giving`,
      count: 8
    }
  ],
  'productCount': 2,
  'productQuantity': '1.8L + 500ml',
  'productOffer': '@ 25% off'
};
