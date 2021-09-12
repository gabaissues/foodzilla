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
        d="M9.755 3.793l-2.727-.396L5.808.925a.345.345 0 00-.617 0L3.973 3.397l-2.727.396a.343.343 0 00-.19.587l1.973 1.924-.466 2.716a.343.343 0 00.498.362L5.5 8.1l2.44 1.282a.343.343 0 00.498-.362l-.466-2.716L9.945 4.38a.343.343 0 00-.19-.587z"
        fill="#DCDCDC"
      />
    </Svg>
  );
}

export default Icon;