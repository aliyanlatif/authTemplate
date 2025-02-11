import Svg, { Path } from 'react-native-svg';

import type { IconProps } from './IconProps';
import AppColors from '../../theme/appColor';

export function EyeOnIcon({ width = 22, height = 22, color = AppColors.iconGray, ...rest }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.696 10.269a.843.843 0 0 1 0-.533 8.754 8.754 0 0 1 16.607-.005.843.843 0 0 1 0 .533 8.754 8.754 0 0 1-16.607.005Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </Svg>
  );
}
