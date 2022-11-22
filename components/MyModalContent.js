import Colors from "../theme/Colors";
import { useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Pressable,
    useWindowDimensions,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    withSpring,
    useSharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import GameOnButton from "./buttons/GameOnButton";
import TranslateButton from "./buttons/TranslateButton";
import SuccessButton from "./buttons/SuccessButton";
import FailButton from "./buttons/FailButton";

export default function MyModalContent(props) {
    return (
        <View style={styles.container}>
            <BlurView
                intensity={46}
                style={styles.blurContainer}
            >
                <LinearGradient
                    style={[styles.gradient]}
                    colors={[
                        "rgba(116, 149, 154, 0.4)",
                        "rgba(59, 140, 150, 0.4)",
                    ]}
                >
                    <MaterialCommunityIcons
                        name="school"
                        color="rgba(226, 270, 254, 0.8)"
                        size={34}
                    />
                    <Text style={styles.text}>Czy znasz to słowo?</Text>
                </LinearGradient>
            </BlurView>
            <BlurView
                intensity={30}
                style={styles.blurContainerTwo}
            >
                <View style={styles.translateContentViewOne}>
                    <Text style={styles.wordText}>Opportunity</Text>
                </View>
                <View style={styles.translateContentViewTwo}>
                    <TranslateButton
                        title="Sprawdź tłumaczenie"
                        onPress={() => console.log("hai")}
                    />
                </View>
            </BlurView>
            <View style={styles.responseButtonsView}>
                <FailButton
                    title="Nie znam"
                    onPress={() => console.log("Nie znam")}
                />
                <SuccessButton
                    title="Znam to!"
                    onPress={() => console.log("Znam")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    responseButtonsView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
        marginBottom: "5%",
        width: "100%",
        height: 50,
    },
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.33,
        shadowRadius: 1.5,
        elevation: 4,
        paddingTop: "5%",
    },
    blurContainer: {
        overflow: "hidden",
        width: "100%",
        height: 100,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "flex-start",
    },
    blurContainerTwo: {
        overflow: "hidden",
        width: "100%",
        height: 200,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    gradient: {
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    text: {
        fontSize: 20,
        color: "rgba(226, 270, 254, 1)",
        fontWeight: "500",
        marginLeft: 10,
    },
    wordText: {
        fontSize: 20,
        color: "rgba(226, 270, 254, 1)",
        fontWeight: "500",
        marginLeft: 10,
    },
    translateContentViewOne: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(226, 270, 254, 0.2)",
    },
    translateContentViewTwo: {
        flex: 1.4,
        justifyContent: "center",
        alignItems: "center",
    },
});
