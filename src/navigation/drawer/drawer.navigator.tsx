import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerScreen } from '&types';
import DrawerContent from './drawer.content';
import { drawerElements } from '&services/config';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(): JSX.Element {

    return <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props: any) => <DrawerContent {...props} />}
        initialRouteName="HomeStack">
        {
            drawerElements.map(
                (screen: DrawerScreen, index: number) => <Drawer.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component} />
            )
        }
    </Drawer.Navigator>;
}
