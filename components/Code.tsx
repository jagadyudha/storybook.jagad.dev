import React from "react";
import Prism from "prismjs";
import "@/styles/code.css";

interface CodeProps {
  children: string;
}

export const Code = ({ children, ...props }: CodeProps) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code className={`language-javascript`} {...props}>
        {children}
      </code>
    </pre>
  );
};
