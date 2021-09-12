import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={36}
      fill="none"
      {...props}
    >
      <Path
        d="M24 0H4C1.8 0 .02 1.8.02 4L0 36l14-6 14 6V4c0-2.2-1.8-4-4-4zm0 30l-10-4.36L4 30V4h20v26z"
        fill="#000"
      />
    </Svg>
  );
}

export default Icon;