import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};
const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      {/* Images */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="object-cover rounded-3xl"
      />

      <div className="text-white text-[15px] mt-6 space-x-4 opacity-60">
        <span>20 April 2024</span>
        <span>By Admin</span>
      </div>

      <h1 className="mt-4 cursor-pointer text-xl text-white font-semibold underline">
        {title}
      </h1>

      <h1 className="mt-4 cursor-pointer text-lg text-white  underline">
        Read More
      </h1>
    </div>
  );
};

export default BlogCard;
