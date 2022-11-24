import Alert from "../blog/alert";
import Footer from "./footer";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Navbar from "./navbar";
import { LazyMotion, m, AnimatePresence, domAnimation } from "framer-motion";
import { useRouter } from "next/router";
export default function Layout({ preview, children, fontCn }) {
  const router = useRouter();
  return (
    <>
      <LazyMotion features={domAnimation}>
        <div
          className={"w-full h-full min-h-screen overflow-x-hidden " + fontCn}
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

          <AnimatePresence>
            <m.main
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full fade-effect-quick"
            >
              {children}
            </m.main>
          </AnimatePresence>
        </div>
        <Footer />
      </LazyMotion>
    </>
  );
}
