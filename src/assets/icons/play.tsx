import type { IconProps } from "@/types/icons";

export const PlayIcon = ({ width, height, fill, stroke }: IconProps) => {
  return (
    <svg
      width={width || "18"}
      height={height || "21"}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10.093V1L8.875 5.5465L16.75 10.093L8.875 14.6395L1 19.186V10.093Z"
        fill={fill || "black"}
        stroke={stroke || "black"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
