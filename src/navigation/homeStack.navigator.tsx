import { HomeScreen } from '&screens/home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu } from '&components/icons/menu.icon';
import { NotificationBell } from '&components/icons/notificationsBell.icon';
import { NotificationsScreen } from '&screens/notifications/notifications.screen';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export const HomeStack: React.FC = () => {
    return <Stack.Navigator>
        <Stack.Screen
            options={
                () => (
                    {
                        headerTitle: 'Home',
                        headerLeft: () => <Menu />,
                        headerRight: () => <NotificationBell />
                    }
                )
            }
            name="Home"
            component={HomeScreen} />

        <Stack.Screen
            options={
                ({ navigation }) => (
                    {
                        headerTitle: 'Notifications',
                        headerRight: () => <Pressable onPress={() => navigation.pop()}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>,
                        presentation: 'modal',
                    }
                )
            }
            name="Notifications"
            component={NotificationsScreen} />
    </Stack.Navigator>;
}