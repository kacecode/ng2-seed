export class Bar {
    name: string;

    constructor(name) {
        this.name = name;
    }

    announce() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
