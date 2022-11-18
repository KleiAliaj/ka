import React, { useEffect, useState } from "react";
import { FaArrowRight, FaEnvelope, FaSpinner } from "react-icons/fa";
import axios from "axios";

const CustomForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await axios({
      method: "POST",
      url: "/api/mailerLite",
      data: {
        email: email,
      },
    })
      .then((response) => {
        if (response.data.results === "success") {
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-5 py-4 shadow-md rounded-2xl shadow-sky-400 bg-white/60 dark:bg-slate-700/60">
      {status === "success" ? (
        <div>
          <h3 className="heading-md">Thanks for signing up! </h3>
          <p className="mb-2">You should receive a welcome email soon.</p>
        </div>
      ) : (
        <>
          <h3 className="heading-md">Sign up for my monthly newsletter!</h3>
          <p className="mb-2">
            Every month I send out a short newsletter with fun resources, and my
            latest blog post. No spam, ever!
          </p>
          <div className="flex w-full gap-2">
            <input
              className="textarea-tw f2 w-full h-fit !py-2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <button className="button-1 !px-5 " onClick={submit}>
              {status === "sending" ? (
                <div className="flex items-center gap-2 whitespace-nowrap">
                  Sending <FaSpinner className="animate-spin" />
                </div>
              ) : (
                <div className="flex items-center gap-2 whitespace-nowrap">
                  Sign Up <FaEnvelope />
                </div>
              )}
            </button>
          </div>

          {status === "error" && (
            <div className="mt-2 text-lg text-red-500 f2">
              An error occurred. Use{" "}
              <a
                href="https://dashboard.mailerlite.com/forms/152607/66347209167210126/share"
                className="anc"
                target="_blank"
                rel="noopener noreferrer"
              >
                this link
              </a>{" "}
              instead.
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomForm;
