import { useState } from "react";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { FaRegPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    
    console.log(data);

    fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      });
  };

  return (
    <div>
      <main>
        <p>
          Want to work together? Let's chat! Send me a message using the form
          below and I'll get back to you as soon as I can.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-1 "
        >
          <div className="flex flex-col items-start">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="textarea-tw"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="textarea-tw"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="message" className="">
              Message:
            </label>
            <textarea
              id="message"
              className="textarea-tw"
              type="text"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 text-white transition rounded-full shadow-lg bg-sky-500 shadow-sky-300 hover:bg-sky-600 hover:shadow-sky-400 hover:shadow-xl hover:scale-105 active:scale-90"
          >
            Send
            <FaRegPaperPlane />
          </button>
        </form>
      </main>
    </div>
  );
}
