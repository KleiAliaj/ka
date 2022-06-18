import Alert from "../alert";
import Footer from "../footer";
import Meta from "../meta";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Navbar from "./navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="w-full h-full sm:overflow-x-hidden md:overflow-auto">
        {/* <div className="fixed left-0 right-0 flex items-center justify-center ml-auto mr-auto sm:w-[30em] md:w-[70em] -z-50  mt-[25em] rounded-full "> */}
        {/* <div className="relative w-full max-w-lg bounds">
            <div className="absolute top-0 -left-4 w-[20em] h-[20em] bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70  dot"></div>
            <div className="absolute top-0 -right-4 w-[20em] h-[20em] bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70   dot2"></div>
            <div className="absolute -bottom-8 left-20 w-[20em] h-[20em] bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70   dot3"></div>
            <div className="absolute -top-20 -left-[250px] w-[10em] h-[10em] bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70  dot"></div>
            <div className="absolute -bottom-[500px] right-[150px] w-[10em] h-[10em] bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70   dot2"></div>
            <div className="absolute bottom-[50px] -right-[250px] w-[10em] h-[10em] bg-sky-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70   dot3"></div>
            <div className="relative m-8 space-y-4"></div>
          </div> */}
        {/* </div> */}

        <Navbar className="w-full" />
        {/* <Alert preview={preview} /> */}
        <main className="w-full h-full fade-effect-quick">{children}</main>
      </div>
      <Footer />
    </>
  );
}
