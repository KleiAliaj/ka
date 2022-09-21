export default function PostTitle({ title, blurb }) {
  return (
    <header>
      <h1 className=" text-4xl mb-3 font-bold leading-tight tracking-tighter  md:text-3xl lg:text-[3.8rem] md:leading-none text-left f1 text-sky-800 dark:text-sky-300">
        {title}
      </h1>
      {/* <p className="mb-1 sm:text-base md:text-xl md:text-left">{blurb}</p> */}
    </header>
  );
}
