export default function Container({ children }) {
  return (
    <div className="container mx-auto md:px-5 fade-effect-quick">
      {children}
    </div>
  );
}
