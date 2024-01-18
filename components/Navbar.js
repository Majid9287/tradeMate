import React from "react";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Color.module.css";
import { TiThMenu } from "react-icons/ti";
import {
  IoMdArrowDropdown,
  IoMdClose,
  IoMdArrowDropright,
} from "react-icons/io";
import { setUserLoggedOut } from '../redux/userSlice';
import store from '../redux/store';
const NavbarFour = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  console.log("nav",isLoggedIn, isAdmin)
  const staticMenuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
      sublinks: [],
    },
    {
      name: "Market",
      href: "#",
      sublinks: [
        { name: "Market Overview Widget", href: "/market/market-overview" },
        { name: "Economic Calendar Widget", href: "/market/economic-calendar" },
        { name: "Ticker Widget", href: "/market/ticker" },
        { name: "Symbol Overview Widget", href: "/market/symbol-overview" },
        { name: "Forex Cross Rates Widget", href: "/market/forex-cross-rates" },
      ],
    },
   
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/aboutus",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const [menuItems, setMenuItems] = useState(staticMenuItems);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [AccountDropdown, setAccountDropdown] = useState(false);
  const router = useRouter();
  console.log(menuItems);
  const handleLogout =async () => {
    await signOut({ redirect: false, callbackUrl: '/' });
    store.dispatch(setUserLoggedOut());
    // Add any additional logic you need for handling the logout, such as redirecting to the login page.
  };
  const handelAccountDropdown = () => {
    setAccountDropdown(!AccountDropdown);
  };
  useEffect(() => {
    // Fetch sublinks for the "Introduction" section from your API
    const fetchIntroductionSublinks = async () => {
      try {
        // Replace 'YOUR_INTRODUCTION_API_ENDPOINT' with the actual API endpoint
        const response = await fetch("/api/introduction/get-name");
        const data = await response.json();

        // Update the sublinks for the "Introduction" section
        setMenuItems((prevMenuItems) => {
          const updatedMenuItems = [...prevMenuItems];
          const introductionIndex = updatedMenuItems.findIndex(
            (item) => item.name === "Introduction"
          );

          if (introductionIndex !== -1) {
            updatedMenuItems[introductionIndex].sublinks = data;
          }

          return updatedMenuItems;
        });
      } catch (error) {
        console.error("Error fetching Introduction sublinks:", error);
      }
    };

    fetchIntroductionSublinks();
  }, []);

  
  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [router.asPath]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuItemClick = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  const handleSubMenuToggle = (itemName, isOpen) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [itemName]: isOpen,
    }));
  };
  return (
    <div className={`relative text-white w-full ${styles.customcolor}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 sm:px-6 lg:px-2">
        <div className="inline-flex items-center space-x-2">
          <span className={`font-bold ${styles.gradi}`}>TRADING</span>
        </div>
        <div className="hidden lg:block ml-12">
          <ul className="ml-12 inline-flex space-x-8 ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <div className="inline-flex items-center">
                  <div
                    className={` text-lg font-semibold text-white `}
                    onMouseEnter={() => handleSubMenuToggle(item.name, true)}
                    onMouseLeave={() => handleSubMenuToggle(item.name, false)}
                  >
                    <Link
                       href={
                        item.name === "Introduction"
                          ? "#"
                          : item.href
                      }
                      className={`inline-flex items-center ${styles.custom}`}
                    >
                      {item.name}

                      {item.sublinks && item.sublinks.length > 0 && (
                        <span>
                          <IoMdArrowDropdown className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Link>
                    {item.sublinks && item.sublinks.length > 0 && (
                      <ul
                        className={`${
                          openSubmenus && openSubmenus[item.name]
                            ? "block"
                            : "hidden"
                        } ${
                          styles.customcolor
                        } absolute  z-10  border border-gray-200 divide-y divide-gray-100 rounded-md`}
                      >
                        {item.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              href={
                                item.name === "Introduction"
                                  ? `/introduction/[slug]`
                                  : sublink.href
                              }
                              as={
                                item.name === "Introduction"
                                  ? `/introduction/${sublink.name}`
                                  : sublink.href
                              }
                              className={`block px-8 py-4 text-sm  ${styles.custom}`}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}{" "}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach"
          ></input>
        </div>

        <div className="ml-2  hidden lg:block">
          {isLoggedIn ? (
            <span
              className="pt-1 inline-block "
              onMouseEnter={() => {
                handelAccountDropdown(true);
              }}
              onMouseLeave={() => {
                handelAccountDropdown(false);
              }}
            >
              <img
                className="h-10 w-10 rounded-full"
                src="images/user.png"
                alt="Dan_Abromov"
              />
              {AccountDropdown && (
                <div
                  className={`absolute right-1  px-6 py-2  rounded-lg shadow-white  shadow-lg ${styles.customcolor}`}
                  style={{ zIndex: 50 }}
                >
                  <ul className="py-2">
                  
                    <>
                      <Link href="/profile">
                        <li
                          className={`px-4 py-2 hover:bg-gray-100 ${styles.custom1}`}
                        >
                          Profile
                        </li>
                      </Link>
                      {isAdmin && (
                        <Link href="/adminDashboard">
                          <li
                            className={`px-4 py-2 hover:bg-gray-100 ${styles.custom1}`}
                          >
                            Admin Dashboard
                          </li>
                        </Link>
                      )}
                      <div onClick={handleLogout}>
                        <li
                          className={`px-4 py-2 hover:bg-gray-100 ${styles.custom1}`}
                        >
                          Logout
                        </li>
                      </div>
                    </>
                  </ul>
                </div>
              )}
            </span>
          ) : (
            <span className="flex">
              <Link href="/signin" className="mx-2">
                {" "}
                <button
                  type="button"
                  className={`w-full rounded-md px-3 py-2  text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${styles.buttoncol}`}
                >
                  Login
                </button>
              </Link>
              <Link href="/signup">
                {" "}
                <button
                  type="button"
                  className={`w-full rounded-md px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${styles.buttoncol}`}
                >
                  Register
                </button>
              </Link>
            </span>
          )}
        </div>
        <div className="ml-2 lg:hidden">
          <TiThMenu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer text-white"
          />
        </div>
        {isMenuOpen && (
          <div
            className="lg:hidden text-white"
            onMouseLeave={() => {
              setIsMenuOpen(false);
            }}
          >
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right  lg:hidden transform p-2 transition-all ease-out">
              <div
                className={`divide-y-2 divide-gray-50 rounded-lg border shadow-lg ring-1 ring-white ring-opacity-5 ${styles.customcolor} `}
              >
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between pb-8">
                    <div className="inline-flex items-center space-x-2">
                      <span className={`font-bold ${styles.gradi}`}>
                        TRADING
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <IoMdClose
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className={`-m-3 flex items-center rounded-md p-3 text-lg font-semibold  ${styles.custom}`}
                        onClick={() => handleMenuItemClick(index)}
                      >
                        <span className="ml-3  ">{item.name}</span>
                        {item.sublinks && item.sublinks.length > 0 && (
                          <span className="ml-auto">
                            {openSubmenu === index ? (
                              <IoMdArrowDropright className="h-4 w-4" />
                            ) : (
                              <IoMdArrowDropdown className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </Link>
                      {item.sublinks &&
                        item.sublinks.length > 0 &&
                        openSubmenu === index && (
                          <ul className="pl-4">
                            {item.sublinks.map((sublink, subindex) => (
                              <li key={subindex}>
                                <Link
                                  href={sublink.href}
                                  className={`block px-4 py-2 text-sm  ${styles.custom}`}
                                >
                                  {sublink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavbarFour;
