import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { RootState } from "@/models/index";
import { RouteProp } from "@react-navigation/native";
import { RootStackNavigation, RootStackParamList } from "@/navigator/index";
import { connect, ConnectedProps } from "react-redux";
import DownloadPlaceholder from "@/components/Placeholder/DownloadPlaceholder";
import EditView from "@/pages/Download/EditView";
import { ScrollView } from "react-native-gesture-handler";
import Item from "@/pages/Download/Item";
import { IChapter, initialState } from "@/models/download";
import Touchable from "@/components/Touchable";


const mapStateToProps = ({ download, loading }: RootState, { route }: { route: RouteProp<RootStackParamList, "Download"> }) => {
    return {
        book_id: route.params.book_id,
        chapterList: download.chapterList,
        refreshing: download.refreshing,
        hasMore: download.hasMore,
        loading: loading.effects["guess/fetchGuessList"]
    };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
    navigation: RootStackNavigation;
}

function Download({ dispatch, book_id, chapterList }: IProps) {

    const [downloadList, setDownloadList] = useState<number[]>([]);
    let [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        loadData(true);
        return () => {
            dispatch({
                type: "download/setState",
                payload: {
                    ...initialState
                }
            });
        };
    }, []);

    useEffect(() => {
        return () => {
            if (timer !== null) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    const loadData = (refreshing: boolean, callback?: () => void) => {
        dispatch({
            type: "download/fetchChapterList",
            payload: {
                book_id
            },
            callback
        });
    };

    const renderItem = (item: IChapter, index: number) => {
        const selected = downloadList.indexOf(item.chapter_num) > -1;

        return (
            <Touchable
                key={`item-${item.id}key-${index}`}
                onPress={() => onPress(item)}
            >
                <Item
                    data={item}
                    disabled={item.disabled}
                    selected={selected}
                />
            </Touchable>
        );
    };

    const onPress = useCallback((item: IChapter) => {
        if (item.disabled) {
            return false;
        }
        const index = downloadList.indexOf(item.chapter_num);
        if (index > -1) {
            downloadList.splice(index, 1);
            setDownloadList([...downloadList]);
            return false;
        }
        setDownloadList([...downloadList, item.chapter_num].sort((a, b) => {
            return a - b;
        }));
    }, [downloadList]);

    const downTask = () => {
        dispatch({
            type: "download/downTask",
            payload: {
                book_id,
                downloadList
            },
            reload: (data: IChapter[]) => {
                dispatch({
                    type: "download/setState",
                    payload: {
                        chapterList: data
                    }
                });
            },
            callback: () => {
                // const time = setTimeout(() => {
                setDownloadList([]);
                // }, 1250);
                // setTimer(time);
            }
        });
        dispatch({
            type: "downloadManage/setScreenReload"
        });

    };

    return (
        chapterList.length > 0 ? <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
                    {
                        chapterList.map((item: IChapter, index: number) => {
                            return renderItem(item, index);
                        })
                    }
                </View>
            </ScrollView>
            <EditView
                downTask={downTask}
                downloadList={downloadList}
            />
        </View> : <DownloadPlaceholder />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5
    }
});

export default connector(Download);