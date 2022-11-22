import { View, Text, StyleSheet, Button } from "react-native";
import MyHeader from "../components/MyHeader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Settings() {
    return (
        <>
            <MyHeader title="Postępy">
                <MaterialCommunityIcons
                    name="graph"
                    color="rgba(236, 280, 264, 1)"
                    size={30}
                />
            </MyHeader>
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></View>
        </>
    );
}
