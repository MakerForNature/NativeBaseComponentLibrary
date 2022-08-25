import React from 'react';
import {Box, Center, HStack, Icon, Pressable, Text } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export type FooterProps = {
  selected: number;
};

export const NFooter = ({ selected }: FooterProps) => (
  <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
    <Center flex={1}></Center>
    <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
      <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
        <Center>
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
        <Center>
          <Icon as={MaterialCommunityIcons} name="search-web" color="coolGray.600" _dark={{
            color: "warmGray.50"
          }} />
          <Text color="white" fontSize="12">
            Search
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
        <Center>
          <MaterialCommunityIcons name="search-web" color="coolGray.600" size={25} />
          <Text color="white" fontSize="12">
            Cart
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
        <Center>
          <AntDesign name="home" color="coolGray.600" size={26} />
          <Text color="white" fontSize="12">
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  </Box>
);

function setSelected(arg0: number): void {
  this.selected = arg0;
}