import { Event } from './Event.js';

export class Sport extends Event {

    constructor(date, sport, teamA, teamB) {
        super(date);
        this.sport = sport;
        this.teamA = teamA;
        this.teamB = teamB;
    }

    render() {
        return `Rencontre de ${this.sport} entre ${this.teamA} et ${this.teamB}. ${super.render()}`;
    }
}