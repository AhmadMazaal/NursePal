import { DrawerScreen } from '&types';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { HomeStack } from '../navigation/homeStack.navigator';
import { NotificationsScreen } from '&screens/notifications/notifications.screen';
import { ProfileStack } from '../navigation/profileStack.navigator';
import { NewsStack } from '../navigation/newsStack.navigator';
import { AppointmentsStack } from '../navigation/appointmentsStack.navigator';
import { ConversationsStack } from '../navigation/conversationsStack.navigator';

export const drawerElements: DrawerScreen[] = [
    {
        name: 'HomeStack',
        component: HomeStack,
        label: 'Home',
        route: 'HomeStack',
        icon: <Ionicons name="ios-home-outline" size={24} color="black" />,
    },
    {
        name: 'ProfileStack',
        component: ProfileStack,
        label: 'Profile',
        route: 'ProfileStack',
        icon: <AntDesign name="user" size={24} color="black" />,
    },
    // {
    //     name: 'NotificationsStack',
    //     component: NotificationsScreen,
    //     label: 'Notifications',
    //     route: 'NotificationsStack',
    //     icon: <Ionicons name="md-notifications-outline" size={24} color="black" />,
    // },
    {
        name: 'AppointmentsStack',
        component: AppointmentsStack,
        label: 'Appointments',
        route: 'AppointmentsStack',
        icon: <Ionicons name="calendar-outline" size={24} color="black" />,
    },
    {
        name: 'NewsStack',
        component: NewsStack,
        label: 'News',
        route: 'NewsStack',
        icon: <Ionicons name="newspaper-outline" size={27} color='black' />,
    },
    {
        name: 'ConversationsStack',
        component: ConversationsStack,
        label: 'Conversations',
        route: 'ConversationsStack',
        icon: <Ionicons name="chatbox-outline" size={24} color="black" />,
    },
];
