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

const IconIntermediateFilling: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 96H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667z m-128 448H298.666667c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h426.666666c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIntermediateFilling.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconIntermediateFilling) : IconIntermediateFilling;
