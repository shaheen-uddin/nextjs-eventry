import { eventModel } from "../models/event-models";
async function getAllEvents() {
  const allEvents = await eventModel.find();
  return allEvents;
}

async function getEventById(id) {
  const event = await eventModel.findById(id);
  return event;
}
export { getAllEvents, getEventById };
