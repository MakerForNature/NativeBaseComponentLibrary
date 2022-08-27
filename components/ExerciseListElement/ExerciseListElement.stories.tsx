// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import { Box, NativeBaseProvider } from 'native-base';
import { ExcersiceListElement } from './ExerciseListElement';

export default {
  title: 'components/ExerciseListElement',
  component: ExcersiceListElement,
  parameters: {
    componentSource: {
      url: 'https://raw.githubusercontent.com/MakerForNature/NativeBaseComponentLibrary/main/components/Button/Button.tsx',
      language: 'javascript',
    }
  },
} as ComponentMeta<typeof ExcersiceListElement>;

export const Basic: ComponentStory<typeof ExcersiceListElement> = args => (
  <NativeBaseProvider>
    <Box alignItems="center">
      <ExcersiceListElement {...args} />
    </Box>
  </NativeBaseProvider>
);

Basic.args = {
  text: 'Hello World',
};
