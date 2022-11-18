import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { projectArray } from "@/components/projects/projectArray";
import Error from "pages/_error";
import FourOhFour from "pages/404";
import Carousel from "@/components/projects/Carousel";
import GithubButton from "@/components/etc/githubButton";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import FullLoader from "@/components/etc/FullLoader";
export default function Project({ proj }) {
  const router = useRouter();
  if (!router.isFallback && !proj?.slug) {
    return <FourOhFour statusCode={404} />;
  }
  return (
    <div className="page-container">
      {router.isFallback ? (
        <FullLoader show={true} />
      ) : (
        <>
          <Head>
            <title>{proj.title}</title>
            <meta name="description" content={proj.description} />
          </Head>
          <div className="relative page-container">
            <Link
              className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 "
              href={"/code/projects"}
            >
              <FaArrowLeft /> Back to Projects
            </Link>
            <div
              className={
                "flex flex-col items-center sm:!px-3 md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto w-full"
              }
            >
              <div className="flex justify-center w-full fade-effect">
                <h1 className="heading-lg !mb-0">{proj.title}</h1>
              </div>
              <div
                className="flex flex-col items-center mb-2 text-box"
                dangerouslySetInnerHTML={{
                  __html: proj.content.longDescription,
                }}
              ></div>
              <section className="flex gap-4 lg:flex-row sm:flex-col">
                <div className="w-full lg:w-1/2">
                  <h2 className="w-full text-center heading-md !mb-0">
                    Details
                  </h2>
                  <div className="flex flex-col items-center text-box h-fit">
                    <div className="flex flex-col">
                      <div className="flex justify-center w-full gap-2 ">
                        {proj.content.links.url ? (
                          <Link
                            href={proj.content.links.urlLink}
                            className="button-1 w-fit f2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {proj.content.links.urlText} <FaExternalLinkAlt />
                          </Link>
                        ) : null}
                        {proj.content.links.url2 ? (
                          <Link
                            href={proj.content.links.url2Link}
                            className="button-1 !bg-teal-500 !shadow-teal-300 w-fit f2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {proj.content.links.url2Text} <FaExternalLinkAlt />
                          </Link>
                        ) : null}
                        {proj.content.links.github ? (
                          <GithubButton url={proj.content.links.githubLink} />
                        ) : null}
                        {proj.content.links.productHunt ? (
                          <a
                            href={proj.content.links.phLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 transition scale-110 hover:scale-125"
                          >
                            <picture>
                              <source
                                srcSet={proj.content.links.phImgSrc}
                                type="image/svg"
                              />
                              <img
                                src={proj.content.links.phImgSrc}
                                alt={`${proj.title} | Product Hunt`}
                                style={{ width: "250px", height: "54px" }}
                                width="250"
                                height="54"
                              />
                            </picture>
                          </a>
                        ) : null}
                      </div>
                      <div className="w-full">
                        {" "}
                        <h2 className="w-full text-left heading-sm !mb-0 !mt-2 ">
                          Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-2 px-3 py-1">
                          {proj.technologies.map((tech) => (
                            <TechChip key={tech.name} content={tech} />
                          ))}
                        </div>
                      </div>
                      {proj.content.features.length > 1 ? (
                        <div className="w-full">
                          <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                            Features
                          </h2>
                          <ol
                            className="ml-6 font-bold list-decimal f2 "
                            dangerouslySetInnerHTML={{
                              __html: proj.content.features,
                            }}
                          ></ol>
                        </div>
                      ) : null}
                      <div className="w-full">
                        <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                          Learnings
                        </h2>
                        <ol
                          className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200"
                          dangerouslySetInnerHTML={{
                            __html: proj.content.learnings,
                          }}
                        ></ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                  <h2 className="w-full text-center heading-md !mb-0">
                    Images
                  </h2>
                  <Carousel
                    imgs={proj.content.imgArray}
                    altText={`Image of the ${proj.title} project`}
                  />
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const array = projectArray.filter((item) => item.slug !== "ideaisland");

  // add "404" as default
  return {
    paths: array.map((proj) => `/code/projects/${proj.slug}` || "404"),
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const array = projectArray.filter((item) => item.slug === params.slug);
  const proj = array[0] || null;
  return {
    props: {
      proj,
    },
  };
}
