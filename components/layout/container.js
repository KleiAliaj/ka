export default function Container({ children }) {
  return (
    <div className="container w-full mx-auto md:px-2 fade-effect-quick">
      {children}
    </div>
  );
}
