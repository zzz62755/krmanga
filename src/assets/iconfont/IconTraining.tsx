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

const IconTraining: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 202.666667H544V106.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v384c0 40.533333 34.133333 74.666667 74.666667 74.666667h187.733333l-87.466667 151.466667c-8.533333 14.933333-4.266667 34.133333 10.666667 42.666666 4.266667 2.133333 10.666667 4.266667 14.933333 4.266667 10.666667 0 21.333333-6.4 27.733334-17.066667l106.666666-183.466666h157.866667l106.666667 183.466666c6.4 10.666667 17.066667 17.066667 27.733333 17.066667 6.4 0 10.666667-2.133333 14.933333-4.266667 14.933333-8.533333 21.333333-27.733333 10.666667-42.666666L661.333333 736h192c40.533333 0 74.666667-34.133333 74.666667-74.666667V277.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 458.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V277.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666666v384z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M682.666667 501.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h341.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM682.666667 373.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h341.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconTraining.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconTraining) : IconTraining;