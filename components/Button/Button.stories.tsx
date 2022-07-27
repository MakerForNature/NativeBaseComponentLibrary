// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {NButton} from './Button';

export default {
  title: 'components/Button',
  component: NButton,
} as ComponentMeta<typeof NButton>;

export const Basic: ComponentStory<typeof NButton> = args => (
  <NButton {...args} />
);

Basic.args = {
  text: 'Hello World',
};
