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

const IconChartBar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M149.333333 800h128c29.866667 0 53.333333-23.466667 53.333334-53.333333V533.333333c0-29.866667-23.466667-53.333333-53.333334-53.333333H149.333333c-29.866667 0-53.333333 23.466667-53.333333 53.333333v213.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-256h106.666667v192h-106.666667v-192zM448 800h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v597.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-640h106.666666v576h-106.666666v-576zM874.666667 309.333333h-128c-29.866667 0-53.333333 23.466667-53.333334 53.333334v384c0 29.866667 23.466667 53.333333 53.333334 53.333333h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V362.666667c0-29.866667-23.466667-53.333333-53.333333-53.333334z m-10.666667 426.666667h-106.666667v-362.666667h106.666667v362.666667zM896 853.333333H128c-17.066667 0-32 14.933333-32 32S110.933333 917.333333 128 917.333333h768c17.066667 0 32-14.933333 32-32S913.066667 853.333333 896 853.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconChartBar.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconChartBar) : IconChartBar;
