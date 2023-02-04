import React from "react";

type PostPreviewProps = {
  title: string;
  date: string;
};

const PostPreview = ({ title, date }: PostPreviewProps) => {
  return (
    <div className="border rounded-lg p-3 hover:bg-gray-50">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};

export default PostPreview;
