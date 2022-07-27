// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NButton} from './Button';
import { Box, NativeBaseProvider } from 'native-base';

export default {
  title: 'components/Button',
  component: NButton,
} as ComponentMeta<typeof NButton>;

export const Basic: ComponentStory<typeof NButton> = args => (
  <NativeBaseProvider>
    <Box alignItems="center">
      <NButton {...args} />
    </Box>
  </NativeBaseProvider>
);

Basic.args = {
  text: 'Hello World',
};
