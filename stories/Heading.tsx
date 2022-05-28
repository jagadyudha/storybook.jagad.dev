import React from "react";
import "./components.css";

interface HeadingProps {
  label: string;
  size: string;
}

/**
 * Primary UI component for user interaction
 */
export const Heading = ({ label, size, ...props }: HeadingProps) => {
  return (
    <h2 className={`storybook-heading-${size}`} {...props}>
      {label}
    </h2>
  );
};
