import Container from "./container";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer className="relative ">
      {/* <footer className=" bg-gradient-to-t from-[#3CA0CB] via-[#3CA0CB] relative"> */}
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex flex-col items-center w-full gap-2 bg-clear-pl4">
          <p className="text-[11px] text-slate-300">
            Copyright © {date} Ty Fiero
          </p>
        </div>
      </div>
    </footer>
  );
}
