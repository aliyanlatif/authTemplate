import * as React from "react"
import Svg, { Path } from "react-native-svg"
import AppColors from "../../theme/appColor"
import { IconProps } from "./IconProps"

export function RightArrowIcon({ width = 8, height = 12, color = AppColors.primary, ...rest }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill="none"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.854 6.321a.426.426 0 000-.642l-5-4.546a.536.536 0 00-.708 0 .426.426 0 000 .643L5.793 6l-4.647 4.224a.426.426 0 000 .643.536.536 0 00.708 0l5-4.546z"
        fill="#3C7062"
        stroke="#3C7062"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}