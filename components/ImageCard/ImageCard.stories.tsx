// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ImageCard} from './ImageCard';
import { Box, NativeBaseProvider } from 'native-base';

export default {
  title: 'components/ImageCard',
  component: ImageCard,
  parameters: {
    componentSource: {
      url: 'https://raw.githubusercontent.com/MakerForNature/NativeBaseComponentLibrary/main/components/ImageCard/ImageCard.tsx',
      language: 'javascript',
    }
  },
} as ComponentMeta<typeof ImageCard>;

export const Basic: ComponentStory<typeof ImageCard> = args => (
  <NativeBaseProvider>
    <Box alignItems="center">
      <ImageCard {...args} />
    </Box>
  </NativeBaseProvider>
);

Basic.args = {
  headerText: 'Bengaluru',
  longText: 'Bengaluru (also called Bangalore) is the center of India\'s high-tech industry. The city is also known for its parks and nightlife.',
  category: 'CITIES',
};
