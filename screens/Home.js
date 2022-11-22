import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { useState } from "react";
import MyModal from "../components/MyModal";
import GameOnButton from "../components/buttons/GameOnButton";
import MyHeader from "../components/MyHeader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddOwnWordsButton from "../components/buttons/AddOwnWordsButton";
import CheckProgressButton from "../components/buttons/CheckProgressButton";
import GoToProfileButton from "../components/buttons/GoToProfileButton";
import AboutButton from "../components/buttons/AboutButton";

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    function showModal() {
        setModalVisible(true);
    }

    function hideModal() {
        setModalVisible(false);
    }

    return (
        <>
            <MyHeader title="Dom">
                <MaterialCommunityIcons
                    name="home"
                    color="rgba(236, 280, 264, 1)"
                    size={32}
                />
            </MyHeader>
            <View
                style={{
                    width: "100%",
                    height: "1000%",
                    marginTop: 150,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <View style={styles.singleBtn}>
                        <AddOwnWordsButton
                            onPress={() => console.log("dodaj wlasne slowa")}
                        />
                    </View>
                    <View style={styles.singleBtn}>
                        <AboutButton
                            onPress={() => console.log("dodaj wlasne slowa")}
                        />
                    </View>

                    <View style={[styles.singleBtn, { flexDirection: "row" }]}>
                        <CheckProgressButton
                            onPress={() => console.log("sprawdz postepy")}
                        />
                        <GoToProfileButton
                            onPress={() => console.log("sprawdz postepy")}
                        />
                    </View>
                    <View style={styles.singleBtn}>
                        <GameOnButton
                            title="Rozpocznij naukę!"
                            onPress={showModal}
                        />
                    </View>
                </View>
                <MyModal
                    modalVisible={modalVisible}
                    hideModal={hideModal}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    singleBtn: {
        marginVertical: 6,
    },
});
