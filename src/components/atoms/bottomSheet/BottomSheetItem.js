// import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
// import {COLORS} from '../../../constants';
// const BottomSheetItem = ({item}) => {
//     console.log(item,"jjjjjjjjjjjjj")
//   console.log(item, '..........item');
//   const handleItemPress = item => {
//     switch (item.title) {
//       case 'Home':
//         navigation.navigate(ROUTES.HOME_SCREEN);
//         break;
//       case 'Profile':
//         navigation.navigate(ROUTES.PROFILE);
//         break;
//       default:
//         break;
//     }
//   };
//   return (
//     <View>
//       <TouchableOpacity
//         style={{
//           width: Dimensions.get('window').width / 4.4,
//           marginHorizontal: 20,
//           marginTop: 1,
//           height: Dimensions.get('window').height / 18,
//           marginVertical: 10,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//         onPress={() => handleItemPress(item)}>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: 20,
//             borderWidth: 1,
//             padding: 10,
//             backgroundColor: COLORS.PURPLE,
//           }}>
//           <Image
//             style={{height: 25, width: 25, tintColor: COLORS.WHITE}}
//             source={item.icon}
//           />
//           {/* <Text style={{ color: COLORS.WHITE }}>{item.title}</Text> */}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };
// export default BottomSheetItem;
