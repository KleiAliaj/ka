import ContactForm from "@/components/etc/ContactForm";
import Head from "next/head";
import React from "react";

function Contact() {
  return (
    <>
     <Head>
        <title>Contact Me</title>
        <meta
            name="description"
            content={`Send me a message here!`}
          />
      </Head>
      <div className="page-container">
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
