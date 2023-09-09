import { StyleSheet, Text, View } from 'react-native'

export const AppointmentsScreen = () => {
    return <View style={styles.container}>
        <Text>Appointments screen</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);