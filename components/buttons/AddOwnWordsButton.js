import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Animated, {
    withSpring,
    useSharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddOwnWordsButton({ onPress }) {
    const offset = useSharedValue(1);
    const textOff = useSharedValue(1);
    const onPressHandler = onPress;

    const action = () => {
        onPressHandler();
        offset.value = withSpring(0.95, {
            mass: 0.1,
            damping: 8,
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setTimeout(() => {
            offset.value = withSpring(1, {
                mass: 0.1,
                damping: 8,
            });
        }, 30);
        setTimeout(() => {
            textOff.value = withSpring(1, {
                mass: 0.1,
                damping: 8,
            });
        }, 100);
    };

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: offset.value }],
        };
    });

    return (
        <Animated.View style={[animatedStyles]}>
            <Pressable
                style={({ pressed }) => [
                    styles.pressable,
                    pressed && styles.pressed,
                ]}
                onPress={action}
            >
                <LinearGradient
                    style={styles.gradient}
                    colors={[
                        "rgba(111, 237, 214, 0.02)",
                        "rgba(111, 237, 214, 0.05)",
                        "rgba(111, 237, 214, 0.07)",
                        "rgba(111, 237, 214, 0.05)",
                        "rgba(111, 237, 214, 0.02)",
                    ]}
                >
                    <BlurView
                        intensity={16}
                        tint="light"
                        style={styles.blurContainer}
                    >
                        <View style={styles.iconView}>
                            <MaterialCommunityIcons
                                name="plus"
                                color="rgba(226, 270, 254, 0.7)"
                                size={34}
                            />
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.text}>Dodaj</Text>
                            <Text style={styles.text}>własne słowa</Text>
                        </View>
                    </BlurView>
                </LinearGradient>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 15,
    },
    textView: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "rgba(226, 270, 254, 0.8)",
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 8,
    },
    blurContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    pressable: {
        width: 330,
        height: 60,
    },
    pressed: {
        opacity: 0.5,
    },
});
