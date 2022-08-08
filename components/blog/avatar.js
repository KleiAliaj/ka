import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        {picture && (
          <Image
            src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
            layout="fill"
            className="rounded-full"
            alt={name}
          />
        )}
      </div>
      <div className="text-2xl font-bold f1">{name}</div>
    </div>
  );
}
