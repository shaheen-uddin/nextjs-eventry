import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";

export default function EventCard({ event }) {
  // console.log(event);
  return (
    <>
      {event && (
        <div className="overflow-hidden rounded-md bg-[#242526]">
          <Image
            src={event.imageUrl}
            alt="Event 1"
            className="w-full"
            width={400}
            height={400}
          />

          <div className="p-3">
            <Link
              href={`/details/${event._id.toString()}`}
              className="font-bold text-lg"
            >
              {event.name}
            </Link>
            <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
            <div className="text-[#737373] text-sm mt-1">
              <span>1k Interested</span>
              <span>|</span>
              <span>40K Going</span>
            </div>

            <ActionButtons />
          </div>
        </div>
      )}
    </>
  );
}
