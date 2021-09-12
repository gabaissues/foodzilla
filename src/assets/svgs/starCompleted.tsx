import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <Path
        d="M22.17 8.62l-6.198-.9L13.2 2.102a.784.784 0 00-1.401 0L9.027 7.72l-6.198.9a.78.78 0 00-.433 1.334l4.485 4.372-1.06 6.174a.78.78 0 001.134.823l5.544-2.915 5.544 2.915a.78.78 0 001.133-.823l-1.06-6.174 4.485-4.373a.78.78 0 00.227-.446.778.778 0 00-.659-.887z"
        fill="#FFD600"
      />
    </Svg>
  );
}

export default Icon;