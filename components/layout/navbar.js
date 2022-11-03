import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import {
  FaBook,
  FaCaretDown,
  FaGlobeAmericas,
  FaRegUser,
  FaRobot,
} from "react-icons/fa";
import {
  TbCamera,
  TbCode,
  TbDeviceLaptop,
  TbFileText,
  TbFolders,
  TbHome2,
  TbLink,
  TbMail,
  TbMusic,
  TbPalette,
} from "react-icons/tb";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isToggled, setIsToggled] = React.useState(true);
  const [isReady, setIsReady] = React.useState(false);
  const [selected, setSelected] = React.useState("home");
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const items = [
    {
      name: "home",
      icon: <TbHome2 className="scale-110 fade-effect-quick" />,
      sub: false,
    },
    {
      name: "about",
      icon: <FaRegUser className="scale-100 fade-effect-quick" />,
      sub: true,
      subLinks: [
        {
          name: "Links",
          icon: <TbLink />,
          path: "/about/links",
        },
        {
          name: "Books",
          icon: <FaBook />,
          path: "/about/books",
        },
        {
          name: "Travel",
          icon: <FaGlobeAmericas />,
          path: "/about/travel",
        },
      ],
    },
    {
      name: "code",
      icon: <TbCode className="scale-110 fade-effect-quick" />,
      sub: true,
      subLinks: [
        {
          name: "Projects",
          icon: <TbFolders />,
          path: "/code/projects",
        },
        {
          name: "AI",
          icon: <FaRobot />,
          path: "/code/ai",
        },
      ],
    },
    {
      name: "art",
      icon: <TbPalette className="scale-110 fade-effect-quick" />,
      sub: true,
      subLinks: [
        {
          name: "Music",
          icon: <TbMusic />,
          path: "/art/music",
        },
        {
          name: "Photos",
          icon: <TbCamera />,
          path: "/art/photography",
        },
        {
          name: "AI Art",
          icon: <FaRobot />,
          path: "/art/ai-art",
        },
        {
          name: "Code Art",
          icon: <TbDeviceLaptop />,
          path: "/art/generative",
        },
      ],
    },

    {
      name: "blog",
      icon: <TbFileText className="scale-110 fade-effect-quick" />,
      sub: false,
    },
    {
      name: "contact",
      icon: <TbMail className="scale-110 fade-effect-quick" />,
      sub: false,
    },
  ];

  React.useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsMoon
          className="text-white transition md:w-5 md:h-5 sm:w-10 sm:h-10 hover:text-sky-200"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsSun
          className="transition md:text-yellow-500 sm:text-yellow-300 md:w-5 md:h-5 sm:w-10 sm:h-10 hover:text-yellow-700"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    };

    if (getWindowDimensions().width < 720) {
      setIsMobile(true);
      setIsToggled(false);
    } else {
      setIsMobile(false);
      setIsToggled(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
      setIsToggled(false);
    } else {
      setIsMobile(false);
      setIsToggled(true);
    }
  };
  let postSlice = router.asPath.slice(0, 6);
  let artSlice = router.asPath.slice(0, 4);

  React.useEffect(() => {
    if (router.asPath === "/home" || router.asPath === "/") {
      setSelected("home");
    } else if (router.asPath === "/code" || postSlice === "/code/") {
      setSelected("code");
    } else if (router.asPath === "/art" || artSlice === "/art") {
      setSelected("art");
    } else if (router.asPath === "/blog" || postSlice === "/posts") {
      setSelected("blog");
    } else if (router.asPath === "/about" || postSlice === "/about") {
      setSelected("about");
    } else if (router.asPath === "/contact") {
      setSelected("contact");
    }
  }, [router.asPath]);

  const handleClick = () => {
    if (isToggled && isMobile) {
      setIsToggled(false);
      if (typeof document !== "undefined") {
        document.body.classList.toggle("lock-scroll");
      }
    }
  };
  const menuVariant = {
    menuStart: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.7,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        staggerDirection: -1,
      },
    },
    menuStop: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };
  return (
    <>
      <nav className="relative items-center justify-between w-full px-4 py-4 select-none sm:block md:flex sm:flex-col md:flex-row">
        <div className="z-20 flex items-start sm:w-full md:w-1/4 min-h-10 grow-effect">
          <Link href="/">
            <a
              className="flex items-center gap-3 transition md:hover:scale-[104%] active:scale-95 z-[120] duration-500 "
              href="#"
            >
              <div className="w-12 h-12 transition shadow-md dark:shadow-sky-400/60 shadow-sky-800/70 rounded-full">
                <Image
                  src="/assets/other/ty-circle-image.webp"
                  className=" "
                  alt="Ty Fiero"
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-6xl md:pr-8 logo f1 whitespace-nowrap drop-shadow-lg drop-shadow-sky-800 dark:drop-shadow-sky-500 pt-2 pb-1">
                Ty Fiero
              </p>
            </a>
          </Link>
        </div>

        <div className="absolute z-[120] sm:flex right-2 top-3 md:hidden">
          {" "}
          <Hamburger
            className=""
            toggled={isToggled}
            color="#0484C7"
            toggle={() => {
              setIsToggled(!isToggled);
              if (typeof document !== "undefined") {
                document.body.classList.toggle("lock-scroll");
              }
            }}
            easing="ease-in"
            label="Show menu"
            rounded
          />
        </div>

        {isToggled && (
          <>
            <div className="absolute top-0 left-0 z-[100] w-full h-screen bg-gradient-to-b from-white dark:from-black via-sky-100 dark:via-sky-900 to-sky-400 dark:to-sky-700 fade-effect-fast md:hidden !overflow-hidden"></div>

            <motion.ul
              variants={menuVariant}
              initial={"menuStart"}
              animate={"menuStop"}
              className="z-[120] flex items-center mt-4 md:gap-1 lg:gap-2 sm:gap-8 sm:flex-col md:flex-row fade-effect-quick sm:absolute md:flex sm:left-0 sm:right-0 sm:ml-auto sm:mr-auto sm:w-[80%]  md:justify-end md:mr-5 lg:mr-10 f1"
            >
              {items.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  sub={item.sub}
                  subLinks={item.subLinks}
                  selected={selected}
                  setSelected={setSelected}
                  handleClick={handleClick}
                  isMobile={isMobile}
                  isReady={isReady}
                />
              ))}

              <li className="sm:pl-0  md:pl-2">{renderThemeChanger()}</li>
            </motion.ul>
          </>
        )}
      </nav>
    </>
  );
}

function MenuItem({
  selected,
  handleClick,
  name,
  icon,
  sub,
  subLinks,
  isMobile,
  isReady,
  setSelected,
}) {
  const prefersReducedMotion = useReducedMotion();
  const [clicked, setClicked] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (selected) {
      setClicked(false);
    }
  }, [selected]);

  const itemVariant = {
    menuStart: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.4 },
    menuStop: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={itemVariant}
      className={
        "flex flex-col items-center    " + (sub ? "  rounded-md" : " ")
      }
    >
      {/* {name !== "home" && (
        <motion.hr className="w-[40vw] border-1 rounded-full border-slate-700 my-0 sm:block md:hidden" />
      )} */}
      <li
        className={
          "relative group flex gap-1 cursor-pointer  items-center capitalize bg-transparent  transition duration-500 rounded-2xl w-fit   sm:!z-100 md:!z-20 shadow-sky-700/40 sm:text-4xl  md:text-lg " +
          (selected === name
            ? " !bg-sky-500 font-bold  shadow-md  text-white py-1 "
            : " md:hover:text-sky-400    text-sky-900 dark:text-sky-50 dark:shadow-sky-300/40  hover:bg-white dark:hover:bg-slate-800 hover:shadow-md ") +
          (name.length < 4 ? " px-4" : " px-2")
        }
        // style={{
        //   transition: "all 2.5s ease;",
        //   marginBottom:
        //     isMobile && sub && clicked ? `${40 * subLinks.length}px` : "",
        // }}
        onMouseEnter={() => {
          setClicked(true);
        }}
        onMouseLeave={() => {
          setClicked(false);
        }}
      >
        <>
          <Link href={`/${name === "home" ? "" : name}`}>
            <a
              className={"flex gap-1 items-center"}
              onClick={() => {
                //When clicked, I need it to set selected if it isnt already.
                //also needs to navigate to the page if not selected
                //if selected and submenu open, navigate, otherwise open menu

                if (selected !== name) {
                  setSelected(name);
                  // router.push(`/${name === "home" ? "" : name}`);
                } else {
                  // router.push(`/${name === "home" ? "" : name}`);
                }
                //handleClick deals with mobile styling of the menu

                handleClick();
              }}
            >
              <div className=""> {icon}</div>
              {name}
            </a>
          </Link>

          {sub && (
            <FaCaretDown
              className={
                "transition-transform duration-500 scale-75 sm:hidden md:block  " +
                (clicked ? " rotate-180" : "") +
                (selected === name ? " ml-0" : " ml-0")
              }
            />
          )}
          <AnimatePresence>
            {sub && clicked && !isMobile ? (
              <motion.div
                // layout
                exit={{ opacity: 0, top: "0rem" }}
                initial={{ opacity: 0, top: "0rem" }}
                animate={{ opacity: 1, top: isMobile ? "1.5rem" : "1.55rem" }}
                transition={{
                  duration: isMobile ? 0.2 : selected === name ? 0.4 : 0.4,
                }}
                className="absolute sm:top-12 md:top-3 px-1 shadow-lg shadow-sky-400/40  left-[3px] pt-2  rounded-b-lg  w-[95%] h-fit -!z-10 "
              >
                {sub &&
                  subLinks.map((link, index) => {
                    return (
                      <Link href={link.path} key={index}>
                        <a
                          className={
                            "px-1 py-[1px] my-1 transition capitalize sm:text-xl md:text-sm  w-full hover:bg-sky-200 dark:hover:bg-sky-600 rounded-md flex items-center gap-1 hover:shadow-md shadow-sky-700/50 whitespace-nowrap" +
                            (router.asPath === link.path
                              ? " bg-sky-500 text-white dark:text-sky-800 shadow-md"
                              : " text-sky-800 dark:text-sky-300 dark:hover:text-sky-50 ")
                          }
                          onClick={() => {
                            setClicked(false);
                            handleClick();
                          }}
                        >
                          <div>{link.icon}</div>
                          {link.name}
                        </a>
                      </Link>
                    );
                  })}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </>
      </li>
      <div className="sm:flex gap-3 mt-1  md:hidden">
        {sub &&
          subLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <a
                  className={
                    "px-2 py-[1px] my-1 transition capitalize sm:text-xl md:text-sm   w-full hover:bg-sky-200 dark:hover:bg-sky-600 rounded-md flex items-center gap-1 hover:shadow-md shadow-sky-700/50 whitespace-nowrap" +
                    (router.asPath === link.path
                      ? " bg-sky-500 text-white dark:text-sky-800 shadow-md"
                      : " text-sky-800 dark:text-sky-300 dark:hover:text-sky-50 ")
                  }
                  onClick={() => {
                    setClicked(false);
                    handleClick();
                  }}
                >
                  {/* <div>{link.icon}</div> */}
                  {link.name}
                </a>
              </Link>
            );
          })}
      </div>
    </motion.div>
  );
}

export default Navbar;
