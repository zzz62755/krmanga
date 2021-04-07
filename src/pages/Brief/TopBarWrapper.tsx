import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { RootStackNavigation } from "@/navigator/index";
import Touchable from "@/components/Touchable";
import Icon from "@/assets/iconfont";
import { Color } from "@/utils/const";
import { useNavigation } from "@react-navigation/native";

interface IProps {
    headerHeight: number
    showTop: boolean
    opacity: Animated.AnimatedInterpolation;
}

function TopBarWrapper({ headerHeight, showTop, opacity }: IProps) {

    const navigation = useNavigation<RootStackNavigation>();

    return (
        <View style={[styles.wrapper, {
            height: headerHeight,
            right: showTop ? 0 : undefined
        }]}>
            <View style={styles.container}>
                <Touchable onPress={() => navigation.goBack()}>
                    <View>
                        <Icon name="icon-zuofang" color={Color.white} size={22} />
                    </View>
                </Touchable>
                <Animated.View style={[styles.rightView, {
                    opacity: opacity
                }]}>
                    {
                        showTop &&
                        <>
                          <Touchable onPress={() => {
                              console.log("shangbian");
                          }}>
                            <Icon style={styles.rightIcon} name="icon-shangbian" color={Color.white} size={22} />
                          </Touchable>
                          <Touchable onPress={() => {
                              console.log("xiabian");
                          }}>
                            <Icon style={styles.rightIcon} name="icon-xiabian" color={Color.white} size={22} />
                          </Touchable>
                          <Touchable onPress={() => {
                              console.log("more");
                          }}>
                            <Icon style={styles.rightIcon} name="icon-more" color={Color.white} size={22} />
                          </Touchable></>
                    }
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 20
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginHorizontal: 10
    },
    rightView: {
        flexDirection: "row"
    },
    rightIcon: {
        marginHorizontal: 10
    }
});

export default TopBarWrapper;