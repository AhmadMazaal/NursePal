import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './homeStack.navigator';
import DrawerNavigator from './drawer/drawer.navigator';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#fff',
        background: '#fff',
    },
};

export const MainStack = () => {
    return <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'HomeStack'}>
            <Stack.Screen options={{ gestureEnabled: false }} name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
    </NavigationContainer>;
};