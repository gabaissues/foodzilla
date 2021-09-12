import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

function Background() {
  return (
    <Svg
      width={415}
      height={897}
      fill="none"
    >
      <Path d="M0 0h415v897H0V0z" fill="url(#prefix__paint0_radial)" />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 448.5 -280.442 0 207.5 448.5)"
        >
          <Stop stopColor="#FFA857" />
          <Stop offset={1} stopColor="#F26600" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default Background;