  import React from 'react';
  import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
  } from 'react-native';
  import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { NavigationContainer } from '@react-navigation/native';  
  import HomeScreen from '../screens/Home';
  import FavouriteScreen from '../screens/Favourite'
  import OrdersScreen from '../screens/Orders';
  import ProfileScreen from '../screens/Profile'
  import CartSvgComponent from '../components/svg/cart';
  import CookstroIconSvgComponent from '../components/svg/cookstro-icon';
  import HeartActiveSvgComponent from '../components/svg/heart-active'
  import HeartInaActiveSvgComponent from '../components/svg/heart-inactive'
  import OrdersActiveSvgComponent from '../components/svg/orders-active'
  import {Colors, Typography, Mixins} from '../styles'
  

  export default function RootNavigator()  {
    const _renderIcon = (routeName: string, selectedTab: string) => {
      let activeIcon, inActiveIcon = ''
      let icon = '';

      switch (routeName) {
        case 'Home':
          return (
            <View style={{justifyContent:'center', alignItems:'center', top:-10}}>
              <CookstroIconSvgComponent />
              <Text style={{...styles.routeText, color: routeName === selectedTab ? Colors.PRIMARY_RED :Colors.MEDIUM_GREY}}>{routeName}</Text>
              {routeName === selectedTab && <View style={styles.menuIndicator} />}
            </View>
          );
          break;
        case 'Favourite':
          return (
            <View style={{justifyContent:'center', alignItems:'center', top:-10}}>
              {routeName === selectedTab ? <HeartActiveSvgComponent /> : <HeartInaActiveSvgComponent />}
              <Text style={{...styles.routeText, color: routeName === selectedTab ? Colors.PRIMARY_RED :Colors.MEDIUM_GREY}}>{routeName}</Text>
              {routeName === selectedTab && <View style={styles.menuIndicator} />}
            </View>
          );
          break;
        case 'Orders':
          return (
            <View style={{justifyContent:'center', alignItems:'center', top:-10}}>
              <OrdersActiveSvgComponent />
              <Text style={{...styles.routeText, color: routeName === selectedTab ? Colors.PRIMARY_RED :Colors.MEDIUM_GREY}}>{routeName}</Text>
              {routeName === selectedTab && <View style={styles.menuIndicator} />}
            </View>
          );
          break;
        case 'Profile':
          return (
            <View style={{justifyContent:'center', alignItems:'center', top:-10}}>
              <Image 
                source={require('../../assets/profile.png')} 
                resizeMode="cover"
                style={{width:25, height:25, borderRadius:20, opacity: routeName === selectedTab ? '1': 0.5}}
                />
              <Text style={{...styles.routeText, color: routeName === selectedTab ? Colors.PRIMARY_RED :Colors.MEDIUM_GREY}}>{routeName}</Text>
              {routeName === selectedTab && <View style={styles.menuIndicator} />}
            </View>
          );
          break;
      }
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor:'green',
            height:1
          }}>
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <CurvedBottomBar.Navigator
            style={styles.bottomBar}
            strokeWidth={0.1}
            height={110}
            circleWidth={75}
            bgColor="white"
            initialRouteName="title1"
            borderTopLeftRight={70}
            renderCircle={({ selectedTab, navigate }) => (
              <Animated.View style={styles.btnCircle}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                  onPress={() => Alert.alert('Click Action')}>
                  <CartSvgComponent />
                </TouchableOpacity>
              </Animated.View>
            )}
            tabBar={renderTabBar}>
            <CurvedBottomBar.Screen
              name="Home"
              position="LEFT"
              component={HomeScreen}
              options={{
                headerTitle:'none',
                headerShown:false
              }}
            />
            <CurvedBottomBar.Screen
              name="Favourite"
              position="LEFT"
              component={FavouriteScreen}
            />
            <CurvedBottomBar.Screen
              name="Orders"
              component={OrdersScreen}
              position="RIGHT"
            />
            <CurvedBottomBar.Screen
              name="Profile"
              component={ProfileScreen}
              position="RIGHT"
            />
          </CurvedBottomBar.Navigator>
        </NavigationContainer>
      </View>
    );
  };

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    button: {
      marginVertical: 5,
    },
    bottomBar: {},
    btnCircle: {
      width: 75,
      height: 75,
      borderRadius: 37.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F16B59',
      padding: 10,
      shadowColor: '#F44329',
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2.41,
      elevation: 1,
      bottom: 40,
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
    routeText:{
      marginTop: 5,
      fontFamily: Typography.FONT_FAMILY_DMSANS_BOLD,
      fontSize: Typography.FONT_SIZE_14,
      color: Colors.MEDIUM_GREY,
      fontWeight:Typography.FONT_WEIGHT_BOLD,
      lineHight: Typography.LINE_HEIGHT_20

    },
    menuIndicator:{
      backgroundColor:Colors.PRIMARY_RED,
      marginTop:10,
      width:6, 
      height:6,
      borderRadius:3
    }
  });