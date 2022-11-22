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

export default function GameOnButton({ onPress, title }) {
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
                <BlurView
                    intensity={26}
                    tint="light"
                    style={styles.blurContainer}
                >
                    <LinearGradient
                        style={styles.gradient}
                        colors={[
                            "rgba(46, 182, 174, 0.3)",
                            "rgba(53, 83, 113, 0.85)",
                        ]}
                    >
                        <MaterialCommunityIcons
                            name="school"
                            color="rgba(226, 270, 254, 0.8)"
                            size={34}
                        />
                        <Text style={styles.text}>{title}</Text>
                    </LinearGradient>
                </BlurView>
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
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 8,
    },
    blurContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        overflow: "hidden",
    },
    pressable: {
        width: 260,
        height: 60,
    },
    pressed: {
        opacity: 0.5,
    },
});
