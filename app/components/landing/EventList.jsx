import EventCard from "./EventCard";
import { getAllEvents } from "@/app/db/queries";

export default async function EventList() {
  const allEvents = await getAllEvents();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {allEvents.length &&
        allEvents.map((event) => (
          <EventCard key={event._id.toString()} event={event} />
        ))}
    </div>
  );
}
