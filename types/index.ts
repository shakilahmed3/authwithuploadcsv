import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Token = {
  access?: string;
  refresh?: string;
  validity?: number;
};