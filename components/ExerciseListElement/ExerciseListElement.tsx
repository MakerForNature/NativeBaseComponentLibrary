import React from 'react';
import { Button, Box, Text, NativeBaseProvider, HStack, Image, Icon, Center } from "native-base";

export type ExerciseListElemntProps = {
  onPress: () => void;
  text: string;
};

export const ExcersiceListElement = ({text, onPress}: ExerciseListElemntProps) => (
    <Center>
      <HStack>    
        <Image size={150} source={{
          uri: 'https://homeworkouts.org/wp-content/uploads/anim-push-ups.gif'
        }}></Image>
        <Text>Pushups</Text>
        <Icon></Icon>
      </HStack>
    </Center>
);
