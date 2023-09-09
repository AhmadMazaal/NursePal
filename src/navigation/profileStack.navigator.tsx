import { Menu } from '&components/icons/menu.icon';
import { ProfileScreen } from '&screens/profile/profile.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={
                    () => (
                        {
                            headerTitle: 'Home',
                            headerLeft: () => <Menu />
                        }
                    )
                }
                name="Profile"
                component={ProfileScreen} />
        </Stack.Navigator>
    );
}