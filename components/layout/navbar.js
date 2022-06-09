import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isToggled, setIsToggled] = React.useState(true);
  const [selected, setSelected] = React.useState("home");
  const router = useRouter();
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

  React.useEffect(() => {
    if (router.asPath === "/home" || router.asPath === "/") {
      setSelected("home");
    } else if (router.asPath === "/projects") {
      setSelected("projects");
    } else if (router.asPath === "/music") {
      setSelected("music");
    } else if (router.asPath === "/blog") {
      setSelected("blog");
    } else if (router.asPath === "/about") {
      setSelected("about");
    } else if (router.asPath === "/contact") {
      setSelected("contact");
    }
  }, [router.asPath]);

  return (
    <>
      <nav className="relative items-center justify-between w-full px-4 py-4 bg-white sm:block md:flex sm:flex-col md:flex-row">
        <div className="flex items-start sm:w-full md:w-1/4 min-h-10">
          <Link href="/">
            <a className="" href="#">
              <div className="w-12 h-12 transition md:hover:scale-110 active:scale-95">
                <img src="/ty-circle-image.png" alt="Ty Fiero" />
              </div>
            </a>
          </Link>
        </div>

        <div className="absolute sm:flex right-2 top-3 md:hidden">
          {" "}
          <Hamburger
            className=""
            toggled={isToggled}
            color="black"
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
          <ul className="flex items-center mt-4 md:gap-5 sm:gap-3 sm:flex-col md:flex-row fade-effect-quick">
            <li>
              <Link href="/">
                <a
                  className={
                    "  " +
                    (selected === "home"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
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
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                className={
                    "   " +
                    (selected === "about"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
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
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a
                 className={
                    "   " +
                    (selected === "projects"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
                  }
                  href="#"
                  onClick={() => {
                    if (isToggled && isMobile) {
                      setIsToggled(false);
                    }
                    // if(selected !== "projects") {
                    //   setSelected("projects");
                    // }
                  }}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/music">
                <a
                 className={
                    "   " +
                    (selected === "music"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
                  }
                  href="#"
                  onClick={() => {
                    if (isToggled && isMobile) {
                      setIsToggled(false);
                    }
                    // if(selected !== "music") {
                    //   setSelected("music");
                    // }
                  }}
                >
                  Music
                </a>
              </Link>
            </li>
            <li>
              <Link href="/photography">
                <a
                 className={
                    "   " +
                    (selected === "photography"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
                  }
                  href="#"
                  onClick={() => {
                    if (isToggled && isMobile) {
                      setIsToggled(false);
                    }
                    // if(selected !== "music") {
                    //   setSelected("music");
                    // }
                  }}
                >
                  Photography
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                 className={
                    "   " +
                    (selected === "blog"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
                  }
                  href="#"
                  onClick={() => {
                    if (isToggled && isMobile) {
                      setIsToggled(false);
                    }
                    // if(selected !== "blog") {
                    //   setSelected("blog");
                    // }
                  }}
                >
                  Blog
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a
                 className={
                    "   " +
                    (selected === "contact"
                      ? " bg-sky-500 font-bold text-xl rounded-2xl text-white px-2 py-1"
                      : " hover:text-gray-500 text-base text-gray-400")
                  }
                  href="#"
                  onClick={() => {
                    if (isToggled && isMobile) {
                      setIsToggled(false);
                    }
                    // if(selected !== "contact") {
                    //   setSelected("contact");
                    // }
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
