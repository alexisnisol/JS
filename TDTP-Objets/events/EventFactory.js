import { Sport } from './Sport.js';
import { Concert } from './Concert.js';

export class EventFactory {

    static createSport(date, sport, teamA, teamB) {
        return new Sport(date, sport, teamA, teamB);
    }

    static createConcert(date, artist) {
        return new Concert(date, artist);
    }
}