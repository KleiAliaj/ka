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
      <div className="min-h-screen min-w-screen">
        {/* <div class="absolute top-0 left-0 h-full w-full flex items-center justify-center px-16 -z-50 animate-rotateAnimation">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-[20em] h-[20em] bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob "></div>
            <div class="absolute top-0 -right-4 w-[20em] h-[20em] bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-[20em] h-[20em] bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="m-8 relative space-y-4"></div>
          </div>
        </div> */}

        <Navbar className="w-full" />
        {/* <Alert preview={preview} /> */}
        <main className="fade-effect-quick">{children}</main>
      </div>
      <Footer />
    </>
  );
}
