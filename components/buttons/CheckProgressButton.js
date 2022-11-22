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

export default function CheckProgressButton({ onPress }) {
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
                        "rgba(209, 140, 224, 0.05)",
                        "rgba(209, 140, 224, 0.14)",
                        "rgba(209, 140, 224, 0.23)",
                        "rgba(209, 140, 224, 0.14)",
                        "rgba(209, 140, 224, 0.05)",
                    ]}
                ></LinearGradient>
                <BlurView
                    intensity={36}
                    style={styles.blurContainer}
                >
                    <View style={styles.iconView}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            color="rgba(226, 270, 254, 0.7)"
                            size={34}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Sprawdź</Text>
                        <Text style={styles.text}>Swoje</Text>
                        <Text style={styles.text}>Postępy</Text>
                    </View>
                </BlurView>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    gradient: {
        width: "85%",
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        borderRadius: "100%",
    },
    iconView: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 15,
    },
    textView: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 25,
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
        flexDirection: "row",
    },
    pressable: {
        width: 160,
        height: 120,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.5,
    },
});
