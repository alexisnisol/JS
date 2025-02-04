
import { EventFactory } from "./EventFactory.js";

const sport = EventFactory.createSport(new Date(), 'football', 'teamA', 'teamB');
console.log(sport.render());
const concert = EventFactory.createConcert(new Date(), 'artist');
console.log(concert.render());