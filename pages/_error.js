import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div className="page-container ">
      <h2 className="!text-8xl f1 logo ">500</h2>
      <div className="w-fit h-fit">
        <div className="flex flex-col items-center ">
          <p className="text-3xl">An UnGnome error has occurred.</p>
          <p>The server didn't like that... Try refreshing maybe? Idk </p>
          <p>
            If you keep getting an error,{" "}
            <Link href="/contact">
              <a>send me a message</a>
            </Link>{" "}
            and I'll go bug hunting.{" "}
          </p>
          <img
            src="/assets/other/gnome.png"
            alt="ungnome error occured"
            className="h-80 rounded-3xl !m-0 !p-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Error;
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
