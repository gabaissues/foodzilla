import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={26}
      height={30}
      fill="none"
      {...props}
    >
      <Path
        d="M11.375 16.667V10c0-.917-.731-1.667-1.625-1.667h-6.5V5h8.125V1.667H7.312V0h-3.25v1.667H1.626C.731 1.667 0 2.417 0 3.333V10c0 .917.731 1.667 1.625 1.667h6.5V15H0v3.333h4.063V20h3.25v-1.667H9.75c.894 0 1.625-.75 1.625-1.666zm12.334-.8l-9.198 9.416-4.598-4.716-2.292 2.366L14.511 30 26 18.217l-2.291-2.35z"
        fill="#000"
      />
    </Svg>
  );
}

export default Icon;