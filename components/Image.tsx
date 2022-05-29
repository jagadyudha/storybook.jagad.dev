import React, { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import { useRouter } from "next/router";

export type Props = {
  src: string;
} & ImageProps;

export const Image: React.FC<Props> = ({
  src,
  width,
  height,
  className,
  ...props
}) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <>
      <figure
        className={`${
          className ? className : "rounded-md"
        } flex justify-center overflow-hidden`}
      >
        <NextImage
          src={src}
          className={`duration-700 ease-in-out ${
            className ? className : "rounded-md"
          } ${isReady ? "blur-0" : "animate-pulse bg-zinc-600 blur-2xl"}`}
          {...props}
          onLoadingComplete={onLoadCallback}
          unoptimized={true}
          width={width}
          height={height}
        />
      </figure>
    </>
  );
};

export default Image;
