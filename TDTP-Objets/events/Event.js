export class Event {

    constructor(date) {
        this.date = date;
    }

    render() {
        return `Prévu le ${this.date}.`;
    }
}
