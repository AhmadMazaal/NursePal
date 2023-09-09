import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MainStack } from './src/navigation/mainStack.navigator';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {

    const [fontsLoaded, fontError] = useFonts(
        {
            Light: require('./assets/fonts/OpenSans-Light.ttf'),
            Italic: require('./assets/fonts/OpenSans-Italic.ttf'),
            Regular: require('./assets/fonts/OpenSans-Regular.ttf'),
            SemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
            Bold: require('./assets/fonts/OpenSans-Bold.ttf'),
        }
    );

    const onLayoutRootView = useCallback(
        async () => {
            if (fontsLoaded || fontError) {
                await SplashScreen.hideAsync();
            }
        },
        [fontsLoaded, fontError]
    );

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <MainStack />
    </View>;
};

export default App;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
    }
);
