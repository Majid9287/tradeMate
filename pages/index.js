import { NextSeo } from "next-seo";

import { Inter } from "next/font/google";

import { useState, useEffect, useRef } from "react";
import { BsEyeFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import BlogCard from "@/components/BlogCard";
import Author from "@/components/AuthorCard";

import Card from "../components/Card";
import MarketOverviewWidget from "../components/MarketOverviewWidget";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../lotti/hero.json";
import Lottie from "lottie-react";
import styles from "@/styles/Color.module.css";
import NewsCard from "@/components/NewsCard";

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
];
const posts = [
  {
    category: "Design",
    title: "10 Tips for Crafting the Perfect UX Portfolio",
    description:
      "Learn how to showcase your design skills and stand out in a crowded job market.",
    author: "Emily Lee",
    date: "3 April 2023",
    avatar:
      "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
    poster:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    category: "Technology",
    title: "The Future of Mobile App Development",
    description:
      "Discover the latest trends and techniques that will shape the future of mobile app development.",
    author: "John Smith",
    date: "1 April 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    poster:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    category: "Business",
    title: "How to Launch a Successful Startup",
    description:
      "Learn the essential steps to launch a successful startup and make your dreams a reality.",
    author: "Sarah Brown",
    date: "28 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    poster:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Health",
    title: "The Benefits of Mindfulness Meditation",
    description:
      "Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",
    author: "David Kim",
    date: "25 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    poster:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];
const post = {
  title: "12 Content Marketing Hacks to Increase Your Traffic and Leads",
  author: "Hajra Naz",
  category: "Sports",
  date: "a day ago",
  poster:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",

  views: 25,
  content: `
    Are you seeking to increase the traffic to your website?
    Content marketing offers an effective avenue to achieve that goal.
    Sharing is caring!
  `,
};
const cardData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="1" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="5" y1="12" x2="1" y2="12" />
        <line x1="23" y1="12" x2="19" y2="12" />
        <line x1="16.5" y1="7.5" x2="18.8" y2="9.8" />
        <line x1="7.5" y1="16.5" x2="9.8" y2="18.8" />
        <line x1="16.5" y1="16.5" x2="18.8" y2="18.8" />
        <line x1="7.5" y1="7.5" x2="9.8" y2="9.8" />
      </svg>
    ),
    heading: "FOREX MARKET",
    description:
      "We Are Providing All Services For Biggner To Advance Forex Trader.",
    buttonText: "Forex Market",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="8" />
        <line x1="12" y1="4" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
    heading: "STOCK MARKET",
    description:
      "We Are Providing All Services For Biggner To Advance Stock Trader.",

    buttonText: "Stock Market",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="15.6,8.4 12,15.6 8.4,8.4" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <polygon points="5.64,5.64 5.64,18.36 18.36,18.36 18.36,5.64" />
        <line x1="5.64" y1="18.36" x2="18.36" y2="5.64" />
      </svg>
    ),
    heading: "CRYPTO MARKET",
    description:
      "We Are Providing All Services For Biggner To Advance Crypto Trader.",

    buttonText: "Crypto Market",
  },
  // Add more card data objects as needed
];

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <>
      <NextSeo
        title="trading"
        description="trading.com!"
        viewport="width=device-width, initial-scale=1"
        canonical="https://trading.com"
        openGraph={{
          url: "https://trading.com",
          title: "trading",
          description: "trading",
        }}
      />
      <main className={` text-white top-0  ${styles.customcolor}`}>
        <div className="max-w-screen-xl mx-auto px-2 ">
          <section className="py-8">
            <div
              className={` rounded-full p-4  transition duration-300 ease-in-out ${styles.horcolor}`}
            >
              <div className="lg:flex lg:items-start lg:space-x-6 ">
                <div className="lg:w-1/2">
                  <div className="py-24 font-extrabold text-2xl">
                    {" "}
                    <Slider {...settings}>
                      <div className="flex justify-center text-center items-center flex-col">
                        <h1>
                          Forex Market Unveiled: Navigating the World of Foreign
                          Exchange Trading
                        </h1>
                        <div className="mt-4 space-x-4  ">
                          <Link
                            href={`/introduction/[slug]`}
                            as={`/introduction/Forex Market`}
                          >
                            <button className="my-1 bg-blue-500 text-white font-bold rounded-full py-2 px-4 hover:bg-blue-700  focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                              start learning now
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="border my-1 text-white font-bold rounded-full py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                              contact-us
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="flex justify-center text-center">
                        <h1>
                          Crypto Chronicles: A Learning Journey through the
                          Dynamic Crypto Market
                        </h1>
                        <div className="mt-4 space-x-4">
                          <Link
                            href={`/introduction/[slug]`}
                            as={`/introduction/Crypto Market`}
                          >
                            <button className="my-1 bg-blue-500 text-white font-bold rounded-full py-2 px-4 hover:bg-blue-700  focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                              start learning now
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="border my-1 text-white font-bold rounded-full py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                              contact-us
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="flex justify-center text-center">
                        <h1>
                          Stock Market Mastery: Acquiring Knowledge to Navigate
                          Financial Frontiers
                        </h1>
                        <div className="mt-4 space-x-4">
                          <Link
                            href={`/introduction/[slug]`}
                            as={`/introduction/Stock Market`}
                          >
                            <button className="my-1 bg-blue-500 text-white font-bold rounded-full py-2 px-4 hover:bg-blue-700  focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                              start learning now
                            </button>
                          </Link>
                          <Link href="/contact">
                            <button className="border my-1 text-white font-bold rounded-full py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                              contact-us
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="flex justify-center text-center">
                        <h1>
                          Money Market Insights: A Learning Expedition into
                          Short-Term Financing Landscapes
                        </h1>
                        <div className="mt-4 space-x-4">
                          <button className="my-1 bg-blue-500 text-white font-bold rounded-full py-2 px-4 hover:bg-blue-700  focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                            start learning now
                          </button>
                          <button className="border my-1 text-white font-bold rounded-full py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                            contact-us
                          </button>
                        </div>
                      </div>
                    </Slider>
                    <div className="progress-bar">
                      <div
                        className="bar"
                        style={{ width: `${((currentSlide + 1) * 100) / 3}%` }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>
                <div className="lg:w-1/2">
                  <div>
                    {" "}
                    <Lottie
                      animationData={hero}
                      loop={true}
                      className="w-full  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 lg:py-24">
            <div className="flex flex-wrap justify-center content-center">
              {cardData.map((data, index) => (
                <div key={index} className="m-4">
                  <Card {...data} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <MarketOverviewWidget />
          </section>

          <section className="py-8 lg:pb-24">
            <div className="flext justify-center text-center ">
              <div className="pt-24 pb-12 ">
                <div className=" flex py-2 justify-center text-center">
                  <h1
                    className={`text-4xl rounded-full  font-extrabold px-6 py-2 ${styles.gradientBg}`}
                  >
                    LATEST BLOG
                  </h1>
                </div>
                <div className="md:px-24 ">
                  <p1>
                    To achieve the layout where the image is on the left side
                    and the title, date, and more button are on the right side,
                    you can update the structure of the BlogCard component.
                    Here's an updated version:
                  </p1>
                </div>
              </div>
            </div>

            <div className=" justify-center grid gap-2 gap-y-10 pb-6 md:grid-cols-2 lg:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
