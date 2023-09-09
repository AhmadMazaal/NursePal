import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MainStack } from './src/navigation/mainStack.navigator';

const App = () => {
    return <View style={styles.container}>
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
