import { eventModel } from "../models/event-models";
import { userModel } from "../models/user-model";

async function getAllEvents() {
  const allEvents = await eventModel.find();
  return allEvents;
}

async function getEventById(id) {
  const event = await eventModel.findById(id);
  return event;
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  //console.log(credentials);
  const user = await userModel.findOne(credentials);
  console.log(user);
  if (user) {
    return user;
  }
  return null;
}
export { getAllEvents, getEventById, createUser, findUserByCredentials };
