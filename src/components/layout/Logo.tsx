import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="16" fill="url(#paint0_radial)" />
      <path
        d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4ZM16 26C10.477 26 6 21.523 6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26Z"
        fill="#3B82F6"
      />
      <circle cx="16" cy="16" r="6" fill="#8B5CF6" />
      <path
        d="M16 13C16.796 13 17.559 13.316 18.121 13.879C18.684 14.441 19 15.204 19 16C19 16.796 18.684 17.559 18.121 18.121C17.559 18.684 16.796 19 16 19C15.204 19 14.441 18.684 13.879 18.121C13.316 17.559 13 16.796 13 16C13 15.204 13.316 14.441 13.879 13.879C14.441 13.316 15.204 13 16 13Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 16) rotate(90) scale(16)"
        >
          <stop stopColor="#E0F2FE" />
          <stop offset="1" stopColor="#DBEAFE" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Logo;