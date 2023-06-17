import React from 'react';
import {NativeBaseProvider} from 'native-base';
import './shim';
import {Web3Provider} from './src/context/Web3Context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import NFTScreen from './src/screens/NFTScreen';
import AnimationScreen from './src/screens/AnimationScreen';

const Stack = createStackNavigator();

const headerOptions = ({route, navigation}) => ({
  title: route.name ? route.name : '',
  // 路由的參數判斷
  headerTintColor: 'black',
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 16,
  }, // header 樣式
  headerStyle: {
    height: Platform.OS === 'ios' ? 88 : 0,
    // backgroundColor: 'transparent',
  },
  // headerLeft: () => (
  //   <TouchableOpacity
  //     onPress={() => {
  //       navigation.goBack();
  //     }}>
  //     <Image
  //       source={assets.actionPrimary}
  //       style={[styles.actionPrimary]}
  //       onPress={() => {
  //         navigation.goBack();
  //       }}
  //     />
  //   </TouchableOpacity>
  // ),
});
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
export default function App() {
  return (
    <Web3Provider>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen
              name="Index"
              component={IndexScreen}
              options={headerOptions}
            />
            <Stack.Screen
              name="NFTs"
              component={NFTScreen}
              options={headerOptions}
            />
            <Stack.Screen
              name="Animation"
              component={AnimationScreen}
              options={headerOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Web3Provider>
  );
}
