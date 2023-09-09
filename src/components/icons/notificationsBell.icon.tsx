import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const NotificationBell = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return <Pressable onPress={() => navigation.push('Notifications')}>
        <Ionicons name="md-notifications-outline" size={24} color="black" />
    </Pressable>
}