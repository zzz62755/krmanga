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

const IconFileDelete: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M842.666667 285.866667l-187.733334-187.733334c-14.933333-14.933333-32-21.333333-53.333333-21.333333H234.666667C194.133333 74.666667 160 108.8 160 149.333333v725.333334c0 40.533333 34.133333 74.666667 74.666667 74.666666h554.666666c40.533333 0 74.666667-34.133333 74.666667-74.666666V337.066667c0-19.2-8.533333-38.4-21.333333-51.2z m-44.8 44.8c-2.133333 2.133333-4.266667 0-8.533334 0h-170.666666c-6.4 0-10.666667-4.266667-10.666667-10.666667V149.333333c0-2.133333 0-6.4-2.133333-8.533333 0 0 2.133333 0 2.133333 2.133333l189.866667 187.733334z m-8.533334 554.666666H234.666667c-6.4 0-10.666667-4.266667-10.666667-10.666666V149.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h311.466666c-2.133333 4.266667-2.133333 6.4-2.133333 10.666666v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h170.666666c4.266667 0 6.4 0 10.666667-2.133334V874.666667c0 6.4-4.266667 10.666667-10.666667 10.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M640 586.666667H384c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFileDelete.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconFileDelete) : IconFileDelete;
