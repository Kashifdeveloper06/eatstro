import * as React from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import FavouriteScreen from '../screens/Favourite'
import OrdersScreen from '../screens/Orders';
import ProfileScreen from '../screens/Profile'
import Svg, { Circle, Path, Line} from "react-native-svg";
import CartSvgComponent from '../components/svg/cart';




const Tab = createBottomTabNavigator();


export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} 
        	options={{
        		headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{}}>
              <CartSvgComponent />

              {focused && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -10,
                    width: 35,
                    height: 3,
                    backgroundColor: 'black'
                  }}
                />
              )}
            </View>
          )
        }}
        />
        <Tab.Screen name="Favourite" component={FavouriteScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const tabBarHeight = 130;
const middleIconSize = 75;
const midRadius = 37.5;
const midBoundary = 60;
function MyTabBar({ state, descriptors, navigation }) {
	console.log(descriptors)
  const { width } = useWindowDimensions();

  const path = [
    // 'M0 0',
    // `H${width / 2 - midBoundary / 2}`,
    // `A 10 10 0 0 0 ${width / 2 + midBoundary / 2} 0`,
    // // `a20,20 0 0 1 20,20`,
    // `H${width}`,
    // `V${tabBarHeight}`,
    // 'H0',
    // `z`,
    `m0,0`,
    `a20,20 0 0 1 20,-5`,
    `H140`,
    `a30 30 0 0 1 20 30`,
    // 'S 150 150 180 80'
    
    `q 52.5 150, 130 -80`,
    
  ].join(',');

  const linePath = [
    `m0,20`,
    `a20,20 0 0 1 20,-20`,
    `H140`,
    `a20 20 0 0 1 20 20`,
    // 'S 150 150 180 80'
    
    `q 60.5 150, 130 -80`,
    // `a 20,20 0 0 1 20,-20`,
    // `H120`,
    
    // `A 30 30 0 0 0 250 0`,
    // `h160`,
    // 'a20,20 0 0 1 20,-20',
    // `v20`,
    // `h-200`,
    // `A 10 10 0 0 0 ${width / 2 + midBoundary / 2} 0`
    // `H${width / 2 - midBoundary / 2}`,
    // `A 10 10 0 0 0 ${width / 2 + midBoundary / 2} 0`,
    // `a20,20 0 0 1 20,20`,
    // `H${width}`,
    // `V${tabBarHeight}`,
    // 'H0',
  ].join(',');
  return (
    <View
      style={{ alignSelf: 'stretch', height: tabBarHeight, paddingBottom: 20 }}>
      <Svg
        viewBox={`0 0 ${width} ${tabBarHeight}`}
        height={tabBarHeight}
        width={width}>
        <Path d={path} fill="#FBFBFB" />
        {/*<Path d={linePath} fill="transparent" strokeWidth={1} stroke="black" />*/}
      </Svg>
      <View
        style={{
          position: 'absolute',
          width: middleIconSize,
          height: middleIconSize,
          borderRadius: midRadius,
          backgroundColor: '#F16B59',
          left: width / 2 - midRadius,
          bottom: tabBarHeight - midRadius,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
      {<CartSvgComponent />}
      </View>
      <View style={{ ...StyleSheet.absoluteFillObject, flexDirection: 'row', bottom: 20 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                { flex: 1, justifyContent: 'center',alignItems:'center'},
                index === 1 && { marginRight: midBoundary / 2  },
                index === 2 && { marginLeft: midBoundary / 2 },
              ]}>
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  content: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});