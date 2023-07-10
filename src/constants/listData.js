import {COLORS} from './colors';
import {IMAGES} from './images';

export const Icons = [
  {
    id: 2,
    title: 'Home',
    icon: IMAGES.homeIcom,
  },
  {
    id: 1,
    title: 'Leave',
    icon: IMAGES.leave,
  },
  {
    id: 3,
    title: 'Profile',
    icon: IMAGES.profile,
  },
];

export const timeStatus = [
  {
    id: 1,
    day: '6 Feb Friday',
    time: '00:00:00 AM',
    status: 'Check In',
    backgroundColor: COLORS.DARK_GREEN,
  },
  {
    id: 2,
    day: '6 Feb Friday',
    time: '00:00:00 AM',
    status: 'Check Out',
    backgroundColor: COLORS.DARK_RED,
  },
];

export const weekStatus = [
  {
    id: 1,
    time: '12 h 40 m / 40 Hrs',
    day: `5 Feb
 Mon`,
    current_time: 'This Week',
    title: 'Working Time',
    totalTime: '08 hrs 14 min',
    from: '10 : 00 AM',
    to: '7 : 30 PM',
  },
  {
    id: 2,
    time: '12 h 40 m / 40 Hrs',
    day: `5 Feb
 Mon`,
    current_time: 'This Week',
    title: 'Working Time',
    totalTime: '08 hrs 14 min',
    from: '10 : 00 AM',
    to: '7 : 30 PM',
  },
];

export const folderName = [
  {
    id: 1,
    Icon: IMAGES.proIcon,
    title: 'My Profile',
    image: IMAGES.arrow,
  },
  {
    id: 2,
    Icon: IMAGES.bank,
    title: 'Bank Details',
    image: IMAGES.arrow,
  },
  {
    id: 3,
    Icon: IMAGES.slip,
    title: 'Slips',
    image: IMAGES.arrow,
  },
  {
    id: 3,
    Icon: IMAGES.about,
    title: 'About',
    image: IMAGES.arrow,
  },
];

export const notifications = [
  {
    id: 1,
    title: 'New Notification',
    subTitle: '20 minutes ago',
  },
  {
    id: 2,
    title: 'New Notification',
    subTitle: '20 minutes ago',
  },
  {
    id: 3,
    title: 'New Notification',
    subTitle: '20 minutes ago',
  },
];
