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

const IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconUser) : IconUser;
