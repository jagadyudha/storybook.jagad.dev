import React from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from "@/components/Button";

export interface postProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: Array<string>;
  isRead: boolean;
  variants: string;
}

/**
 * Primary UI component for user interaction
 */
export const PostCard = ({
  variants,
  slug,
  title,
  description,
  tags,
  date,
  isRead,
}: postProps) => {
  if (variants === "featured") {
    <Link href={`/posts/${slug}`} key={slug}>
      <a className="group relative h-full rounded-md bg-opacity-75  duration-150 ease-in-out">
        <div className="absolute h-full w-full rounded-md opacity-80 duration-150 ease-in-out group-hover:opacity-100">
          <Image
            className="rounded-md"
            src={`/jagad.dev/posts/${slug}/header`}
            layout="fill"
            objectFit="cover"
            alt={title}
          />
        </div>
        <div className="relative z-10 flex h-full min-h-[300px] items-end rounded-md bg-background bg-opacity-30 p-4 md:min-h-full lg:py-0 xl:min-h-full xl:py-4">
          <div>
            <h3>{title}</h3>

            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </a>
    </Link>;
  }
  return (
    <Link href={`/posts/${slug}`} key={slug}>
      <a className="group prose prose-invert">
        <div className="relative h-56 max-w-3xl md:h-72 xl:h-80">
          <div className="absolute h-full w-full group-hover:opacity-70">
            <Image
              className="rounded-md"
              src={`/jagad.dev/posts/${
                slug.endsWith("-id") ? slug.replace("-id", "") : slug
              }/header`}
              layout="fill"
              objectFit="cover"
              alt={title}
            />
          </div>
        </div>

        <div className="relative ">
          <p className="text-md flex space-x-4 text-white">
            <span>{`${new Date(date).toLocaleString("default", {
              month: "long",
            })} ${new Date(date).getDate()}, ${new Date(
              date
            ).getFullYear()}`}</span>
            {isRead && (
              <span className="flex items-center text-primary opacity-50">
                <IoCheckmarkSharp className="mr-1" />
                Read
              </span>
            )}
          </p>

          <h3>{title} </h3>

          <p className="text-gray-400">{description}</p>

          <div className="space-x-2">
            {tags
              .slice(0)
              .reverse()
              .map((tag, index) => (
                <Link href={`/posts?tag=${tag.toLowerCase()}`}>
                  <Button key={index} label={`#${tag}`} variants="tag" />
                </Link>
              ))}
          </div>
        </div>
      </a>
    </Link>
  );
};
