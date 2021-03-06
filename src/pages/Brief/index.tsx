import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet, Platform, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";
import { Color } from "@/utils/const";
import { RootState } from "@/models/index";
import { ModalStackNavigation, RootStackNavigation, RootStackParamList } from "@/navigator/index";
import { RouteProp } from "@react-navigation/native";
import { connect, ConnectedProps } from "react-redux";
import { ip, viewportWidth, wp } from "@/utils/index";
import { IChapter, initialState } from "@/models/brief";
import BriefPlaceholder from "@/components/Placeholder/BriefPlaceholder";
import ImageBlurBackground from "@/pages/Brief/ImageBlurBackground";
import TopBarWrapper from "@/pages/Brief/TopBarWrapper";
import Footer from "@/pages/Brief/Footer";
import Header from "@/pages/Brief/Header";
import List from "@/pages/Brief/List";
import LightDrawer from "@/components/LightDrawer";


const mapStateToProps = ({ home, user, brief, loading }: RootState, { route }: { route: RouteProp<RootStackParamList, "Brief"> }) => {
    return {
        isLogin: user.isLogin,
        book_id: route.params.id,
        headerHeight: home.headerHeight,
        bookInfo: brief.bookInfo,
        markRoast: brief.markRoast,
        markChapterNum: brief.markChapterNum,
        collection_id: brief.collection_id,
        refreshing: brief.refreshing,
        chapterList: brief.chapterList,
        loading: loading.effects["brief/fetchBrief"]
    };
};


const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
    route: RouteProp<RootStackParamList, "Brief">
    navigation: RootStackNavigation & ModalStackNavigation;
}

const imageWidth = wp(30);
const imageHeight = ip(imageWidth);

function Brief({
                   navigation, dispatch, isLogin, headerHeight, bookInfo, book_id, markRoast, markChapterNum,
                   loading, collection_id, refreshing, chapterList
               }: IProps) {

    const [showTop, setShowTop] = useState<boolean>(true);
    const scrollY: Animated.Value = useRef(new Animated.Value(0)).current;
    const drawerX: Animated.Value = useRef(new Animated.Value(viewportWidth)).current;
    const fixedHeight = headerHeight + imageHeight;
    let compHeight: number;
    if (Platform.OS === "android") {
        compHeight = 30 - 11;
    } else {
        compHeight = isIphoneX() ? 30 - 22 : 30 - 11 + getStatusBarHeight();
    }
    const stickyHeader = fixedHeight + compHeight;

    useEffect(() => {
        loadData(true);
        return () => {
            dispatch({
                type: "brief/setState",
                payload: {
                    ...initialState
                }
            });
        };
    }, []);

    const getOpacity = () => {
        return scrollY.interpolate({
            inputRange: [
                headerHeight,
                fixedHeight
            ],
            outputRange: [1, 0],
            extrapolate: "clamp"
        });
    };

    const getBlurOpacity = () => {
        return scrollY.interpolate({
            inputRange: [
                stickyHeader - 1,
                stickyHeader
            ],
            outputRange: [0, 1],
            extrapolate: "clamp"
        });
    };

    const getLeftViewX = () => {
        return scrollY.interpolate({
            inputRange: [
                headerHeight,
                fixedHeight
            ],
            outputRange: [0, wp(22)],
            extrapolate: "clamp"
        });
    };

    const getRightViewX = () => {
        return scrollY.interpolate({
            inputRange: [
                headerHeight,
                fixedHeight
            ],
            outputRange: [0, wp(10)],
            extrapolate: "clamp"
        });
    };

    const getRightViewScale = () => {
        return scrollY.interpolate({
            inputRange: [
                headerHeight,
                fixedHeight
            ],
            outputRange: [1, 0.65],
            extrapolate: "clamp"
        });
    };

    const getRightFontSize = () => {
        return scrollY.interpolate({
            inputRange: [
                headerHeight,
                fixedHeight
            ],
            outputRange: [1, 1.5],
            extrapolate: "clamp"
        });
    };

    const getBgImageSize = () => {
        return scrollY.interpolate({
            inputRange: [-100, 0],
            outputRange: [1.2, 1],
            extrapolate: "clamp"
        });
    };

    const onClickCollection = useCallback(() => {
        if (!isLogin) {
            navigation.navigate("Login");
        } else {
            if (collection_id > 0) {
                dispatch({
                    type: "brief/delUserCollection",
                    payload: {
                        id: collection_id.toString()
                    }
                });
            } else {
                dispatch({
                    type: "brief/addUserCollection",
                    payload: {
                        book_id
                    }
                });
            }
            dispatch({
                type: "collection/screenReload"
            });
        }
    }, [isLogin, collection_id]);

    const onClickRead = useCallback(() => {
        if (markRoast > 0) {
            navigation.navigate("MangaView", {
                book_id,
                markRoast,
                chapter_num: markChapterNum
            });
        } else {
            navigation.navigate("MangaView", {
                book_id,
                chapter_num: 1
            });
        }
    }, [markRoast]);

    const goMangaView = useCallback((item: IChapter) => {
        navigation.navigate("MangaView", {
            book_id,
            chapter_num: item.chapter_num
        });
    }, []);

    const showDrawer = () => {
        Animated.timing(drawerX, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    const hideDrawer = () => {
        Animated.timing(drawerX, {
            toValue: viewportWidth,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (event.nativeEvent.contentOffset.y >= fixedHeight) {
            setShowTop(false);
        } else {
            setShowTop(true);
        }
    };

    const loadData = (refreshing: boolean, callback?: () => void) => {
        dispatch({
            type: "brief/fetchBrief",
            payload: {
                refreshing,
                book_id
            },
            callback
        });
    };

    return (
        (loading && refreshing) ? <BriefPlaceholder /> :
            <View style={styles.container}>
                <LightDrawer
                    chapterList={chapterList}
                    bookInfo={bookInfo}
                    headerHeight={headerHeight}
                    drawerX={drawerX}
                    goMangaView={goMangaView}
                    hideDrawer={hideDrawer}
                />
                <ImageBlurBackground
                    bookInfo={bookInfo}
                    imageSize={getBgImageSize()}
                />
                <TopBarWrapper
                    book_id={book_id}
                    headerHeight={headerHeight}
                    showTop={showTop}
                    opacity={getOpacity()}
                />
                <Animated.ScrollView
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: { contentOffset: { y: scrollY } }
                            }
                        ],
                        {
                            useNativeDriver: true,
                            listener: onScroll
                        }
                    )}
                    overScrollMode="always"
                    scrollEventThrottle={1}
                >
                    <Header
                        stickyHeader={stickyHeader}
                        compHeight={compHeight}
                        scrollY={scrollY}
                        opacity={getOpacity()}
                        blurOpacity={getBlurOpacity()}
                        leftViewX={getLeftViewX()}
                        rightViewX={getRightViewX()}
                        rightViewScale={getRightViewScale()}
                        rightFontSize={getRightFontSize()}
                        showDrawer={showDrawer}
                        onClickRead={onClickRead}
                        onClickCollection={onClickCollection}
                    />
                    <List
                        chapterList={chapterList}
                        goMangaView={goMangaView}
                    />
                    <Footer />
                </Animated.ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flex: 1,
        paddingHorizontal: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: Color.page_bg
    }
});


export default connector(Brief);
