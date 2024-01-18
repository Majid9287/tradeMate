import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Color.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NewsCard from "@/components/NewsCard";

import { FaEnvelope } from "react-icons/fa";
const newsData = [
  {
    id: 1,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline:
      "Breaking News: NASA's Artemis I mission successfully splashes down",
  },
  {
    id: 2,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline:
      "Top Story: Elon Musk's Twitter takeover hits snag as court rules against him",
  },
  {
    id: 3,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline:
      "Exclusive Report: Uncovered details of China's 'spy balloon' program",
  },
  {
    id: 4,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline: "Latest Development: War in Ukraine enters its 272nd day",
  },
  {
    id: 5,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline:
      "Expert Opinion: Climate change 'irreversible' without urgent action",
  },
  {
    id: 6,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    image: "https://ichef.bbci.co.uk/news/976x549/976/webp/p0.6w1s.s.jpg",
    headline:
      "In-Depth Coverage: World leaders gather for COP27 climate summit",
  },
  {
    id: 7,
    date: "2023-11-15",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    headline: "Local Impact: Rising inflation hits food banks across the UK",
  },
  {
    id: 8,
    date: "2023-11-15",
    image: "https://ichef.bbci.co.uk/news/976x549/976/webp/p0.6w28.s.jpg",
    headline:
      "International Response: G7 leaders pledge to provide $100 billion in aid for Ukraine",
  },
  {
    id: 9,
    date: "2023-11-15",
    image: "https://ichef.bbci.co.uk/news/976x549/976/webp/p0.6w2e.s.jpg",
    headline:
      "Expert Analysis: Breaking down the implications of the US midterm elections",
  },
  {
    id: 12,
    date: "2023-11-04",
    image: "https://example.com/news-image12.jpg",
    headline: "Education Insights: Future of Learning",
  },
  {
    id: 13,
    date: "2023-11-03",
    image: "https://example.com/news-image13.jpg",
    headline: "Food and Cuisine: Culinary Delights",
  },
  {
    id: 14,
    date: "2023-11-02",
    image: "https://example.com/news-image14.jpg",
    headline: "Technology Trends: Innovations Unleashed",
  },
  {
    id: 15,
    date: "2023-11-01",
    image: "https://example.com/news-image15.jpg",
    headline: "Sports News: Championship Victory",
  },
];
function contact() {
  return (
    <div>
      <div className={` text-white top-0  ${styles.customcolor}`}>
        <section className="py-32 ">
          <div className="container  mx-auto  ">
            <div
              className={`block rounded-lg shadow-lg pt-10 md:pt-12 px-2 md:px-6  ${styles.customcolor1}`}
              style={{
                marginTop: "-100px",

                backdropFilter: "blur(30px)",
              }}
            >
              <div className="flex flex-wrap items-center justify-center ">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12 ">
                  <div className="flex justify-center text-center">
                    <div className="">
                      <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                        News
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`max-w-screen-xl mt-24 lg:px-8 py-16 mx-auto   rounded-lg shadow-lg ${styles.customcolor}`}
              >
                 <section className="">
          
           

            <div className="lg:flex lg:items-start  ">
              <div className="lg:w-1/3 pr-1 ">
                <div className="max-w-md pt-1  mx-auto  rounded shadow-xl overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full rounded object-cover md:h-full md:w-48"
                        src={newsData[0].image}
                        alt="Modern building architecture"
                      />
                    </div>
                    <div className="pl-1">
                      <div
                        className={`uppercase tracking-wide text-sm text-indigo-500 font-semibold ${styles.customtext}`}
                      >
                        {newsData[0].date}
                      </div>
                      <a
                        href="#"
                        className="block mt-1 text-lg leading-tight font-bold  hover:underline"
                      >
                        {newsData[0].headline}
                      </a>
                      
                     
                    </div>
                  </div>
                </div>
                <div className="grid gap-1 pt-2 grid-cols-1 md:grid-cols-1 ">
              {newsData.slice(1,5).map((news) => (
                <NewsCard
                  key={news.id}
                  date={news.date}
                  image={news.image}
                  headline={news.headline}
                />
              ))}
            </div>
              </div>
              <div className="lg:w-2/3">
              <div className="grid gap-1 pb-6 grid-cols-1 md:grid-cols-2 ">
              {newsData.slice(2,14).map((news) => (
                <NewsCard
                  key={news.id}
                  date={news.date}
                  image={news.image}
                  headline={news.headline}
                />
              ))}
            </div>
              </div>
            </div>
            
          </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default contact;
