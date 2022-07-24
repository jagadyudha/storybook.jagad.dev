import React from "react";
import "@/styles/button.css";

interface ButtonProps {
  label: string;
  variants: string;
}

export const Button = ({ label, variants, ...props }: ButtonProps) => {
  if (variants == "stack") {
    return (
      <div className="mr-4 mt-2 flex items-center py-1 text-center font-sans text-xs font-normal text-white">
        <div className="mr-1.5 h-2 w-2 rounded-full bg-primary"></div>
        <span>{label}</span>
      </div>
    );
  }
  return (
    <button type="button" className={`storybook-button-${variants}`} {...props}>
      {label}
    </button>
  );
};
