export default function PostTitle({ children }) {
  return (
    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl md:leading-none md:text-left f1 text-sky-800 dark:text-sky-300">
      {children}
    </h1>
  );
}
