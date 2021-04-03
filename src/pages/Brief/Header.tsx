import React from "react";
import BookIntro from "@/pages/Brief/BookIntro";
import StickyHeader from "react-native-stickyheader";
import Operate from "@/pages/Brief/Operate";
import Information from "@/pages/Brief/Information";
import { Animated } from "react-native";


interface IProps {
    fixedHeight: number;
    scrollY: Animated.AnimatedInterpolation;
    opacity: Animated.AnimatedInterpolation;
    blurOpacity: Animated.AnimatedInterpolation;
    leftViewX: Animated.AnimatedInterpolation;
    rightViewX: Animated.AnimatedInterpolation;
    rightViewScale: Animated.AnimatedInterpolation;
    rightFontSize: Animated.AnimatedInterpolation;
    showDrawer: () => void;
    onClickRead: () => void;
    onClickCollection: () => void;
}

function Header({
                    fixedHeight,
                    scrollY, opacity, blurOpacity, leftViewX, rightViewX, rightViewScale, rightFontSize,
                    showDrawer, onClickRead, onClickCollection
                }: IProps) {
    return (
        <>
            <Information
                opacity={opacity}
            />
            <StickyHeader
                stickyHeaderY={fixedHeight} // 滑动到多少悬浮
                stickyScrollY={scrollY}
            >
                <Operate
                    opacity={opacity}
                    blurOpacity={blurOpacity}
                    leftViewX={leftViewX}
                    rightViewX={rightViewX}
                    rightViewScale={rightViewScale}
                    rightFontSize={rightFontSize}
                    onClickCollection={onClickCollection}
                    onClickRead={onClickRead}
                />
            </StickyHeader>
            <BookIntro showDrawer={showDrawer} />
        </>
    );
}

export default Header;
