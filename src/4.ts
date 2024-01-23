class Key {
    private sign: number;
  
    constructor() {
      this.sign = Math.random();
      }
  
    getSignature(): number {
      return this.sign;
    }
  }
  
  class Person {
    // private key: Key;
    // protected name: string;
    constructor(private key: Key, protected name: string) {
      this.key = key;
      this.name = name;
    }
  
    getKey(): Key {
      return this.key;
      
    }

    getName(): string {
       return this.name; 
    }
  }
  
  abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.door = false;
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getName()} entered the house.`);
      } else {
        console.log('The door is closed.');
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('Invalid key. The door remains closed.');
      }
    }
  }


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, 'John');

house.openDoor(person.getKey());
house.comeIn(person);

export {};