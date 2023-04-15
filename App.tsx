/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import Section from './Section';
import Search from './Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function CollectionScreen() {
  return (
    <Section />
  );
}

function SearchScreen() {
  return (
    <Search />
  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add</Text>
    </View>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "default-icon-name";

          if (route.name === 'Collection') {
            iconName = "music";
          } else if (route.name === 'Recherche') {
            iconName = "search";
          } else if (route.name === 'Ajouter') {
            iconName = "plus";
          }

          // Use the appropriate icon set and pass the iconName as the name prop
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Collection" component={CollectionScreen} />
      <Tab.Screen name="Recherche" component={SearchScreen} />
      <Tab.Screen name="Ajouter" component={AddScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};