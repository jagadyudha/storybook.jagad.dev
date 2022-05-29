import React from "react";
import Prism from "prismjs";

export const Divider = ({ ...props }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <hr className=" opacity-20" />;
};
