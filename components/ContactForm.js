import { useState } from "react";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { FaHome, FaRegPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ContactForm() {
  console.log("RERENDER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thanks, setThanks] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

    const data = {
      name,
      email,
      message,
    };

    console.log(data);

    await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(() => {
        toast.success("Message sent! ✉️");
        console.log("HI THERE BITCH");

        console.log("why no work?");
      })
      .catch(() => {
        toast.error("Message failed to send :( ");
      });
    setThanks(true);
    // toast.success("Message sent! ✉️");
  };

  return (
    <div className="fade-effect-quick sm:mb-[50px] md:mb-0">
      <main>
        {thanks ? (
          <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-4">
            <p className="text-xl font-bold ">
              Thanks for reaching out! I'll get back to you soon. 😊
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
              <h2 className="heading-md !mb-2 mt-10">
                {" "}
                Want to work together? Let's chat!
              </h2>
              <p className="mb-2">
                Send me a message using the form below and I'll get back to you
                as soon as I can.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-full h-full gap-4 mt-10"
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
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  className="w-full mt-1 textarea-tw "
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start w-[70%]">
                <label htmlFor="message" className="">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="w-full mt-1 textarea-tw"
                  type="text"
                  rows="4"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                // type="submit"
                className="button-1"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
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
