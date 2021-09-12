import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <Path
        d="M7.698 15.395a7.652 7.652 0 004.712-1.625L16.64 18 18 16.64l-4.23-4.23a7.65 7.65 0 001.625-4.713C15.395 3.453 11.942 0 7.698 0 3.453 0 0 3.453 0 7.697s3.453 7.698 7.698 7.698zm0-13.47a5.779 5.779 0 015.773 5.772 5.779 5.779 0 01-5.773 5.773 5.779 5.779 0 01-5.774-5.773 5.779 5.779 0 015.774-5.773z"
        fill="#000"
      />
    </Svg>
  );
}

export default Icon;