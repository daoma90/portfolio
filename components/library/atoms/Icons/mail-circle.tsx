import { colors } from "@/theme";
import React, { FC } from "react";

interface MailCircleIconProps {
  size: number;
}

const MailCircleIcon: FC<MailCircleIconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4628 24.843C21.719 24.843 20.9752 24.5455 20.3802 24.0992L10.562 15.7686V29.6033C10.562 29.9008 10.8595 30.1984 11.1571 30.1984H33.7686C34.0661 30.1984 34.3637 29.9008 34.3637 29.6777V15.7686L24.6199 24.0992C24.0248 24.6199 23.2066 24.843 22.4628 24.843Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0578 22.2396L31.909 14.7272H13.0908L21.8677 22.2396C22.2396 22.5372 22.6859 22.5372 23.0578 22.2396Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4627 0.148743C10.1156 0.148743 0.148682 10.1157 0.148682 22.4628C0.148682 34.8099 10.1156 44.7768 22.4627 44.7768C34.8098 44.7768 44.7768 34.8099 44.7768 22.4628C44.7768 10.1157 34.8098 0.148743 22.4627 0.148743ZM36.7437 29.6033C36.7437 31.2397 35.4049 32.5785 33.7685 32.5785H11.1569C9.52058 32.5785 8.18174 31.2397 8.18174 29.6033V15.3223C8.18174 13.6859 9.52058 12.3471 11.1569 12.3471H33.7685C35.4049 12.3471 36.7437 13.6859 36.7437 15.3223V29.6033Z"
      />
    </svg>
  );
};

export default MailCircleIcon;
