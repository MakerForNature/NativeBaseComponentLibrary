import React from 'react';
import { Button, Box, NativeBaseProvider, View, Icon, CheckIcon, Center } from "native-base";
import { Animated, Image, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';

export type MenuItem = {
  Lable: String
  Icon: Image
}

export type BottomNavBarProps = {
  onPress: () => void;
  Elements: MenuItem[];
};


const _renderIcon = (routeName: string, selectedTab: string) => {
  let icon = '';

  switch (routeName) {
    case 'title1':
      return <CheckIcon size="5" mt="0.5" color="emerald.800" />
    case 'title2':
      return <CheckIcon size="5" mt="0.5" color="emerald.300" />
  }

  return (
    <Icon
      name={icon}
      size={25}
      color={routeName === selectedTab ? 'black' : 'gray'}
    />
  );
};

const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  );
};

export const RoundedNavBar = ({}: BottomNavBarProps) => (
    <View style={{maxWidth: 80,
    flex: 1,
    alignSelf: 'flex-end'}}>
      <NavigationContainer>
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
          strokeWidth={0.5}
          height={55}
          circleWidth={55}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View 
           style={styles.btnCircle}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => Alert.alert('Click Action')}>

              <CheckIcon size="5" mt="0.5" color="emerald.500" />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="title1"
            position="LEFT"
            component={() => (
              <View style={{ backgroundColor: '#BFEFFF', flex: 1 }} />
            )}
          />
          <CurvedBottomBar.Screen
            name="title2"
            component={() => (
              <View style={{ backgroundColor: '#FFEBCD', flex: 1 }} />
            )}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {  justifyContent: 'flex-end',},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});