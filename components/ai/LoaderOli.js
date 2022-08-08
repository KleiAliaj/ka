// Loading Spinner
export default function LoaderOli({ show, cN = "" }) {
  return show ? (
    <div
      className={
        " fade-effect-turbo relative flex justify-center scale-150 " + cN
      }
    >
      <div className="absolute z-50 scale-150 top-3 left-[17px]">🤔</div>
      <div className="loader"></div>
    </div>
  ) : null;
}
