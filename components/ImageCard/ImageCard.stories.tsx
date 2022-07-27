// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ImageCard} from './ImageCard';

export default {
  title: 'components/ImageCard',
  component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

export const Basic: ComponentStory<typeof ImageCard> = args => (
  <ImageCard {...args} />
);

Basic.args = {
  text: 'Hello World',
  longText: 'Bengaluru (also called Bangalore) is the center of India\'s high-tech industry. The city is also known for its parks and nightlife.',
  category: 'PHOTOS',
};
