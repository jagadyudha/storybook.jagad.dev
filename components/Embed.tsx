import React from "react";

interface EmbedProps {
  src: string;
}

/**
 * Primary UI component for user interaction
 */
const Embed = ({ src }: EmbedProps) => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Embed;
