import Alert from "../blog/alert";
import Footer from "./footer";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Navbar from "./navbar";

export default function Layout({ preview, children, fontCn }) {
  return (
    <>
      <div
        className={
          "w-full h-full min-h-screen sm:overflow-x-hidden md:overflow-auto " +
          fontCn
        }
      >
        <div className="fixed top-0 left-0 background -z-50">
          {/* Inspiration from https://codepen.io/Mamboleoo/pen/BxMQYQ */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar className="w-full" />
        <main className="w-full h-full fade-effect-quick">{children}</main>
      </div>
      <Footer />
    </>
  );
}
