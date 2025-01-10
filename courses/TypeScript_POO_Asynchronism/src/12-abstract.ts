export abstract class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof');
    }
  }
}

/* const animal = new Animal('elite');
animal.greeting(); */

const cheis = new Dog('cheis', 'eu');
cheis.greeting();
cheis.woof(2);
