// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {RoundedNavBar} from './BottomNavBar';
import { Box, NativeBaseProvider } from 'native-base';

export default {
  title: 'components/RoundedBottomNavBar',
  component: RoundedNavBar,
  parameters: {
    componentSource: {
      url: 'https://raw.githubusercontent.com/MakerForNature/NativeBaseComponentLibrary/main/components/Button/Button.tsx',
      language: 'javascript',
    }
  },
} as ComponentMeta<typeof RoundedNavBar>;

export const Basic: ComponentStory<typeof RoundedNavBar> = args => (
  <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
        <RoundedNavBar {...args} />
      </Box>
  </NativeBaseProvider>
);
