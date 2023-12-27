import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Article = ({ title, content, id }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "..."; // Mengambil hanya sebagian teks sesuai maxLength dan menambahkan elipsis
  };

  const truncatedTitle = truncateText(title, 25);
  const truncatedContent = truncateText(content, 70); // Ganti 150 dengan panjang karakter yang Anda inginkan
  return (
    <Link
      to={`/blog/${id}`}
      className="flex gap-4 mb-5 border-b border-gray-300 pb-2"
    >
      <div className="flex gap-2 w-[100%]">
        <div>
          <h1 className="font-semibold text-primary hover:underline">
            {truncatedTitle}
          </h1>
          <p className="text-gray-500 text-[14px]">{truncatedContent}</p>
        </div>
      </div>
    </Link>
  );
};

Article.propTypes = {};
title: PropTypes.string;
content: PropTypes.string;

export default Article;
