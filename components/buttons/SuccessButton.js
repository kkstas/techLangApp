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

export default function SuccessButton({ onPress, title }) {
    const offset = useSharedValue(1);
    const textOff = useSharedValue(1);
    const onPressHandler = onPress;

    const action = () => {
        onPressHandler();
        offset.value = withSpring(0.95, {
            mass: 0.1,
            damping: 8,
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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
                    intensity={36}
                    style={styles.blurContainer}
                >
                    <LinearGradient
                        style={styles.gradient}
                        colors={[
                            "rgba(116, 159, 194, 0.5)",
                            "rgba(73, 168, 163, 0.85)",
                        ]}
                    >
                        <MaterialCommunityIcons
                            name="check"
                            color="rgba(236, 280, 264, 1)"
                            size={24}
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
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 5,
    },
    blurContainer: {
        width: "100%",
        height: "100%",
        borderTopRightRadius: 45,
        borderBottomRightRadius: 45,
        overflow: "hidden",
    },
    pressable: {
        width: 140,
        height: 45,
    },
    pressed: {
        opacity: 0.5,
    },
});
