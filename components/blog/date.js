import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="mt-0 italic f2 opacity-70" dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
