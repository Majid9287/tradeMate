import Link from "next/link";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import NotificationCard from "./NotificationCard";
import { FaUser, FaTruck, FaEnvelope, FaBloggerB } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import { PiDotFill } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { FaReadme } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const AdminLayout = ({ children }) => {
  const router = useRouter();
 
  const [NotificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [AccountDropdown, setAccountDropdown] = useState(false);
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);
  const [isAdmin, setisAdmin] = useState(true);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [introDropdownOpen, setintroDropdownOpen] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false); // State to control side navbar visibility

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  useEffect(() => {
    // Close the menu when the route changes
    setShowSideNav(false);
  }, [router.asPath]);
  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  const handleBlogDropdown = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
  };
  const handleintroDropdown = () => {
    setintroDropdownOpen(!introDropdownOpen);
  };
  const handleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };
  const handleNotifaction = () => {
    setNotificationDropdownOpen(!NotificationDropdownOpen);
  };
  const handleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };
  const handleNavigateToordertatus = (status) => {
    router.push(`/adminDashboard/${status}`);
  };
  const handelAccountDropdown = () => {
    setAccountDropdown(!AccountDropdown);
  };
  const [notifactionItems, setNotifactionItems] = useState([1, 2]);
  const [notifications, setNotifications] = useState([
    {
      userImage: "https://placekitten.com/40/40", // Placeholder kitten image
      text: "New message from John Doe.",
    },
    {
      userImage: "https://placekitten.com/41/41", // Another placeholder kitten image
      text: "You have a new follower: Jane Smith.",
    },
  ]); // Array of notifications

  const handleNotification = () => {
    // Handle notification logic and update notifications state
  };
  return (
    <div className="flex">
      <nav
        className={`${
          showSideNav ? "md:flex" : "hidden" // Use the showSideNav state to control visibility
        } custom-scrollbar w-full md:w-64 bg-gray-800 md:flex text-white overflow-y-scroll`}
        style={{ height: "100vh" }}
      >
        <style>
          {`
        /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          border-radius: 50px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937; /* Track background color */
        }
       
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1f2937; /* Scrollbar thumb color */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          border-radius: 50px;
          background: #555; /* Scrollbar thumb color on hover */
        }
      `}
        </style>
        <ul className="flex flex-col flex-1">
          <li className={`px-4 py-6 `}>
            <div className="flex p-2 justify-between">
              <div className="flex">
                <CgGirl className="mr-2  text-3xl" />{" "}
                <h1 className="font-bold mt-1">Trading</h1>
              </div>
              <div
              className="md:hidden"
                onClick={(e) => {
                  toggleSideNav(); // Function to show/hide the dropdown
                }}
              >
                <IoIosCloseCircle  className="font-bold text-2xl mt-1"/>
              </div>
            </div>
          </li>
          <div className="mt-4">
            <li className={`px-4 py-1`}>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleintroDropdown(); // Function to show/hide the dropdown
                }}
                className={`flex items-center justify-between p-2 rounded-md hover:bg-amber-400 ${
                  router.pathname === "" ? "bg-amber-500" : ""
                }`}
              >
                <div className="flex">
                  <FaReadme  className="mr-2 mt-1" />{" "}
                  <h1 className="font-bold">Courses</h1>
                </div>
                <div>
                  {!introDropdownOpen && (
                    <IoMdArrowDropright className="mr-2 mt-1" />
                  )}
                  {introDropdownOpen && (
                    <IoMdArrowDropdown className="mr-2 mt-1" />
                  )}
                </div>
              </div>
            </li>

            {introDropdownOpen && (
              <>
                <Link href="/adminDashboard/course/create">
                  <li className={`px-4`}>
                    <div
                      className={`flex p-2 rounded-md hover:bg-amber-400 ${
                        router.pathname === "" ? "bg-amber-500" : ""
                      }`}
                    >
                      <PiDotFill className="mr-2 mt-1" />{" "}
                      <h1 className="font-bold">Create New</h1>
                    </div>
                  </li>
                </Link>

              
              </>
            )}
          </div>

          <div>
            <li className={`px-4 py-1`}>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleBlogDropdown(); // Function to show/hide the dropdown
                }}
                className={`flex items-center justify-between p-2 rounded-md hover:bg-amber-400 ${
                  router.pathname === "" ? "bg-amber-500" : ""
                }`}
              >
                <div className="flex">
                  <FaBloggerB className="mr-2 mt-1" />{" "}
                  <h1 className="font-bold">Blog</h1>
                </div>
                <div>
                  {!blogDropdownOpen && (
                    <IoMdArrowDropright className="mr-2 mt-1" />
                  )}
                  {blogDropdownOpen && (
                    <IoMdArrowDropdown className="mr-2 mt-1" />
                  )}
                </div>
              </div>
            </li>

            {blogDropdownOpen && (
              <>
                <Link href="/adminDashboard/blog/create">
                  <li className={`px-4`}>
                    <div
                      className={`flex p-2 rounded-md hover:bg-amber-400 ${
                        router.pathname === "" ? "bg-amber-500" : ""
                      }`}
                    >
                      <PiDotFill className="mr-2 mt-1" />{" "}
                      <h1 className="font-bold">New Post</h1>
                    </div>
                  </li>
                </Link>

                <Link href="/adminDashboard/blog/list">
                  <li className={`px-4`}>
                    <div
                      className={`flex p-2 rounded-md hover:bg-amber-400 ${
                        router.pathname === "" ? "bg-amber-500" : ""
                      }`}
                    >
                      <PiDotFill className="mr-2 mt-1" />{" "}
                      <h1 className="font-bold">Blog List</h1>
                    </div>
                  </li>
                </Link>
              </>
            )}
          </div>

          <div>
            <li className={`px-4 py-1`}>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleUserDropdown(); // Function to show/hide the dropdown
                }}
                className={`flex items-center justify-between p-2 rounded-md hover:bg-amber-400 ${
                  router.pathname === "" ? "bg-amber-500" : ""
                }`}
              >
                <div className="flex">
                  <FaUser className="mr-2 mt-1" />{" "}
                  <h1 className="font-bold">User</h1>
                </div>
                <div>
                  {!userDropdownOpen && (
                    <IoMdArrowDropright className="mr-2 mt-1" />
                  )}
                  {userDropdownOpen && (
                    <IoMdArrowDropdown className="mr-2 mt-1" />
                  )}
                </div>
              </div>
            </li>

            {userDropdownOpen && (
              <>
                <Link href="/adminDashboard/user/list">
                  <li className={`px-4`}>
                    <div
                      className={`flex p-2 rounded-md hover:bg-amber-400 ${
                        router.pathname === "" ? "bg-amber-500" : ""
                      }`}
                    >
                      <PiDotFill className="mr-2 mt-1" />{" "}
                      <h1 className="font-bold">User List</h1>
                    </div>
                  </li>
                </Link>
              </>
            )}
          </div>
          <Link href="/adminDashboard/message/list">
            <li className={`px-4 py-1`}>
              <div
                className={`flex items-center justify-between p-2 rounded-md hover:bg-amber-400 ${
                  router.pathname === "" ? "bg-amber-500" : ""
                }`}
              >
                <div className="flex">
                  <FaEnvelope className="mr-2 mt-1" />{" "}
                  <h1 className="font-bold">Message</h1>
                </div>
              </div>
            </li>
          </Link>

          <Link href="/adminDashboard/user/users" className="hidden">
            <li
              className={`p-4 hover:bg-amber-400 ${
                router.pathname === "/adminDashboard/user/users"
                  ? "bg-amber-500"
                  : ""
              }`}
            >
              <div className="flex">
                <FaUser className="mr-2 mt-1" />{" "}
                <h1 className="font-bold">Users</h1>
              </div>
            </li>
          </Link>

          <Link href="/adminDashboard/shipMethod/methods" className="hidden">
            <li
              className={`p-4 hover:bg-amber-400 ${
                router.pathname === "/adminDashboard/shipMethod/methods"
                  ? "bg-amber-500"
                  : ""
              }`}
            >
              <div className="flex">
                <FaTruck className="mr-2 mt-1" />{" "}
                <h1 className="font-bold"> Shipping Method</h1>
              </div>
            </li>
          </Link>
          <Link href="/adminDashboard/message/message" className="hidden">
            <li
              className={`p-4 hover:bg-amber-400 ${
                router.pathname === "/adminDashboard/message//message"
                  ? "bg-amber-500"
                  : ""
              }`}
            >
              <div className="flex">
                <FaEnvelope className="mr-2 mt-1" />{" "}
                <h1 className="font-bold">Message</h1>
              </div>
            </li>
          </Link>
        </ul>
      </nav>

      <main className="flex-1 overflow-y-scroll" style={{ height: "100vh" }}>
        {/* Header */}
        <nav
          className={`${
            showSideNav ? "hidden" : "flex" // Use the showSideNav state to control visibility
          } h-16 px-2 bg-gray-800 text-white md:flex items-center justify-between md:justify-end`}
        >
          <span className=" flex md:hidden font-bold text-lg cursor-pointer">
            <TiThMenu className="font-bold" onClick={toggleSideNav} />
          </span>

          <div className=" flex  space-x-5  ">
            <>
              <span
                className=" hover:text-gray-200  text-white"
                onClick={handleNotifaction}
              >
                <svg
                  style={{ fontWeight: "bold" }}
                  className="h-7 font-bold p-1 text-white cursor-pointer"
                  version="1.1"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 611.999 611.999"
                  xmlSpace="preserve"
                >
                  <path
                    d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203
				C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578
				c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626
				h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856
				c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626
				C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32
				c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082
				c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z
				 M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826
				c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485
				c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"
                  />
                  <path
                    d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258
				c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258
				C323.259,126.96,315.532,119.235,306.001,119.235z"
                  />
                  <path
                    d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 ..."
                    fill="white"
                    style={{ transform: "translate(2px, 2px)", opacity: "0.7" }}
                  />
                </svg>
                {notifactionItems.length > 0 && (
                  <span className="absolute right-22 -mt-7  px-1 cursor-pointer bg-red-600 text-white rounded-full text-xs z-auto">
                    {notifactionItems.length}
                  </span>
                )}
                {NotificationDropdownOpen && (
                  <div className="absolute top-12 right-0 mt-2 w-96 z-50 mx-2 bg-white rounded-md shadow-md overflow-hidden ">
                    <div className="flex justify-between p-3 bg-gray-200">
                      <p className="text-sm font-bold text-black">
                        Notifications
                      </p>
                      <button className="text-gray-500 hover:text-gray-900">
                        Close All
                      </button>
                    </div>
                    {notifications.map((notification, index) => (
                      <NotificationCard
                        key={index}
                        notification={notification}
                        onClose={() => {
                          // Handle close notification logic
                          // Remove the notification from the state
                          const updatedNotifications = [...notifications];
                          updatedNotifications.splice(index, 1);
                          setNotifications(updatedNotifications);
                        }}
                        cardWidth="96"
                      />
                    ))}
                  </div>
                )}
              </span>
            </>
            <span
              className=" md:flex  hover:text-gray-400"
              onMouseEnter={() => {
                handelAccountDropdown(true);
              }}
              onMouseLeave={() => {
                handelAccountDropdown(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {AccountDropdown && (
                <div
                  className={`absolute right-1 mt-4 px-6 py-2 bg-white rounded-lg shadow-lg`}
                  style={{ zIndex: 50 }}
                >
                  <ul className="py-2">
                    {isUserLoggedIn ? (
                      // If user is logged in, show "Profile" and "Orders" (or "Admin Dashboard" if admin)
                      <>
                        <Link href="/profile">
                          <li className=" px-4 py-2 hover:bg-gray-100">
                            My Account
                          </li>
                        </Link>
                        {isAdmin ? (
                          <Link href="/">
                            <li className="px-4 py-2 hover:bg-gray-100">
                             View as user
                            </li>
                          </Link>
                        ) : (
                          <Link href="/orders">
                            <li className="px-4 py-2 hover:bg-gray-100">
                              Orders
                            </li>
                          </Link>
                        )}
                        <Link href="/">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Logout
                          </li>
                        </Link>
                      </>
                    ) : (
                      // If user is not logged in, show "Sign In" and "Register"
                      <>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link href="/signin">Sign In</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link href="/signup">Register</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </span>
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
