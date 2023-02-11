import React from "react";
import Tag from "./Tag";

type PostPreviewProps = {
  title: React.ReactNode;
  date: string;
  tags?: string[];
};

const PostPreview = ({ title, date, tags }: PostPreviewProps) => {
  return (
    <div className="border dark:border-gray-600 rounded-lg px-3 pb-3 pt-2 hover:bg-gray-50 dark:hover:bg-gray-800">
      <h2 className="font-medium text-lg leading-loose dark:text-gray-100">
        {title}
      </h2>
      <div className="flex gap-1 py-1">
        {tags?.map((tag, index) => (
          <Tag key={index} size="small">
            {tag}
          </Tag>
        ))}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-300">{date}</div>
    </div>
  );
};

export default PostPreview;
