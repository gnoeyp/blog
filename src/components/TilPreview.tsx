import React from "react";

interface TilPreviewProps {
  title: string;
  date: string;
}

const TilPreview = ({ title, date }: TilPreviewProps) => {
  return (
    <div className="border rounded-lg p-3 hover:bg-gray-50">
      <div>{title}</div>
      <div>{date}</div>
    </div>
  );
};

export default TilPreview;
