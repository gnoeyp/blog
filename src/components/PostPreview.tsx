import React from "react";
import Tag from "./Tag";

type PostPreviewProps = {
  title: React.ReactNode;
  date: string;
  tags?: string[];
};

const PostPreview = ({ title, date, tags }: PostPreviewProps) => {
  return (
    <div className="border rounded-lg px-3 pb-3 pt-2 hover:bg-gray-50">
      <h2 className="font-medium text-lg leading-loose">{title}</h2>
      <div className="flex gap-1 py-1">
        {tags?.map((tag, index) => (
          <Tag key={index} size="small">
            {tag}
          </Tag>
        ))}
      </div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};

export default PostPreview;
