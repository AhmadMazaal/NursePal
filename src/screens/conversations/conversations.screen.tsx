import { StyleSheet, Text, View } from 'react-native'

export const ConversationsScreen = () => {
    return <View style={styles.container}>
        <Text>Conversations screen</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);