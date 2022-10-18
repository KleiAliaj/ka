import { useState } from "react";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { FaHome, FaRegPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thanks, setThanks] = useState(false);
  const [verified, setVerified] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (verified) {
      const data = {
        name,
        email,
        message,
      };

      console.log(data);
      setName("");
      setEmail("");
      setMessage("");
      await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(data),
      })
        .then(() => {
          toast.success("Message sent! ✉️");
          // console.log("HI THERE BITCH");

          // console.log("why no work?");
        })
        .catch(() => {
          toast.error("Message failed to send :( ");
        });
      setThanks(true);
      // toast.success("Message sent! ✉️");
    } else {
      toast.error("Please complete reCAPTCHA first!");
    }
  };

  return (
    <div className="fade-effect-quick sm:mb-[50px] md:mb-0">
      <main className="text-box sm:!px-10 md:!px-20">
        {thanks ? (
          <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-4">
            <p className="text-xl font-bold ">
              Thanks for reaching out! I&apos;ll get back to you soon. 😊
            </p>
            <Link href="/">
              <a className="text-xl font-bold button-1">
                Back Home <FaHome />
              </a>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <div className="flex flex-col gap-2">
              <h2 className="heading-md !mb-2 mt-10 fade-effect-quick">
                {" "}
                Want to work together? Let&apos;s chat!
              </h2>
              <p>
                Send me a message using the form below, or{" "}
                <a
                  href="http://twitter.com/FieroTy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sky-500"
                >
                  DM me
                </a>{" "}
                on Twitter.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-full h-full gap-4 mt-5"
            >
              <div className="flex flex-col items-start w-[70%]">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  className="w-full mt-1 textarea-tw "
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start w-[70%]">
                <label htmlFor="email">
                  <span className="text-rose-400">* </span>Email:
                </label>
                <input
                  id="email"
                  className="w-full mt-1 textarea-tw "
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start w-[70%]">
                <label htmlFor="message" className="">
                  <span className="text-rose-400">* </span>Message:
                </label>
                <textarea
                  id="message"
                  className="w-full mt-1 textarea-tw"
                  type="text"
                  rows="4"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <ReCAPTCHA
                sitekey="6Ld6T9shAAAAALBkXovooVihStYeAFV1kr1ZBoW3"
                // size="compact"
                theme={theme}
                onChange={() => {
                  setVerified(true);
                }}
              />
              <button
                // type="submit"
                className="mb-10 button-1 !text-xl"
              >
                Send
                <FaRegPaperPlane />
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
