import React, { FC } from "react";

interface MailIconProps {
  size: number;
}

const MailIcon: FC<MailIconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 33.2308V11.1538C2 9.41203 3.41202 8 5.15385 8H39.8462C41.588 8 43 9.41202 43 11.1538V33.2308C43 34.9726 41.588 36.3846 39.8462 36.3846H5.15385C3.41203 36.3846 2 34.9726 2 33.2308Z"
        strokeWidth="3"
      ></path>
      <path d="M3.5769 9.57693L20.5424 23.0079C21.6895 23.9161 23.3105 23.9161 24.4576 23.0079L41.4231 9.57693"></path>
    </svg>
  );
};

export default MailIcon;
