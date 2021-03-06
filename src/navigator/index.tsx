import React from "react";
import {
    NavigationContainer
} from "@react-navigation/native";
import {
    createStackNavigator,
    StackNavigationProp,
    HeaderStyleInterpolators,
    CardStyleInterpolators,
    TransitionPresets
} from "@react-navigation/stack";
import Register from "@/pages/Account/Register";
import Login from "@/pages/Account/Login";
import Brief from "@/pages/Brief";
import { Platform, StyleSheet } from "react-native";
import BottomTabs from "@/navigator/BottomTabs";
import { Color } from "@/utils/const";
import CategorySetting from "@/pages/CategorySetting";
import Search from "@/pages/Search";
import MangaView from "@/pages/MangaView";
import Guess from "@/pages/Guess";
import DownloadManage from "@/pages/Shelf/Download";
import Download from "@/pages/Download";
import ChapterManage from "@/pages/Shelf/ChapterManage";
import AppUpdate from "@/pages/AppUpdate";


export type RootStackParamList = {
    BottomTabs: {
        screen?: string;
    };
    Search: undefined;
    SearchBar: undefined;
    Guess: {
        headerTitle: string;
    };
    CategorySetting: undefined;
    Brief: {
        id: number;
    };
    CategoryTabs: undefined;
    MangaView: {
        book_id: number
        markRoast?: number,
        chapter_num?: number,
    };
    Download: {
        book_id: number
    };
    DownloadManage: undefined;
    ChapterManage: {
        book_id: number;
        book_image: string;
        headerTitle: string;
    };
}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

export type ModalStackParamList = {
    Root: undefined;
    Login: undefined;
    Register: undefined;
    AppUpdate: undefined;
}

export type ModalStackNavigation = StackNavigationProp<ModalStackParamList>;

const ModalStack = createStackNavigator<ModalStackParamList>();

function ModalStackScreen() {

    return (
        <ModalStack.Navigator
            mode="modal"
            headerMode="screen"
            screenOptions={() => ({
                ...TransitionPresets.ModalSlideFromBottomIOS,
                cardOverlayEnabled: true,
                gestureEnabled: true,
                headerTitleAlign: "center",
                // headerStatusBarHeight: headerHeight,
                headerBackTitleVisible: false,
                headerTintColor: Color.white,
                headerStyle: {
                    backgroundColor: Color.theme,
                    ...Platform.select({
                        android: {
                            elevation: 0,
                            borderBottomWidth: StyleSheet.hairlineWidth
                        }
                    })
                }
            })}>
            <ModalStack.Screen
                name="Root"
                component={RootStackScreen}
                options={{ headerShown: false }}
            />
            <ModalStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitle: "登录"
                }}
            />
            <ModalStack.Screen
                name="Register"
                component={Register}
                options={{
                    headerTitle: "注册"
                }}
            />
            <ModalStack.Screen
                name="AppUpdate"
                component={AppUpdate}
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => {
                        return null;
                    }
                }}
            />
        </ModalStack.Navigator>
    );
}

function RootStackScreen() {
    return (
        <RootStack.Navigator
            headerMode="float"
            screenOptions={{
                headerTitleAlign: "center",
                headerBackTitleVisible: false,
                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                // headerStatusBarHeight: headerHeight,
                headerTintColor: Color.white,
                headerStyle: {
                    backgroundColor: Color.theme,
                    ...Platform.select({
                        android: {
                            elevation: 0,
                            borderBottomWidth: StyleSheet.hairlineWidth
                        }
                    })
                }
            }}>
            <RootStack.Screen
                name="BottomTabs"
                options={{
                    headerTransparent: true,
                    headerTitle: ""
                }}
                component={BottomTabs} />
            <RootStack.Screen
                name="Brief"
                component={Brief}
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    cardStyle: { backgroundColor: Color.page_bg },
                    headerLeft: () => {
                        return null;
                    }
                }}
            />
            <RootStack.Screen
                name="CategorySetting"
                component={CategorySetting}
                options={{
                    headerTitle: "分类设置"
                }}
            />
            <RootStack.Screen
                name="Search"
                component={Search}
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => {
                        return null;
                    }
                }}
            />
            <RootStack.Screen
                name="MangaView"
                component={MangaView}
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    cardStyle: { backgroundColor: Color.black },
                    headerLeft: () => {
                        return null;
                    }
                }}
            />
            <RootStack.Screen
                name="Guess"
                component={Guess}
            />
            <RootStack.Screen
                name={"Download"}
                component={Download}
                options={{
                    headerTitle: "下载"
                }}
            />
            <RootStack.Screen
                name={"DownloadManage"}
                component={DownloadManage}
                options={{
                    headerTitle: "下载管理"
                }}
            />
            <RootStack.Screen
                name={"ChapterManage"}
                component={ChapterManage}
            />
        </RootStack.Navigator>
    );
}


function Navigator() {
    return (
        <NavigationContainer>
            <ModalStackScreen />
        </NavigationContainer>
    );
}


export default Navigator;
