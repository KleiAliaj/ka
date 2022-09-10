import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSun, BsMoon, BsChatLeftText } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaHome, FaRegUser } from "react-icons/fa";
import {
  TbCamera,
  TbCode,
  TbFileText,
  TbFolders,
  TbHome2,
  TbMail,
  TbMusic,
} from "react-icons/tb";
import Image from "next/image";
import { AiOutlineRobot } from "react-icons/ai";
import { motion, useReducedMotion } from "framer-motion";

function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isToggled, setIsToggled] = React.useState(true);
  const [selected, setSelected] = React.useState("home");
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const items = [
    { name: "home", icon: <TbHome2 className="scale-110 fade-effect-quick" /> },
    {
      name: "blog",
      icon: <TbFileText className="scale-110 fade-effect-quick" />,
    },
    {
      name: "about",
      icon: <FaRegUser className="scale-110 fade-effect-quick" />,
    },
    { name: "code", icon: <TbCode className="scale-110 fade-effect-quick" /> },
    {
      name: "ai",
      icon: <AiOutlineRobot className="scale-110 fade-effect-quick" />,
    },
    {
      name: "music",
      icon: <TbMusic className="scale-110 fade-effect-quick" />,
    },
    {
      name: "photos",
      icon: <TbCamera className="scale-110 fade-effect-quick" />,
    },
    {
      name: "contact",
      icon: <TbMail className="scale-110 fade-effect-quick" />,
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
          className="text-yellow-500 transition md:w-5 md:h-5 sm:w-10 sm:h-10 hover:text-yellow-700"
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

  // console.log(postSlice);

  React.useEffect(() => {
    if (router.asPath === "/home" || router.asPath === "/") {
      setSelected("home");
    } else if (router.asPath === "/code" || router.asPath === "/code/art") {
      setSelected("code");
    } else if (router.asPath === "/ai" || router.asPath === "/ai/Oliver") {
      setSelected("ai");
    } else if (router.asPath === "/music") {
      setSelected("music");
    } else if (router.asPath === "/photos") {
      setSelected("photos");
    } else if (router.asPath === "/blog" || postSlice === "/posts") {
      setSelected("blog");
    } else if (router.asPath === "/about") {
      setSelected("about");
    } else if (router.asPath === "/contact") {
      setSelected("contact");
    }
  }, [router.asPath]);

  const handleClick = () => {
    if (isToggled && isMobile) {
      setIsToggled(false);
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
        <div className="z-20 flex items-start sm:w-full md:w-1/4 min-h-10 fade-effect">
          <Link href="/">
            <a
              className="flex items-center gap-3 transition md:hover:scale-[104%] active:scale-95"
              href="#"
            >
              <div className="z-20 w-12 h-12 transition ">
                <Image
                  src="/assets/other/ty-circle-image.webp"
                  alt="Ty Fiero"
                  className="z-20"
                  width={48}
                  height={48}
                />
              </div>
              <h1 className="z-20 text-3xl font-bold leading-tight tracking-tighter md:text-6xl md:pr-8 logo f1 whitespace-nowrap">
                Ty Fiero
              </h1>
            </a>
          </Link>
        </div>

        <div className="absolute z-20 sm:flex right-2 top-3 md:hidden">
          {" "}
          <Hamburger
            className=""
            toggled={isToggled}
            color="#0484C7"
            toggle={() => {
              setIsToggled(!isToggled);
            }}
            easing="ease-in"
            label="Show menu"
            rounded
          />
        </div>

        {isToggled && (
          <>
            <div className="absolute top-0 left-0 z-10 w-full h-screen bg-gradient-to-b from-white/90 dark:from-black/90 via-sky-100/90 dark:via-sky-900/90 to-sky-400/90 dark:to-sky-700/90 fade-effect-fast md:hidden !overflow-hidden"></div>

            <motion.ul
              variants={menuVariant}
              initial={"menuStart"}
              animate={"menuStop"}
              className="z-20 flex items-center mt-4 md:gap-5 sm:gap-6 sm:flex-col md:flex-row fade-effect-quick sm:absolute md:flex sm:left-0 sm:right-0 sm:ml-auto sm:mr-auto sm:w-[80%] md:justify-end md:mr-10 f1"
            >
              {items.map((item) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  selected={selected}
                  handleClick={handleClick}
                />
              ))}
              <li>{renderThemeChanger()}</li>
            </motion.ul>
          </>
        )}
      </nav>
    </>
  );
}

function MenuItem({ selected, handleClick, name, icon }) {
  const prefersReducedMotion = useReducedMotion();

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
    <motion.li variants={itemVariant}>
      <Link href={`/${name === "home" ? "" : name}`}>
        <a
          className={
            "flex gap-2 items-center capitalize " +
            (selected === name
              ? " bg-sky-500 font-bold sm:text-3xl md:text-xl rounded-2xl text-white px-2 py-1"
              : " md:hover:text-sky-400 skew-x-0 md:hover:-skew-y-6 transition sm:text-3xl md:text-xl text-sky-900 dark:text-sky-50 ")
          }
          href="#"
          onClick={handleClick}
        >
          {selected === name && icon}
          {name}
        </a>
      </Link>
    </motion.li>
  );
}

export default Navbar;
