// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NFooter} from './FooterNavBar';
import { Box, NativeBaseProvider } from 'native-base';

export default {
  title: 'components/Footer',
  component: NFooter,
  parameters: {
    componentSource: {
      url: 'https://raw.githubusercontent.com/MakerForNature/NativeBaseComponentLibrary/main/components/Button/Button.tsx',
      language: 'javascript',
    }
  },
} as ComponentMeta<typeof NFooter>;

export const Basic: ComponentStory<typeof NFooter> = args => (
  <NativeBaseProvider>
    <Box alignItems="center">
      <NFooter {...args} />
    </Box>
  </NativeBaseProvider>
);

Basic.args = {
  selected: 1,
};
