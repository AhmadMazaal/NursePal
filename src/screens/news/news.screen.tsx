import { StyleSheet, Text, View } from 'react-native'

export const NewsScreen = () => {
    return <View style={styles.container}>
        <Text>News screen</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);