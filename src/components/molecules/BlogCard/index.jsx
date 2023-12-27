import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BlogCard = ({ title, image, content, id }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "..."; // Mengambil hanya sebagian teks sesuai maxLength dan menambahkan elipsis
  };

  const truncatedTitle = truncateText(title, 55);
  const truncatedContent = truncateText(content, 150); // Ganti 150 dengan panjang karakter yang Anda inginkan

  return (
    <Link to={`/blog/${id}`}>
      <div className="max-w-sm mx-auto group w-[350px] h-[380px] hover:no-underline focus:no-underline bg-white border border-gray-200 rounded-lg shadow">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-xl text-primary font-semibold group-hover:underline group-focus:underline">
            {truncatedTitle}
          </h3>
          <p className="text-tertiary">{truncatedContent}</p> {/* Menggunakan versi teks yang dipotong */}
        </div>
      </div>
    </Link>
  );
};

BlogCard.propTypes = {};
title: PropTypes.string;
content: PropTypes.string;
id: PropTypes.number;

export default BlogCard;
