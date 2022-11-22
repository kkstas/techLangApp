import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import MyModalContent from "./MyModalContent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Haptics from "expo-haptics";

export default function MyModal({ modalVisible, hideModal }) {
    function action() {
        hideModal();
        // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    return (
        <Pressable style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    hideModal();
                }}
            >
                <BlurView
                    intensity={32}
                    style={styles.blurContainer}
                >
                    <View style={styles.shadowView}>
                        <View style={styles.centeredInsideView}>
                            <BlurView
                                intensity={60}
                                style={styles.blurContainerTwo}
                                tint="dark"
                            >
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.button,
                                        styles.buttonClose,
                                        pressed && styles.pressed,
                                    ]}
                                    onPress={action}
                                >
                                    <MaterialCommunityIcons
                                        name="close"
                                        color="rgba(226, 270, 254, 0.8)"
                                        size={24}
                                    />
                                </Pressable>
                                <View style={styles.modalView}>
                                    <MyModalContent />
                                </View>
                            </BlurView>
                        </View>
                    </View>
                </BlurView>
            </Modal>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    centeredInsideView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        width: "95%",
        height: "75%",
        borderRadius: 40,
        overflow: "hidden",
        backgroundColor: "rgba(0, 13, 29, 0.80)",
    },
    shadowView: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(116, 149, 154, 0.99)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 15,
        elevation: 5,
    },
    modalView: {
        marginTop: 45,
        paddingVertical: "10%",
        width: "100%",
        height: "100%",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderRadius: 20,
        paddingHorizontal: "5%",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: "100%",
        padding: 10,
        width: 50,
        height: 50,
        elevation: 2,
        position: "absolute",
        right: 15,
        top: 15,
        backgroundColor: "rgba(116, 149, 154, 0.4)",
        justifyContent: "center",
        alignItems: "center",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    blurContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.19)",
    },
    blurContainerTwo: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.5,
    },
});
