import { View, Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Animated, {
    withSpring,
    useSharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

export default function MyHeader({ onPress, children, title }) {
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
        <View style={styles.mainView}>
            <Pressable
                style={({ pressed }) => [
                    styles.pressable,
                    pressed && styles.pressed,
                ]}
                onPress={action}
            >
                <BlurView
                    intensity={30}
                    style={styles.blurContainer}
                    tint="light"
                >
                    <LinearGradient
                        style={styles.gradient}
                        colors={[
                            "rgba(73, 83, 113, 0.35)",
                            "rgba(116, 149, 154, 0.32)",
                        ]}
                    ></LinearGradient>
                    <View style={styles.childrenView}>
                        {children}
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </BlurView>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    mainView: {
        flex: 1,
        width: "100%",
        height: 100,
    },
    childrenView: {
        position: "absolute",
        bottom: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "rgba(236, 280, 264, 1)",
        fontSize: 24,
        fontWeight: "400",
        marginLeft: 8,
        paddingRight: 20,
        paddingTop: 4,
    },
    blurContainer: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    pressable: {
        width: "100%",
        height: 100,
        opacity: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.4,
    },
});
