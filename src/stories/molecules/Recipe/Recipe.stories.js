import React from 'react';

import Recipe from '../Recipe/Recipe';
import choithramsRecipeOne from '../../../assets/images/home-assets/choithramsRecipeOne/choithramsRecipeOne.jpg';

export default {
  title: 'Molecules/Recipe',
  component: Recipe
};

const Template = (args) => <Recipe {...args} />;

export const Default = Template.bind({});
Default.args = {
  'id': 1,
  'recipeDate': '03',
  'recipeMonth': 'Nov',
  'recipeImage': choithramsRecipeOne,
  'recipeCategory': 'CHINESE - SIDES',
  'recipeTitle': 'Refreshing watermelon, feta and mint salad',
  'recipeDescription': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  'recipePeople': '4 People',
  'recipeTime': '30 Min'
};
