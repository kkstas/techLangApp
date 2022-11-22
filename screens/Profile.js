import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import MyHeader from "../components/MyHeader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Profile() {
    return (
        <>
            <MyHeader title="Profil">
                <MaterialCommunityIcons
                    name="head"
                    color="rgba(236, 280, 264, 1)"
                    size={32}
                />
            </MyHeader>
            <ScrollView>
                <View
                    style={{ marginVertical: 100, marginHorizontal: 50 }}
                ></View>
            </ScrollView>
        </>
    );
}
