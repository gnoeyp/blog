import React from "react";

type PostPreviewProps = {
  title: string;
  date: string;
};

const PostPreview = ({ title, date }: PostPreviewProps) => {
  return (
    <div className="border rounded-lg p-3 hover:bg-gray-50">
      <div>{title}</div>
      <div>{date}</div>
    </div>
  );
};

export default PostPreview;
