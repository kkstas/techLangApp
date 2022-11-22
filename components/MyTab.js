import Colors from "../theme/Colors";
import { useEffect } from "react";
import { View, StyleSheet, Pressable, useWindowDimensions } from "react-native";
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

export default function MyTabBar(props) {
    const windowWidth = useWindowDimensions().width;
    const tabWidth = windowWidth * 0.88;
    const offset = useSharedValue(0);
    const shakyOne = useSharedValue(1);
    const shakyTwo = useSharedValue(1);
    const shakyThree = useSharedValue(1);
    const navigation = props.navigation;

    function navigateToFirst() {
        navigation.navigate("Settings");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    function navigateToSecond() {
        navigation.navigate("Home");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    function navigateToThird() {
        navigation.navigate("Profile");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    useEffect(() => {
        if (props.navigationState.routeNames[0] === "Settings") {
            const ind = props.navigationState.index;
            if (ind === 0) {
                offset.value = withSpring(-tabWidth / 3, {
                    mass: 0.4,
                    damping: 8,
                });
                shakyOne.value = withSpring(1.2, { mass: 0.6, damping: 1 });
                shakyTwo.value = withSpring(1, { mass: 0.3, damping: 4 });
                shakyThree.value = withSpring(1, { mass: 0.3, damping: 4 });
            } else if (ind === 2) {
                offset.value = withSpring(tabWidth / 3, {
                    mass: 0.4,
                    damping: 8,
                });
                shakyOne.value = withSpring(1, { mass: 0.3, damping: 4 });
                shakyTwo.value = withSpring(1, { mass: 0.3, damping: 4 });
                shakyThree.value = withSpring(1.2, { mass: 0.6, damping: 1 });
            } else {
                offset.value = withSpring(0, { mass: 0.4, damping: 8 });
                shakyOne.value = withSpring(1, { mass: 0.3, damping: 4 });
                shakyTwo.value = withSpring(1.2, { mass: 0.6, damping: 1 });
                shakyThree.value = withSpring(1, { mass: 0.3, damping: 4 });
            }
        }
    }, [props.navigationState.index]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        };
    });

    const shakyOneStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: shakyOne.value }],
        };
    });
    const shakyTwoStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: shakyTwo.value }],
        };
    });
    const shakyThreeStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: shakyThree.value }],
        };
    });

    const stateIndex = props.navigationState.index;

    return (
        <View style={styles.container}>
            <BlurView
                intensity={46}
                style={styles.blurContainer}
            >
                <LinearGradient
                    style={[styles.gradient, { width: tabWidth }]}
                    colors={[
                        "rgba(116, 149, 154, 0.4)",
                        "rgba(59, 140, 150, 0.4)",
                    ]}
                >
                    {/* Podróżujący klocek */}
                    <Animated.View style={[styles.box, animatedStyles]}>
                        <LinearGradient
                            style={styles.gradientBox}
                            colors={[
                                "rgba(116, 149, 154, 0.4)",
                                "rgba(101, 192, 186, 0.8)",
                            ]}
                        >
                            <View style={styles.iconView}></View>
                        </LinearGradient>
                    </Animated.View>
                    {/* KONIEC Podróżującego klocka */}

                    <Animated.View
                        style={[
                            styles.pressable,
                            { right: tabWidth / 1.2 },
                            shakyOneStyles,
                        ]}
                    >
                        <Pressable
                            style={[
                                { padding: 30, justifyContent: "center" },
                                styles.iconMother,
                            ]}
                            onPress={() => navigateToFirst()}
                        >
                            {stateIndex === 0 ? (
                                <MaterialCommunityIcons
                                    name="graph"
                                    color="rgba(236, 280, 264, 1)"
                                    size={34}
                                />
                            ) : (
                                <MaterialCommunityIcons
                                    name="graph-outline"
                                    color="#74959A"
                                    size={34}
                                />
                            )}
                        </Pressable>
                    </Animated.View>

                    <Animated.View style={[styles.pressable, shakyTwoStyles]}>
                        <Pressable
                            style={[
                                {
                                    padding: 30,
                                    justifyContent: "center",
                                    alignItems: "center",
                                },
                                styles.iconMother,
                            ]}
                            onPress={() => navigateToSecond()}
                        >
                            {stateIndex === 1 ? (
                                <MaterialCommunityIcons
                                    name="dots-square"
                                    color="rgba(226, 270, 254, 1)"
                                    size={34}
                                />
                            ) : (
                                <MaterialCommunityIcons
                                    name="dots-square"
                                    color="#74959A"
                                    size={34}
                                />
                            )}
                        </Pressable>
                    </Animated.View>

                    <Animated.View
                        style={[
                            styles.pressable,
                            { left: tabWidth / 1.2 },
                            shakyThreeStyles,
                        ]}
                    >
                        <Pressable
                            style={[
                                { padding: 30, justifyContent: "center" },
                                styles.iconMother,
                            ]}
                            onPress={() => navigateToThird()}
                        >
                            {stateIndex === 2 ? (
                                <MaterialCommunityIcons
                                    name="head"
                                    color="rgba(226, 270, 254, 1)"
                                    size={34}
                                />
                            ) : (
                                <MaterialCommunityIcons
                                    name="head-outline"
                                    color="#74959A"
                                    size={34}
                                />
                            )}
                        </Pressable>
                    </Animated.View>
                </LinearGradient>
            </BlurView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
        height: 110,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.33,
        shadowRadius: 1.5,
        elevation: 4,
    },
    blurContainer: {
        overflow: "hidden",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        justifyContent: "center",
    },
    gradient: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    gradientBox: {
        width: 75,
        height: 75,
        borderRadius: 80,
        marginBottom: 12,
    },
    pressable: {
        bottom: 34,
        width: 0,
        height: 55,
        borderRadius: 40,
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
    },
    iconView: {
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        borderRadius: 15,
    },
    box: {
        position: "absolute",
        opacity: 0.65,
    },
    iconMother: {
        position: "absolute",
    },
});
