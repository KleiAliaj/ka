import React from "react";
import { Collapse } from "react-collapse";
import { BsArrow90DegDown } from "react-icons/bs";
import { FaCaretRight, FaStar } from "react-icons/fa";
import axios from "axios";

function Links({ links }) {
  console.log(links);
  //   console.log(errors);
  const [linksList, setLinksList] = React.useState(links);
  return (
    <div className="page-container">
      <h3>Links</h3>

      <Category title="Code" cn="">
        {linksList.code.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>

      <Category title="Crypto" cn="">
        {linksList.crypto.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>
      <Category title="Personal Development" cn="">
        {linksList.personalDev.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>
      <Category title="AI" cn="">
        {linksList.ai.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>
      <Category title="Tools" cn="">
        {linksList.tools.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>
      <Category title="Innovation" cn="">
        {linksList.crypto.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>

      <Category title="Tools" cn="">
        {linksList.tools.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>
      <Category title="Fun Stuff" cn="">
        {linksList.fun.map((link, index) => {
          return (
            <Resource
              name={link.title}
              fav={link.fav}
              url={link.url}
              note={link.note}
            />
          );
        })}
      </Category>
    </div>
  );
}

function Resource({ name, url, cn, fav, note }) {
  return (
    <div className="my-2 ml-10">
      <div className="flex items-center gap-2 ">
        {fav ? (
          <FaStar className="text-sky-600" />
        ) : (
          <FaStar className="opacity-0 text-sky-200" />
        )}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-alias w-fit"
          href={url}
        >
          <div className="flex items-center gap-2">
            <img
              src={
                "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url
              }
              alt={"Favicon for " + name}
              className="scale-125"
            />
            <p className="transition hover:underline text-sky-500 dark:text-sky-200 visited:text-indigo-600 hover:text-sky-700 hover:dark:text-sky-300">
              {name}
            </p>
          </div>
        </a>
      </div>
      {note && (
        <div className="flex items-center gap-2 ml-12 cursor-default ">
          <BsArrow90DegDown className="-rotate-90 -translate-y-1 text-sky-900 dark:text-sky-700" />
          <p className="text-sm text-slate-500 dark:text-slate-200">{note}</p>
        </div>
      )}
    </div>
  );
}

function Category({ children, title, cn }) {
  const [isOpened, setIsOpened] = React.useState(true);

  return (
    <div className={"w-full h-fit " + cn}>
      {" "}
      <div
        className="flex items-center gap-2 cursor-pointer "
        onClick={() => setIsOpened(!isOpened)}
      >
        <FaCaretRight
          className={
            "transition text-3xl " + (isOpened ? " rotate-90" : "rotate-0 ")
          }
        />
        <p
          className={
            "text-xl select-none hover:scale-105 transition " +
            (isOpened
              ? " font-bold text-sky-600 dark:text-sky-200"
              : " font-normal  text-slate-900 dark:text-white")
          }
        >
          {title}
        </p>
      </div>
      <Collapse
        isOpened={isOpened}
        hasNestedCollapse
        className="fade-effect-quick"
      >
        {children}
      </Collapse>
    </div>
  );
}

export default Links;

export async function getStaticProps(context) {
  let links = {};

  const axiosRequest = await axios({
    method: "POST",
    //url: "http://localhost:3000/api/airtable-links",
  })
    .then((response) => {
      let data = response.data;

      let codeArray = data.filter((item) => item.type === "Code");
      codeArray.sort(function (a, b) {
        return b.fav - a.fav;
      });

      let personalDevArray = data.filter(
        (item) => item.type === "Personal Development"
      );
      personalDevArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let aiArray = data.filter((item) => item.type === "AI");
      aiArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let innovationArray = data.filter((item) => item.type === "Innovation");
      innovationArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let toolsArray = data.filter((item) => item.type === "Tools");
      toolsArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let funArray = data.filter((item) => item.type === "Fun");
      funArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let cryptoArray = data.filter((item) => item.type === "Crypto");
      cryptoArray.sort(function (a, b) {
        return b.fav - a.fav;
      });

      let dataToPass = {
        code: codeArray,
        personalDev: personalDevArray,
        ai: aiArray,
        innovation: innovationArray,
        tools: toolsArray,
        fun: funArray,
        crypto: cryptoArray,
      };
      links = dataToPass;
    })
    .catch((error) => {
      console.log(error);
      //   if (error.response) {
      //     // Request made and server responded
      //     console.log(error.response.data);
      //     console.log(error.response.status);
      //     console.log(error.response.headers);
      //   } else if (error.request) {
      //     // The request was made but no response was received
      //     console.log(error.request);
      //   } else {
      //     // Something happened in setting up the request that triggered an Error
      //     console.log("Error", error.message);
      //   }
      //   errors = JSON.stringify(error);
    });

  return {
    props: { links },
    revalidate: 21600,
  };
}
