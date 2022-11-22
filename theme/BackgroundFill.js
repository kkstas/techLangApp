import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./Colors";
import { BlurView } from "expo-blur";

export default function BackgroundFill(props) {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.grad}
                colors={["rgba(1, 22, 39, 1)", "rgba(0, 22, 48, 1)"]}
            >
                <View
                    style={[
                        {
                            width: 200,
                            height: 200,
                            position: "absolute",
                            borderRadius: "100%",
                            left: "-30%",
                            top: 200,
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 200,
                            height: 200,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "-20%",
                            top: "10%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 200,
                            height: 200,
                            position: "absolute",
                            borderRadius: "100%",
                            left: "-20%",
                            top: "70%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "10%",
                            bottom: "5%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "40%",
                            bottom: "50%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 150,
                            height: 150,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "55%",
                            bottom: "75%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "75%",
                            bottom: "35%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 150,
                            height: 150,
                            position: "absolute",
                            borderRadius: "100%",
                            left: "50%",
                            top: 500,
                        },
                        styles.circles,
                    ]}
                ></View>

                <View
                    style={[
                        {
                            width: 200,
                            height: 200,
                            position: "absolute",
                            borderRadius: "100%",
                            left: "-0%",
                            top: 300,
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 200,
                            height: 200,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "-40%",
                            top: "20%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 200,
                            height: 200,
                            position: "absolute",
                            borderRadius: "100%",
                            left: "0%",
                            top: "80%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "-10%",
                            bottom: "0%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "20%",
                            bottom: "40%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 150,
                            height: 150,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "35%",
                            bottom: "65%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            position: "absolute",
                            borderRadius: "100%",
                            right: "55%",
                            bottom: "25%",
                        },
                        styles.circles,
                    ]}
                ></View>
                <View
                    style={[
                        {
                            width: 150,
                            height: 150,
                            position: "absolute",
                            borderRadius: "100%",
                            left: "70%",
                            top: 400,
                        },
                        styles.circles,
                    ]}
                ></View>
                <BlurView
                    intensity={50}
                    style={styles.blurContainer}
                    tint="dark"
                ></BlurView>
            </LinearGradient>
            <View style={styles.children}>{props.children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    circles: {
        backgroundColor: "rgba(20, 99, 120, 0.07)",
    },
    blurContainer: {
        width: "100%",
        height: "100%",
    },
    children: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
    },
    grad: {
        flex: 1,
        width: "100%",
    },
});
