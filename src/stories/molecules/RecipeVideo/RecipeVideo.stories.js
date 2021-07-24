import React from 'react';

import RecipeVideo from '../RecipeVideo/RecipeVideo';

export default {
  title: 'Molecules/RecipeVideo',
  component: RecipeVideo
};

const Template = (args) => <RecipeVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  'id': 1,
  'recipeVideo': `https://www.youtube.com/embed/recipe.mp4`,
  'recipeCategory': 'CHINESE - SIDES',
  'recipeTitle': 'Refreshing watermelon, feta and mint salad',
  'recipeSteps': '12 Steps',
  'recipeTime': '12:43'
};
