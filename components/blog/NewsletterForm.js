import React from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div style={{}} className="px-5 py-2 rounded-2xl ring-2">
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
        <button className="button-1 !px-5 whitespace-nowrap" onClick={submit}>
          Sign Up <FaEnvelope />
        </button>
      </div>

      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

export default CustomForm;
