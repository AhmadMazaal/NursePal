import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export const Menu = () => {
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return <Pressable onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={24} color="black" />
    </Pressable>
}