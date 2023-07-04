// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Image, Text, View} from 'react-native';
// import {COLORS, IMAGES, ROUTES} from '../constants';
// import {HomeScreen} from '../screens';
// import styles from './bottomStyle';
// import Home from 'react-native-vector-icons/FontAwesome';
// import User from 'react-native-vector-icons/FontAwesome'
// import Profile from '../screens/Auth/profile/Profile';
// const Tab = createBottomTabNavigator();
// const BottomTabs = () => {
//   return (
//     <>
//       <Tab.Navigator
//         initialRouteName={ROUTES.HOME_SCREEN}
//         screenOptions={{
//           headerShown: false,
//           //   tabBarActiveTintColor: COLORS.ORANGE,
//           //   tabBarInactiveTintColor: COLORS.WHITE_SECONDARY,
//           tabBarShowLabel: false,
//           tabBarHideOnKeyboard: true,
//           tabBarStyle:{
//              height:70
//           }
//           //
//         }}>
//         {/****************** Home TabBar ******************/}
//         <Tab.Screen
//           name={ROUTES.HOME_SCREEN}
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({focused}) => {
//               return (
//                 <View style={{justifyContent:'center',alignItems:'center'}}>
//                   <Home name="home" size={30} color={focused?COLORS.PURPLE:COLORS.GREY} />
//                   <Text style={{fontSize:16,fontWeight:'400',color:focused?COLORS.PURPLE:COLORS.BLACK}}>Home</Text>

//                 </View>
//               );
//             },
//           }}
//         />
//         {/****************** Vehicle TabBar ******************/}
//         <Tab.Screen
//           name={ROUTES.PROFILE}
//           component={Profile}
//           options={{
//             tabBarIcon: ({focused}) => {
//               return (
//                 <View style={{justifyContent:'center',alignItems:'center'}}>
//                   <User name="user" size={25} color={focused?COLORS.PURPLE:COLORS.GREY} />
//                   <Text style={{fontSize:16,fontWeight:'400',color:focused?COLORS.PURPLE:COLORS.BLACK}}>Profile</Text>

//                 </View>
//               );
//             },
//           }}
//         />
//         {/****************** Reports TabBar ******************/}
//         {/* <Tab.Screen
//           name={ROUTES.HOME_SCREEN}
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({focused}) => {
//               return (
//                 <View
//                   style={[
//                     styles.tabViewStyle,
//                     {backgroundColor: focused ? COLORS.WHITE : null},
//                   ]}>
//                   <Image
//                     style={[
//                       styles.reportImageStyle,
//                       {tintColor: focused ? COLORS.ORANGE : COLORS.WHITE},
//                     ]}
//                     source={IMAGES.reports}
//                   />
//                 </View>
//               );
//             },
//           }}
//         /> */}

//         {/****************** Profile TabBar ******************/}
//         {/* <Tab.Screen
//           name={ROUTES.HOME_SCREEN}
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({focused}) => {
//               return (
//                 <View
//                   style={[
//                     styles.tabViewStyle,
//                     {backgroundColor: focused ? COLORS.WHITE : null},
//                   ]}>
//                   <Image
//                     style={[
//                       styles.tabImageStyle,
//                       {tintColor: focused ? COLORS.ORANGE : COLORS.WHITE},
//                     ]}
//                     source={IMAGES.profile}
//                   />
//                 </View>
//               );
//             },
//           }}
//         /> */}
//       </Tab.Navigator>
//     </>
//   );
// };
// export default BottomTabs;
