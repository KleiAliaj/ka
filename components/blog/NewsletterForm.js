import React, { useEffect, useState } from "react";
import { FaArrowRight, FaEnvelope, FaSpinner } from "react-icons/fa";

const CustomForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(false);
  let email;
  const submit = (e) => {
    e.preventDefault();
    if (email && email.value.indexOf("@") > -1) {
      onValidated({
        EMAIL: email.value,
      });
    }
  };

  useEffect(() => {
    if (status === "sending") {
      setTimeout(() => {
        if (status === "sending") {
          setError(true);
        }
      }, 4000);
    }
  }, [status]);
  return (
    <div
      style={{}}
      className="px-5 py-4 shadow-md rounded-2xl shadow-sky-400 bg-white/60 dark:bg-slate-700/60"
    >
      {status === "success" ? (
        <div>
          <h3 className="heading-md">Thanks for signing up! </h3>
          <p className="mb-2">You should receive a welcome email soon.</p>
        </div>
      ) : (
        <>
          <h3 className="heading-md">Sign up for my monthly newsletter!</h3>
          <p className="mb-2">
            Every Month I send out a short newsletter with fun resources, and my
            latest blog post. No spam, ever!{" "}
          </p>
          <div className="flex w-full gap-2">
            <input
              className="textarea-tw f2 w-full h-fit !py-2"
              ref={(node) => (email = node)}
              type="email"
              placeholder="Your email"
            />
            <br />
            <button className="button-1 !px-5 " onClick={submit}>
              {status === "sending" && !error ? (
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

          {(error || status === "error") && (
            <div className="mt-2 text-lg text-red-500 f2">
              An error occurred. Use{" "}
              <a
                href="http://eepurl.com/h-tEGT"
                className="underline text-sky-500"
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
