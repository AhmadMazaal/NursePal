import { Menu } from '&components/icons/menu.icon';
import { ConversationsScreen } from '&screens/conversations/conversations.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ConversationsStack = () => {
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
                name="Conversations"
                component={ConversationsScreen} />
        </Stack.Navigator>
    );
}