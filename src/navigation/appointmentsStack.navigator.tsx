import { Menu } from '&components/icons/menu.icon';
import { AppointmentsScreen } from '&screens/appointments/appointments.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppointmentsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={
                    () => (
                        {
                            headerLeft: () => <Menu />
                        }
                    )
                }
                name="Appointments"
                component={AppointmentsScreen} />
        </Stack.Navigator>
    );
}