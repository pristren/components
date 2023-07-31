/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    // icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    // icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    // icon: IconThree,
  },
];

export default function Home() {
  const [isopen, setIsopen] = useState({
    open: false,
    menuName: "",
  });

  return (
    <div className="bg-[#D9E8E5] px-8 lg:px-24 py-12">
      <header>
        <nav
          className="bg-white shadow-sm px-6 py-4 rounded"
          onMouseLeave={() =>
            setIsopen({
              open: false,
              menuName: "",
            })
          }
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 items-center">
              <Image src="./logo.svg" alt="logo" width={50} height={50} />
              <h1 className="text-lg font-medium text-[#2D3B3B]">Pachama</h1>
            </div>
            <div className="md:flex hidden lg:gap-x-8 md:gap-x-6 items-center">
              <a
                onMouseEnter={() =>
                  setIsopen({
                    open: false,
                    menuName: "",
                  })
                }
                href="#"
                className="text-base font-medium text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                About us
              </a>
              <a
                onMouseEnter={() =>
                  setIsopen({
                    open: false,
                    menuName: "",
                  })
                }
                href="#"
                className="text-base font-medium text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                How it works
              </a>
              <div className="flex items-center -ms-2 relative">
                <a
                  onMouseEnter={() =>
                    setIsopen({
                      open: true,
                      menuName: "explore",
                    })
                  }
                  href="#"
                  className="text-base font-medium text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  Explore
                </a>
                <svg
                  onMouseEnter={() =>
                    setIsopen({
                      open: true,
                      menuName: "explore",
                    })
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(0, 0, 0, 0.3)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
                <div
                  onMouseLeave={() => {
                    let time = false;
                    setTimeout(() => {
                      time = true;
                    }, 1000);
                    if (time) {
                      if (isopen.menuName !== "") {
                        setIsopen({
                          open: true,
                          menuName: isopen.menuName,
                        });
                      } else {
                        setIsopen({
                          open: false,
                          menuName: "",
                        });
                      }
                    }
                  }}
                  className={`left-1/2 z-10 mt-3   -translate-x-1/2 top-[2.60rem] transform px-4 sm:px-0 w-screen lg:max-w-xl max-w-sm 
                  ${
                    isopen.open && isopen.menuName === "explore"
                      ? "absolute"
                      : "hidden"
                  }
                  `}
                  //  ${
                  //   isopen ? "absolute" : "hidden "
                  // }
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            {/* <item.icon aria-hidden="true" /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="36"
                              height="36"
                              viewBox="0 0 24 24"
                              style={{
                                fill: "rgba(0, 0, 0, 0.3)",
                                transform: "",
                                msFilter: "",
                              }}
                              // "fill: rgba(0, 0, 0, 0.3);transform: ;msFilter:;"
                            >
                              <path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2z"></path>
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center -ms-2 relative">
                {/* //relative */}
                <a
                  id="impact"
                  onMouseEnter={() =>
                    setIsopen({
                      open: true,
                      menuName: "impact",
                    })
                  }
                  href="#"
                  className="text-base font-medium text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  Impact
                </a>
                <svg
                  onMouseEnter={() =>
                    setIsopen({
                      open: true,
                      menuName: "impact",
                    })
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(0, 0, 0, 0.3)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
                <div
                  onMouseLeave={() => {
                    let time = false;
                    setTimeout(() => {
                      time = true;
                    }, 1000);
                    if (time) {
                      if (isopen.menuName !== "") {
                        setIsopen({
                          open: true,
                          menuName: isopen.menuName,
                        });
                      } else {
                        setIsopen({
                          open: false,
                          menuName: "",
                        });
                      }
                    }
                  }}
                  className={`left-1/2 z-10 mt-3   -translate-x-1/2 top-[2.60rem] transform px-4 sm:px-0   w-screen lg:max-w-xl max-w-sm
                  ${
                    isopen.open && isopen.menuName === "impact"
                      ? "absolute"
                      : "hidden"
                  }
                  `}
                  //  ${
                  //   isopen ? "absolute" : "hidden "
                  // }
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            {/* <item.icon aria-hidden="true" /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="36"
                              height="36"
                              viewBox="0 0 24 24"
                              style={{
                                fill: "rgba(0, 0, 0, 0.3)",
                                transform: "",
                                msFilter: "",
                              }}
                              // "fill: rgba(0, 0, 0, 0.3);transform: ;msFilter:;"
                            >
                              <path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2z"></path>
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              {/* one cart icon and one user icon like google */}
              <Image src="/cart.webp" alt="cart" width={35} height={35} />
              <Image src="/user.webp" alt="user" width={35} height={35} />
              <div className="flex md:hidden">
                <button
                  onClick={() =>
                    setIsopen({
                      open: true,
                      menuName: "menu",
                    })
                  }
                  type="button"

                  // className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgba(0, 0, 0, 0.3)"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      // strokeLinecap="round"
                      // strokeLinejoin="round"
                      // strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* online 3 dot */}
          </div>
        </nav>
      </header>
    </div>
  );
}
