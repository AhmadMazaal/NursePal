import { Menu } from '&components/icons/menu.icon';
import { NewsScreen } from '&screens/news/news.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const NewsStack = () => {
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
                name="News"
                component={NewsScreen}
            />
        </Stack.Navigator>
    );
}