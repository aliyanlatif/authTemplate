import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './IconProps';
import AppColors from '../../theme/appColor';

export function ArrowIcon({ width = 11, height = 12, color = AppColors.primary, ...rest }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 11 12" fill="none" {...rest}>
      <Path
        d="M0.347349 11.3472C0.687396 11.6782 1.219 11.6844 1.53471 11.3592L8.77057 4.1233L9.01194 7.92717C9.02642 8.23155 9.2039 8.51094 9.47564 8.66038C9.74738 8.80982 10.071 8.80506 10.3224 8.64882C10.575 8.49145 10.7153 8.20598 10.6916 7.9037L10.2767 1.39883L3.77184 0.98396C3.42538 0.956832 3.10861 1.14511 2.97363 1.45855C2.83746 1.77081 2.91398 2.14402 3.16276 2.39733C3.31987 2.5567 3.52878 2.65237 3.74837 2.6636L7.55224 2.90497L0.316376 10.1408C0.157726 10.2947 0.0713666 10.5096 0.0769907 10.7372C0.0826144 10.9647 0.179706 11.1841 0.347349 11.3472Z"
        fill={color}
      />
    </Svg>
  );
}
