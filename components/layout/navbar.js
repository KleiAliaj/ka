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
import {
  AnimatePresence,
  m,
  useReducedMotion,
} from "framer-motion";

function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  let beep, boop;
  if (typeof window !== "undefined") {
    beep = new Audio("/assets/other/bub2.mp3");
    beep.volume = 0.4;
    boop = new Audio("/assets/other/bub.mp3");
    boop.volume = 0.4;
  }
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
          name: "About Me",
          icon: <FaRegUser />,
          path: "/about",
        },
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
          onClick={() => {
            if (typeof window !== "undefined") {
              beep.play();
            }
            setTheme("light");
          }}
        />
      );
    } else {
      return (
        <BsSun
          className="transition md:text-yellow-500 sm:text-yellow-300 md:w-5 md:h-5 sm:w-10 sm:h-10 hover:text-yellow-700"
          role="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              boop.play();
            }

            setTheme("dark");
          }}
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
        <nav className=" relative items-center justify-between w-full px-4 py-4 select-none sm:block md:flex sm:flex-col md:flex-row !z-[10000]">
          <div className="z-20 flex items-start sm:w-full md:w-1/4 min-h-10 grow-effect">
            <Link
              className="flex items-center gap-3 transition md:hover:scale-[104%] active:scale-95 z-[120] duration-500 "
              href="/"
            >
              <div className="relative w-12 h-12 transition rounded-full shadow-md dark:shadow-sky-400/60 shadow-sky-800/70">
                <Image
                  src="/assets/other/ty-circle-image.webp"
                  alt="Ty Fiero"
                  fill
                  sizes="48px"
                  priority
                />
              </div>
              <p className="pt-2 pb-1 text-3xl font-bold leading-tight tracking-tighter transition md:text-4xl lg:text-6xl md:pr-8 logo f1 whitespace-nowrap drop-shadow-lg drop-shadow-sky-800 dark:drop-shadow-sky-500">
                Ty Fiero
              </p>
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

              <m.ul
                variants={menuVariant}
                initial={"menuStart"}
                animate={"menuStop"}
                className="z-[120] flex items-center mt-4 md:gap-1 lg:gap-2 sm:gap-8 sm:flex-col md:flex-row fade-effect-quick sm:absolute md:flex sm:left-0 sm:right-0 sm:ml-auto sm:mr-auto sm:w-[80%]  md:justify-end md:mr-5 lg:mr-10 f1 "
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

                <li className="sm:pl-0 md:pl-2">{renderThemeChanger()}</li>
              </m.ul>
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
    <m.div
      variants={itemVariant}
      className={
        "flex flex-col items-center    " + (sub ? "  rounded-md" : " ")
      }
    >
      <Link href={`/${name === "home" ? "" : name}`}>
        <li
          id={name}
          className={
            "relative group flex gap-1 cursor-pointer  items-center capitalize bg-transparent  transition duration-500 rounded-2xl w-fit   sm:!z-100 md:!z-20 shadow-sky-700/40 sm:text-4xl  md:text-lg " +
            (selected === name
              ? " !bg-sky-500 font-bold  shadow-md  text-white py-[2px] "
              : " dark:hover:!text-sky-900     text-sky-900 dark:text-sky-50 dark:shadow-sky-300/40  hover:bg-sky-300/40 dark:hover:bg-sky-300 hover:shadow-md ") +
            (name.length < 4 ? " px-4" : " px-2")
          }
          onMouseEnter={() => {
            setClicked(true);
          }}
          onMouseLeave={() => {
            setClicked(false);
          }}
        >
          <>
            <div
              className={"flex gap-1 items-center z-100"}
              onClick={() => {
                //When clicked, I need it to set selected if it isnt already.
                //also needs to navigate to the page if not selected
                //if selected and submenu open, navigate, otherwise open menu

                if (selected !== name) {
                  setSelected(name);
                }
                //handleClick deals with mobile styling of the menu
                handleClick();
              }}
            >
              <div className=""> {icon}</div>
              {name}
            </div>

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
                <m.div
                  // layout
                  exit={{ opacity: 0, top: "0rem", z: -10, scaleY: 0.7 }}
                  initial={{ opacity: 0, top: "0rem", z: -10, scaleY: 0.7 }}
                  animate={{
                    opacity: 1,
                    top: isMobile ? "1.5rem" : "1.55rem",
                    z: -100,
                    scaleY: 1,
                  }}
                  transition={{
                    duration: isMobile ? 0.2 : selected === name ? 0.4 : 0.4,
                    delay: 0.12,
                  }}
                  className="absolute sm:top-12 md:top-3 px-1 shadow-lg shadow-sky-400/40  left-[3px] pt-2  rounded-b-lg  w-[95%] h-fit -!z-10 md:bg-gradient-to-b md:from-white/0 md:via-white/40 md:to-white dark:md:from-slate-800/0 dark:md:via-slate-800/40 dark:md:to-slate-800"
                >
                  {sub &&
                    subLinks.map((link, index) => {
                      return (
                        <Link
                          href={link.path}
                          id={link.name}
                          key={link.path}
                          className={
                            "px-1 py-[1px] my-1 transition capitalize sm:text-xl md:text-sm  w-full hover:bg-sky-300/40 dark:hover:bg-sky-600 rounded-md flex items-center gap-1 hover:shadow-md shadow-sky-700/50 whitespace-nowrap" +
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
                        </Link>
                      );
                    })}
                </m.div>
              ) : null}
            </AnimatePresence>
          </>
        </li>
      </Link>
      <div className="gap-3 mt-1 sm:flex md:hidden">
        {sub &&
          subLinks.map((link, index) => {
            return (
              <Link
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
                href={link.path}
                key={link.path}
              >
                {/* <div>{link.icon}</div> */}
                {link.name}
              </Link>
            );
          })}
      </div>
    </m.div>
  );
}

export default Navbar;
