import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaRegUser } from "react-icons/fa";
import { TbCode, TbFileText, TbHome2, TbMail, TbPalette } from "react-icons/tb";
import Image from "next/image";
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

    { name: "code", icon: <TbCode className="scale-110 fade-effect-quick" /> },
    {
      name: "art",
      icon: <TbPalette className="scale-110 fade-effect-quick" />,
    },
    {
      name: "blog",
      icon: <TbFileText className="scale-110 fade-effect-quick" />,
    },
    {
      name: "about",
      icon: <FaRegUser className="scale-110 fade-effect-quick" />,
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

  // console.log(postSlice);
  React.useEffect(() => {
    if (router.asPath === "/home" || router.asPath === "/") {
      setSelected("home");
    } else if (router.asPath === "/code" || postSlice === "/code/") {
      setSelected("code");
    } else if (router.asPath === "/art" || postSlice === "/art") {
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
              className="flex items-center gap-3 transition md:hover:scale-[104%] active:scale-95 z-[120]"
              href="#"
            >
              <div className="w-12 h-12 transition ">
                <Image
                  src="/assets/other/ty-circle-image.webp"
                  alt="Ty Fiero"
                  className=""
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl md:pr-8 logo f1 whitespace-nowrap">
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
              className="z-[120] flex items-center mt-4 md:gap-1 sm:gap-10 sm:flex-col md:flex-row fade-effect-quick sm:absolute md:flex sm:left-0 sm:right-0 sm:ml-auto sm:mr-auto sm:w-[80%]  md:justify-end md:mr-10 f1"
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
              <li className="sm:pl-0 md:pl-2">{renderThemeChanger()}</li>
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
            "flex gap-2 items-center capitalize bg-transparent transition duration-500 rounded-2xl  py-1 px-2 " +
            (selected === name
              ? " !bg-sky-500 font-bold sm:text-5xl md:text-xl  text-white "
              : " md:hover:text-sky-400    sm:text-4xl md:text-xl text-sky-900 dark:text-sky-50  ")
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
