import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import BlogCard from "@/components/BlogCard";
import AuthorCard from "@/components/AuthorCard";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";
// Sample post data
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

const authors = [
  {
    name: "Writer 1",
    image:
      "https://www.beingguru.com/wp-content/uploads/2023/01/WhatsApp-Image-2022-12-25-at-19.07.22-48x48.jpg",
    role: "Role of Writer 1",
  },
  {
    name: "Writer 2",
    image:
      "https://www.beingguru.com/wp-content/uploads/2023/01/WhatsApp-Image-2022-12-25-at-19.07.22-48x48.jpg",
    role: "Role of Writer 2",
  },
  {
    name: "Writer 3",
    image:
      "https://www.beingguru.com/wp-content/uploads/2023/01/WhatsApp-Image-2022-12-25-at-19.07.22-48x48.jpg",
    role: "Role of Writer 3",
  },
  // Add more author objects as needed
];

export default function PostDetailPage() {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="lg:flex lg:items-start lg:space-x-6 lg:mt-6">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className=" flex text-gray-500 justify-between py-6">
            <div className="mt-1 flex space-x-3 ">
              <img
                className="h-full w-15 rounded-lg"
                src="https://www.beingguru.com/wp-content/uploads/2023/01/WhatsApp-Image-2022-12-25-at-19.07.22-48x48.jpg"
                alt={post.author}
              />
              <div>
                <p className="text-sm font-semibold leading-tight text-gray-900">
                  {post.author}
                </p>
                <p className="text-sm leading-tight text-gray-600">
                  {post.date}
                </p>
              </div>
            </div>
            <div>
              <div className=" mt-2 bg-black bg-opacity-50 text-white text-center py-1 text-xs ">
                <div className=" text-white px-2 flex">
                  {" "}
                  <div className="text-lg mr-1">
                    <BsEyeFill />
                  </div>{" "}
                  <span style={{ marginTop: "2px" }}>111 Views</span>
                </div>
              </div>
            </div>
          </div>
          <div>
          <p className="mt-1 w-full text-xs font-semibold leading-tight text-gray-700">
          #{post.category}
          </p>
          </div>
          <img src={post.poster} className="aspect-video w-full " alt="" />
          <p className="mt-6 text-lg">{post.content}</p>
        </div>
        <div className="lg:w-1/3">
          {/* Vertical Poster */}
          <div className="bg-gray-100">
            <img
              src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?size=626&ext=jpg"
              alt="Vertical Poster"
            />
          </div>

          <div className="bg-gray-100  mt-6">
            <h2 className="text-xl text-white p-4 font-semibold mb-4 bg-black">RECENT POSTS</h2>
            <ul className="p-2">
              {authors.map((author, index) => (
                <li key={index}>
                  <AuthorCard author={author} />
                </li>
              ))}
            </ul>
            </div>
          <div className="bg-gray-100  mt-6">
            <h2 className="text-xl text-white p-4 font-semibold mb-4 bg-black">TRENDING NOW</h2>
            {/* Display trending authors here using AuthorCard component */}
            <ul className="p-2">
              {authors.map((author, index) => (
                <li key={index}>
                  <AuthorCard author={author} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
