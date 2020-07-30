/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconCry: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 597.333333c-81.066667 0-151.466667 36.266667-211.2 106.666667-10.666667 12.8-8.533333 34.133333 4.266667 44.8 12.8 10.666667 34.133333 8.533333 44.8-4.266667 46.933333-57.6 100.266667-85.333333 162.133333-85.333333s115.2 27.733333 162.133333 85.333333c6.4 8.533333 14.933333 10.666667 25.6 10.666667 6.4 0 14.933333-2.133333 21.333334-6.4 12.8-10.666667 14.933333-32 4.266666-44.8-61.866667-70.4-132.266667-106.666667-213.333333-106.666667zM362.666667 512c23.466667 0 42.666667-19.2 42.666666-42.666667v-64c0-23.466667-19.2-42.666667-42.666666-42.666666s-42.666667 19.2-42.666667 42.666666v64c0 23.466667 19.2 42.666667 42.666667 42.666667zM661.333333 512c23.466667 0 42.666667-19.2 42.666667-42.666667v-64c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666666 42.666666v64c0 23.466667 19.2 42.666667 42.666666 42.666667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCry.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconCry) : IconCry;
