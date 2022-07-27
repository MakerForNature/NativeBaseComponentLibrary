import React from 'react';
import { Button, Box, NativeBaseProvider } from "native-base";

export type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const NButton = ({text, onPress}: ButtonProps) => (
    <Button onPress={() => onPress}>{text}</Button>
);
