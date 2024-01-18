// components/NewsCard.js
import React from "react";
import styles from "@/styles/Color.module.css";
const NewsCard = ({ date, image, headline }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg  border">
      <div className="flex">
        <img className="w-16 h-16 object-cover" src={image} alt="News" />
        <div className="flex-1 px-4 py-2">
          <div
            className={`uppercase tracking-wide text-sm text-indigo-500 font-semibold ${styles.customtext}`}
          >
            {date}
          </div>
          <div className=" text-sm mb-2 truncate">{headline}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
