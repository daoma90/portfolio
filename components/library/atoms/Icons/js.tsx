import { colors } from "@/theme";
import React, { FC } from "react";

interface JSIconProps {
  color: string;
  size: number;
}

const JSIcon: FC<JSIconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V45H45V0H0ZM24.1071 34.9554C24.1071 39.3358 21.5196 41.4713 17.774 41.4713C14.391 41.4713 12.4272 39.7195 11.4308 37.6051L14.8741 35.5209C15.5381 36.6991 16.0423 37.6955 17.4917 37.6955C18.6971 37.6955 19.6875 37.1521 19.6875 35.0377V20.8929H24.1071V34.9554ZM34.0865 41.3709C30.16 41.3709 27.6228 39.599 26.3843 37.1521L29.8326 35.1562C30.7366 36.6368 31.9169 37.6232 34.0011 37.6232C35.7529 37.6232 36.7704 36.8478 36.7704 35.6394C36.7704 34.19 35.7228 33.6767 33.7892 32.8269L32.7325 32.3729C29.6809 31.0751 27.6579 29.4439 27.6579 25.9996C27.6579 22.8285 30.0737 20.5122 33.8494 20.5122C36.5384 20.5122 38.47 21.3479 39.8612 23.7948L36.5625 25.9152C35.8373 24.6164 35.0558 24.1071 33.8444 24.1071C32.6059 24.1071 31.8204 24.8926 31.8204 25.9152C31.8204 27.1838 32.6059 27.6971 34.418 28.4826L35.4747 28.9356C39.0696 30.4765 41.0936 32.0494 41.0936 35.5811C41.0946 39.3881 38.1044 41.3709 34.0865 41.3709Z"
        fill={colors[color]}
      ></path>
    </svg>
  );
};

export default JSIcon;