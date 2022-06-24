import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaRegUser } from "react-icons/fa";
import { TbHome2 } from "react-icons/tb";
import Image from "next/image";

function Navbar() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isToggled, setIsToggled] = React.useState(true);
  const [selected, setSelected] = React.useState("home");
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsMoon
          className="text-white transition md:w-5 md:h-5 sm:w-16 sm:h-16 hover:text-sky-200"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsSun
          className="text-yellow-500 transition md:w-5 md:h-5 sm:w-16 sm:h-16 hover:text-yellow-700"
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
    } else if (router.asPath === "/about") {
      setSelected("about");
    }
  }, [router.asPath]);

  return (
    <>
      <nav className="relative items-center justify-between w-full px-4 py-4 select-none sm:block md:flex sm:flex-col md:flex-row">
        <div className="z-20 flex items-start sm:w-full md:w-1/4 min-h-10 fade-m3">
          <Link href="/">
            <a
              className="flex items-center gap-3 transition md:hover:scale-[104%] active:scale-95"
              href="#"
            >
              <div className="z-20 w-12 h-12 transition ">
                <Image
                  src="/ty-circle-image.png"
                  alt="Ty Fiero"
                  className="z-20"
                  width={48}
                  height={48}
                />
              </div>
              <h1 className="z-20 text-3xl font-bold leading-tight tracking-tighter md:text-6xl md:pr-8 logo f1">
                Template
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
            // size={25}
            easing="ease-in"
            label="Show menu"
            rounded
          />
        </div>

        {isToggled && (
          <>
            <div className="absolute top-0 left-0 z-10 w-full h-[100vh] bg-gradient-to-b from-white/90 dark:from-black/90 via-sky-100/90 dark:via-sky-900/90 to-sky-400/90 dark:to-sky-700/90 fade-effect-fast md:hidden !overflow-hidden"></div>

            <ul className="z-20 flex items-center mt-4 md:gap-5 sm:gap-10 sm:flex-col md:flex-row fade-effect-quick sm:absolute md:flex sm:left-0 sm:right-0 sm:ml-auto sm:mr-auto sm:w-[80%] md:justify-end md:mr-10 f1">
              <li>
                <Link href="/">
                  <a
                    className={
                      " fade-m1 flex gap-2 items-center   " +
                      (selected === "home"
                        ? " bg-sky-500 font-bold sm:text-3xl md:text-xl rounded-2xl text-white px-2 py-1 "
                        : " md:hover:text-gray-500 sm:text-3xl md:text-base sm:text-sky-900 dark:text-sky-50 md:text-gray-400")
                    }
                    href="#"
                    onClick={() => {
                      if (isToggled && isMobile) {
                        setIsToggled(false);
                      }
                      // if(selected !== "home") {
                      //   setSelected("home");
                      // }
                    }}
                  >
                    {selected === "home" && (
                      <TbHome2 className="scale-110 fade-effect-quick" />
                    )}
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className={
                      " fade-m2  flex gap-2 items-center " +
                      (selected === "about"
                        ? " bg-sky-500 font-bold sm:text-3xl md:text-xl rounded-2xl text-white px-2 py-1"
                        : " md:hover:text-gray-500 sm:text-3xl md:text-base sm:text-sky-900 md:text-gray-400 dark:text-sky-50 ")
                    }
                    href="#"
                    onClick={() => {
                      if (isToggled && isMobile) {
                        setIsToggled(false);
                      }
                      // if(selected !== "about") {
                      //   setSelected("about");
                      // }
                    }}
                  >
                    {selected === "about" && (
                      <FaRegUser className="fade-effect-quick" />
                    )}
                    About
                  </a>
                </Link>
              </li>

              <li>{renderThemeChanger()}</li>
            </ul>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
