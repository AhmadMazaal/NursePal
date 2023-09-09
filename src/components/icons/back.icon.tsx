import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const Back = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return <Pressable onPress={() => navigation.pop()}>
        <Ionicons name="ios-arrow-back-sharp" size={26} color="black" />
    </Pressable>
}