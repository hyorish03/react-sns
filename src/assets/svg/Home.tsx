import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <path fill="url(#Home_svg__a)" d="M0 0h90v90H0z" />
    <defs>
      <pattern
        id="Home_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#Home_svg__b" transform="scale(.01111)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO2csWoUURSGP1FimsDWKlZaxC42PoLaaKudlZWa0tbO5BGshOgLaOUTqGmMlY2VYmKpMRACikcGZkAHd7PZnJlz5u7/wd/ssCz349+7c7jLgBBCCCGE+JdFYB3YAb4Ca/VrwpEzwFvAWnkHnJdpH1aAT/+R3GQbuCLZx+MWsD9BcpMD4I5kH52T9R5sR8wT4NQMnzeXLAEvZpDc5BUwil5Edi4AH44huclHYDl6MVm5CnxzkNzkB3AjelHZuAv8dJTc5BfwMHpxGVgENjoQ3M7GFMPNwl8DUfv2ca2+PtghZLMHyU02688cx2F3OdX14oYQ6yg7E4abdpPbqcb+QXF7yiGkq4wbbqZ5b9FDiHWU9nBThOgl4GUCuZOGm8GLvug0hHSVZrgZtOjrwPcEMg/LtINSSlbrgcEKSipOA08TSLGSRY87CbFCkoLLwOcEMqxk0dFDiJUuOtsQYiWKHtU3/DZHGfUtOfsQYh0ON5f6knzN+STEBpbq5OZm15JLHEJshvwGHgEnvAVXpwvPEyzQkuWZ98nL4wSLsqSp3LixnWBBljTVyYxE073oL56i52koscitY6GWrS2EmL8h2JwljOiFm0THSzE1mnBh2jrIHe3RSPRg2qdGI9Hhe6ap0RLtSnRrTY2WaFeiW2tqtES7Et1aU6Ml2pXo1poaLdGuRLfW1GiJdiW6taZGS7Qr0a01NVqiXYluranREu1KdGtNjZZoV6Jba2q0RLsS3VpL/i2RaCSa6NambPRegsVbT9mNFN3nAwItOG8iRT9IIMB6yr3ox/q8TyDBOs5WhmeTnitc9hZwliRUzb5f72Ml/EDuAa/r7SK8yUIIIYQQQgghhBAk4w9m9qGhd3r3SQAAAABJRU5ErkJggg=="
        id="Home_svg__b"
        width={90}
        height={90}
      />
    </defs>
  </svg>
);
export default SvgHome;
