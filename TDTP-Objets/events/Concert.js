import { Event } from './Event.js';

export class Concert extends Event {
    
    constructor(date, artist) {
        super(date);
        this.artist = artist;
    }

    render() {
        return `Concert de ${this.artist}. ${super.render()}`;
    }
}