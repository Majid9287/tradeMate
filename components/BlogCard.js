import React from "react";
import { BsEyeFill } from "react-icons/bs";
import styles from "@/styles/Color.module.css";
const BlogCard = ({ post }) => {
  return (
    

<div className="max-w-md mx-auto  rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full rounded-xl object-cover md:h-full md:w-48" src={post.poster} alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className={`uppercase tracking-wide text-sm text-indigo-500 font-semibold ${styles.customtext}`}>{post.date}</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-bold  hover:underline">{post.title}</a>
      <p className="mt-2 text-sm">{post.description}</p>
      <p className={`sm:text-sm md:text-lg leading-tight text-white ${styles.customtext}`}>--- Read More</p>
    </div>
  </div>
</div>
  );
};

export default BlogCard;
