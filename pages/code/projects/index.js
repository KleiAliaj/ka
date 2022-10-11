import Projects from "@/components/projects/Projects";
import Head from "next/head";
import React from "react";

function index() {
  return (
   <>
   <Head>
    <title>Ty&apos;s Coding Projects</title>
        <meta
            name="description"
            content={`Coding projects and works.`}
          />

    </Head>
      <div className="page-container">
        <h1 className="heading-lg">All Projects</h1>
        <Projects />
      </div>
   </>
  );
}

export default index;
