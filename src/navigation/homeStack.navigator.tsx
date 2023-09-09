import { HomeScreen } from '&screens/home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu } from '&components/icons/menu.icon';

const Stack = createNativeStackNavigator();

export const HomeStack: React.FC = () => {
    return <Stack.Navigator>
        <Stack.Screen
            options={
                () => (
                    {
                        headerTitle: 'Home',
                        headerLeft: () => <Menu />
                    }
                )
            }
            name="Home"
            component={HomeScreen} />
    </Stack.Navigator>;
}