import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      {/* <Meta /> */}
      <div className="w-full h-full sm:overflow-x-hidden md:overflow-auto"></div>
      <Navbar className="w-full" />
      {/* <Alert preview={preview} /> */}
      <main className="w-full h-full fade-effect-quick">{children}</main>
      <Footer />
    </>
  );
}
