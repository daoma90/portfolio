import { Norican, Source_Code_Pro, Source_Serif_Pro } from "next/font/google";

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const sourceSerifPro400 = Source_Serif_Pro({
  subsets: ["latin"],
  weight: "400",
});

export const sourceSerifPro800 = Source_Serif_Pro({
  subsets: ["latin"],
  weight: "700",
});

export const norican = Norican({
  subsets: ["latin"],
  weight: "400",
});
