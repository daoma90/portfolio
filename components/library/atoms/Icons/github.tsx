import { colors } from "@/theme";
import React, { FC } from "react";

interface GithubIconProps {
  size: number;
}

const GithubIcon: FC<GithubIconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32.4462 0.859619C14.7189 0.859619 0.429688 15.2563 0.429688 32.9836C0.429688 48.0249 10.7437 60.5952 24.8181 64.0332C24.7107 63.6034 24.6032 63.0662 24.6032 62.529V57.0497C23.314 57.0497 21.1652 57.0497 20.628 57.0497C18.3718 57.0497 16.438 56.0828 15.5784 54.3638C14.5041 52.4299 14.3966 49.4216 11.8181 47.5952C11.0661 46.9505 11.6032 46.3059 12.5702 46.4133C14.2892 46.8431 15.5784 48.0249 16.8677 49.6365C18.157 51.3555 18.6942 51.6778 21.1652 51.6778C22.347 51.6778 24.0661 51.5704 25.6776 51.3555C26.5371 49.0993 28.0413 47.058 29.9751 46.091C19.1239 44.9092 14.0743 39.6447 14.0743 32.339C14.0743 29.2233 15.3636 26.215 17.6198 23.7439C16.8677 21.1654 15.9008 16.1158 17.8346 14.1819C22.6694 14.1819 25.5702 17.2976 26.2148 18.1571C28.5784 17.2976 31.2644 16.8679 34.0578 16.8679C36.8512 16.8679 39.4297 17.2976 41.9008 18.1571C42.5454 17.2976 45.5537 14.1819 50.2809 14.1819C52.2148 16.1158 51.2479 21.2728 50.4958 23.8514C52.752 26.4299 54.0413 29.3307 54.0413 32.4464C54.0413 39.6447 48.9917 44.9092 38.2479 46.091C41.1487 47.5952 43.2975 51.8927 43.2975 55.2233V62.529C43.2975 62.7439 43.19 62.9588 43.19 63.2811C55.6528 58.8762 64.6776 46.9505 64.6776 32.9836C64.5702 15.2563 50.1735 0.859619 32.4462 0.859619Z"></path>
    </svg>
  );
};

export default GithubIcon;
