import Image from "next/image";
import Date from "./date";

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-3 rounded-full shadow-lg h-14 w-14">
        {picture && (
          <Image
            src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
            className="rounded-full"
            fill
            sizes="3.5rem"
            alt={name}
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold f1 sm:hidden md:block">{name}</div>
        {date && <Date dateString={date} />}
      </div>
    </div>
  );
}
