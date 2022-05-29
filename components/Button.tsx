import React from "react";
import "@/styles/button.css";

interface ButtonProps {
  label: string;
  variants: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, variants, ...props }: ButtonProps) => {
  return (
    <button type="button" className={`storybook-button-${variants}`} {...props}>
      {label}
    </button>
  );
};
