export default function Container({ children }) {
  return (
    <div className="w-full mx-auto sm:px-5 md:px-2 fade-effect-quick">
      {children}
    </div>
  );
}
