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

const IconCapsLock: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 96H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667z m10.666667 757.333333c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666667v682.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M544 298.666667c-19.2-12.8-42.666667-12.8-61.866667 0l-185.6 145.066666-2.133333 4.266667c-6.4 6.4-17.066667 19.2-17.066667 38.4 0 8.533333 2.133333 14.933333 4.266667 21.333333 8.533333 17.066667 25.6 29.866667 44.8 29.866667h59.733333v172.8c0 27.733333 21.333333 51.2 51.2 51.2h147.2c29.866667 0 53.333333-21.333333 53.333334-51.2v-172.8h57.6c21.333333 0 42.666667-14.933333 46.933333-36.266667 4.266667-19.2 0-38.4-14.933333-51.2L544 298.666667z m29.866667 172.8v221.866666h-121.6V471.466667h-85.333334l145.066667-115.2 145.066667 115.2h-83.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCapsLock.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconCapsLock) : IconCapsLock;
