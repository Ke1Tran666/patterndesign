import type React from "react";
import type { CardProps } from "../types";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1" : "";
  return (
    <div
      className={`bg-white rounded-lg shadow-md transition-all duration-200 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
